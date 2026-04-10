import type { socketProps } from '../../util/interfaces';
import { useOutletContext } from 'react-router-dom';

function MainMenu() {
  const { sendCommand } = useOutletContext<socketProps>();
  const handleCreateLobby = () => {
    sendCommand('createLobby');
  };

  return <button onClick={handleCreateLobby}>CREATE LOBBY</button>;
}

export default MainMenu;
