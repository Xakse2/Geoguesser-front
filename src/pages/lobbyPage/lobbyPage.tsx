import { useOutletContext } from 'react-router-dom';
import type { socketProps } from '../../util/interfaces';

function LobbyPage() {
  const { sendCommand } = useOutletContext<socketProps>();
  const handleStart = () => {
    sendCommand('startRound');
  };
  return (
    <div>
      <p>вы в лоби!</p>
      <button onClick={handleStart}>start</button>
    </div>
  );
}

export default LobbyPage;
