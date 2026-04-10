import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { MapComponent } from '../../components/mapApi/mapComponent';
import { MiniMapComponent } from '../../components/mapApi/miniMapComponent';
import { useDispatch } from 'react-redux';
import { setUserGuess } from '../../store/slices/gameSlice';
import type { socketProps } from '../../util/interfaces';
import { useOutletContext } from 'react-router-dom';
import './gamePage.css';

function GamePage() {
  const { sendCommand } = useOutletContext<socketProps>();
  const dispatch = useDispatch();

  const { imageId, userGuess } = useSelector((state: RootState) => state.game);

  const handleGuess = () => {
    if (!userGuess) {
      return console.log('guess bro');
    }
    sendCommand('checkGuess', {
      id: imageId,
      lat: userGuess.lat,
      lng: userGuess.lng,
    });
  };

  const handleLocationSelect = (lat: number, lng: number) => {
    dispatch(setUserGuess({ lat, lng }));
  };

  return (
    <div className="map">
      <MapComponent image={imageId} />
      <div className="miniMap">
        <MiniMapComponent onLocationSelect={handleLocationSelect} />
        <button className="button" onClick={handleGuess}>
          guess
        </button>
      </div>
    </div>
  );
}

export default GamePage;
