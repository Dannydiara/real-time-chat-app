'use client';

import React, { useEffect, useState, useRef } from 'react';
import { initSocket, getSocket } from '~/lib/socket';
import MessageBubble from '~/components/MessageBubble';

interface Message {
  id: string;
  user: string;
  text: string;
}

interface ChatWindowProps {
  roomId: string;
}

export default function ChatWindow({ roomId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socket = initSocket();

    // Join the specific room
    socket.emit('joinRoom', roomId);

    socket.on('message', (msg: Message) => {
      setMessages(prev => [...prev, msg]);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    });

    return () => {
      socket.emit('leaveRoom', roomId);
      socket.off('message');
    };
  }, [roomId]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg: Message = { id: Date.now().toString(), user: 'Me', text: input };
    getSocket().emit('sendMessage', { roomId, message: msg });
    setMessages(prev => [...prev, msg]);
    setInput('');
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex-1 overflow-auto mb-4">
        {messages.map(m => (
          <MessageBubble key={m.id} user={m.user} text={m.text} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="flex">
        <input
          className="flex-1 border rounded-l px-3 py-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
