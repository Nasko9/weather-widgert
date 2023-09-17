import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

export default function useStream() {
  const src = process.env.REACT_APP_LIVE_STREAM_URL;

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !src) return;

    const typedVideo = video as HTMLVideoElement;
    let hls: Hls;

    if (Hls.isSupported()) {
      let hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(typedVideo);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        typedVideo.muted = true;
        typedVideo.play();
      });
    } else if (typedVideo.canPlayType('application/vnd.apple.mpegurl')) {
      typedVideo.src = src;
      typedVideo.addEventListener('loadedmetadata', function () {
        typedVideo.muted = true;
        typedVideo.play();
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return { videoRef };
}
