import ChatWindow from '~/components/ChatWindow';

interface Props {
  params: { roomId: string };
}

export default function ChatRoomPage({ params }: Props) {
  const { roomId } = params;

  return (
    <div className="h-screen flex flex-col">
      <header className="p-4 bg-gray-100">
        <h2 className="text-xl font-bold">Room: {roomId}</h2>
      </header>
      {/* ChatWindow is still a 'use client' component */}
      <ChatWindow roomId={roomId} />
    </div>
  );
}
