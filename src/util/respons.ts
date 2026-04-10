/* eslint-disable @typescript-eslint/no-explicit-any */
import { router } from '../router';
import { setImageId } from '../store/slices/gameSlice';

export const response: Record<string, (payload: any, dispatch: any) => void> = {
  LOBBY_CREATED: (payload) => {
    router.navigate(`/lobby?${payload.lobbyId}`);
    console.log('lobby create:', payload.lobbyId);
  },

  ROUND_STARTED: (payload, dispatch) => {
    dispatch(setImageId(payload.pointId));
    router.navigate(`/game?${payload.lobbyId}`);
    console.log('start round');
  },

  ROUND_FINISHED: (payload) => {
    console.log('result', payload);
  },

  ERROR: (payload) => {
    console.log('error: ' + payload.message);
  },
  GUESS_SUCKSESS: (payload) => {
    console.log(payload);
  },
};
