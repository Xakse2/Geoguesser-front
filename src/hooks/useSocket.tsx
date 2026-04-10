import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { response } from '../util/respons';
import type { SocketReturn } from '../util/interfaces';

export const useGameSocket = (): SocketReturn => {
  const dispatch = useDispatch();

  const ws = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const lobbyId = params.get('lobbyId');
    const url = lobbyId ? `ws://localhost:3000?lobbyId=${lobbyId}` : 'ws://localhost:3000';
    return new WebSocket(url);
  }, []);

  useEffect(() => {
    const handleOpen = (): void => {
      console.log('WS Connected');
    };

    const handleMessage = (event: MessageEvent): void => {
      const { type, payload } = JSON.parse(event.data);
      response[type](payload, dispatch);
    };

    ws.addEventListener('open', handleOpen);
    ws.addEventListener('message', handleMessage);

    return (): void => {
      ws.removeEventListener('open', handleOpen);
      ws.removeEventListener('message', handleMessage);
      ws.close();
    };
  }, [ws, dispatch]);

  const sendCommand = (type: string, payload?: unknown): void => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type, payload }));
    }
  };

  return { ws, sendCommand };
};
