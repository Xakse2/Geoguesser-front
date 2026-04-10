import { Outlet } from 'react-router-dom';
import { useGameSocket } from './hooks/useSocket';
import type { socketProps } from './util/interfaces';
import { router } from './router';
import './App.css';
import type { JSX } from 'react';

function App(): JSX.Element {
  const { sendCommand } = useGameSocket();

  const handlerClick = (): void => {
    router.navigate('/');
  };

  return (
    <div className="app-container">
      <button onClick={handlerClick}>BACK</button>
      <Outlet context={{ sendCommand } satisfies socketProps} />
    </div>
  );
}

export default App;
