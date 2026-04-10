import { Viewer } from 'mapillary-js';
import { useEffect, useRef, type JSX } from 'react';

export function MapComponent({ image }: { image: string }): JSX.Element {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!viewerRef.current) {
      return;
    }
    const viewer = new Viewer({
      accessToken: 'MLY|32720887867555439|522f4aef2f9c90cbe50972d8629297f0',
      container: viewerRef.current,
      imageId: image,
    });
    return (): void => {
      viewer.remove();
    };
  }, [image]);

  return (
    <div
      ref={viewerRef}
      className="mapillary-viewer"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
      }}
    />
  );
}
