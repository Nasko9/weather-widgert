// Component
import Widget from 'components/Widget';

// Hook
import useStream from './useStream';

export default function Stream() {
  const { videoRef } = useStream();

  return (
    <>
      <video
        ref={videoRef}
        className="w-screen h-screen object-fill"
        preload="auto"
      />
      <Widget />
    </>
  );
}
