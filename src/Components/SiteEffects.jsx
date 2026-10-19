import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const audioAmbiental = document.getElementById("audio-ambiental");
    if (!audioAmbiental) return;
    audioAmbiental.volume = 0.7;
    const iniciarAudio = () => { audioAmbiental.muted = false; audioAmbiental.play().catch(() => {}); };
    const manejarVisibilidad = () => {
      if (document.hidden) audioAmbiental.pause();
      else if (audioAmbiental.paused) iniciarAudio();
    };
    window.addEventListener("load", iniciarAudio);
    document.addEventListener("visibilitychange", manejarVisibilidad);
    return () => {
      window.removeEventListener("load", iniciarAudio);
      document.removeEventListener("visibilitychange", manejarVisibilidad);
    };
  }, []);
  useEffect(() => {
    const actualizarMargenAncla = () => {
      const header = document.getElementById("site-header");
      if (header) document.documentElement.style.setProperty("--header-height", `${header.getBoundingClientRect().height}px`);
    };
    actualizarMargenAncla();
    window.addEventListener("resize", actualizarMargenAncla);
    window.addEventListener("load", actualizarMargenAncla);
    return () => {
      window.removeEventListener("resize", actualizarMargenAncla);
      window.removeEventListener("load", actualizarMargenAncla);
    };
  }, []);
  return <audio id="audio-ambiental" autoPlay loop preload="auto" playsInline><source src="/audio/freesound_community-birds-chirping-ambiance-26052 1.26.53 p.m..mp3" type="audio/mpeg" />Tu navegador no soporta audio HTML5.</audio>;
}
