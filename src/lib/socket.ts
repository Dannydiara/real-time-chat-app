import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null;

export function initSocket() {
  if (!socket) {
    socket = io("/api/socket");
    console.log("📡 Socket client initialized");
  }
  return socket;
}

export function getSocket() {
  if (!socket) throw new Error("Socket not initialized — call initSocket() first");
  return socket;
}

