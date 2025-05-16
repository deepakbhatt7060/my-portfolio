import { useState, useEffect } from "react";

type audioProps = { navigation?: boolean };
const useAudio = ({ navigation = false }: audioProps) => {
  const [audioPlayed, setAudioPlayed] = useState<boolean>(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);
  useEffect(() => {
    let audio = null;
    if (navigation) {
      audio = new Audio("/navigationSound.mp3");
    } else {
      audio = new Audio("/menuSelectSound.mp3");
    }
    audio.preload = "auto";
    setAudioRef(audio);
  }, [navigation]);

  const handleAudioPlay = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!audioRef) return;
    if (e.type === "mouseenter" && !audioPlayed) {
      audioRef.currentTime = 0;
      audioRef.play();
      setAudioPlayed(true);
    } else if (e.type === "mouseleave") {
      setAudioPlayed(false);
    } else {
      audioRef.currentTime = 0;
      audioRef.play();
      setAudioPlayed(true);
    }
  };

  return { handleAudioPlay, audioRef };
};
export default useAudio;
