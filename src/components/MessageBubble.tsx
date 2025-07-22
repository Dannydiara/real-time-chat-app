'use client';

import React from 'react';

interface Message {
  id: string;
  user: string;
  text: string;
}

export default function MessageBubble({ user, text }: Pick<Message, 'user' | 'text'>) {
  const isMe = user === 'Me';
  return (
    <div className={`flex mb-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs p-2 rounded-lg ${
          isMe ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {!isMe && <div className="font-bold text-sm mb-1">{user}</div>}
        <div>{text}</div>
      </div>
    </div>
  );
}
