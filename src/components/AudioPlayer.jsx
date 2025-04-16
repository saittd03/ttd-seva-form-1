import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, []);

  return <audio ref={audioRef} src="/audio.mp3" loop autoPlay hidden />;
};

export default AudioPlayer;
