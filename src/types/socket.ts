// Payloads the client can send to the server:
export interface ClientToServerEvents {
  joinRoom: (roomId: string) => void;
  leaveRoom: (roomId: string) => void;
  sendMessage: (data: { roomId: string; message: string }) => void;
}

// Events the server can emit to the client:
export interface ServerToClientEvents {
  message: (message: string) => void;
}
