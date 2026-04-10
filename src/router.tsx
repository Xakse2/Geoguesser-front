import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import LobbyPage from './pages/lobbyPage/lobbyPage';
import MainMenu from './pages/mainMenuPage/mainMenu';
import GamePage from './pages/gamePage/gamePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainMenu />,
      },
      {
        path: 'lobby',
        element: <LobbyPage />,
      },
      {
        path: 'game',
        element: <GamePage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
