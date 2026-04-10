export interface socketProps {
  sendCommand: (type: string, payload?: unknown) => void;
}

export interface SocketReturn {
  ws: WebSocket;
  sendCommand: (type: string, payload?: unknown) => void;
}
