import type { NextApiRequest } from "next";
import type { NextApiResponseServerIO } from "~/types/next";
import { Server } from "socket.io";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
} from "~/types/socket";

export const config = {
  api: { bodyParser: false },
};

let ioServer: Server<ClientToServerEvents, ServerToClientEvents> | null = null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  const serverSocket = res.socket.server;

  if (!serverSocket.io) {
    // Now ioServer knows your event types
    ioServer = new Server<ClientToServerEvents, ServerToClientEvents>(serverSocket);

    ioServer.on("connection", (socket) => {
      console.log("✅ Socket connected:", socket.id);

      socket.on("joinRoom", async (roomId) => {
        // roomId is typed as string
        await socket.join(roomId);
      });

      socket.on("leaveRoom", async (roomId) => {
        await socket.leave(roomId);
      });

      socket.on("sendMessage", ({ roomId, message }) => {
        // TypeScript knows roomId is string
        ioServer?.to(roomId).emit("message", message);
      });
    });

    serverSocket.io = ioServer;
    console.log("🔌 Socket.IO server initialized");
  }

  res.end();
}
