import React, { useState, useEffect } from 'react';
import { Volume2, Play, Pause, Square, RotateCcw } from 'lucide-react';

interface ReadAloudControlProps {
  text: string;
  label?: string;
  className?: string;
}

export const ReadAloudControl: React.FC<ReadAloudControlProps> = ({
  text,
  label = 'Listen to Shloka',
  className = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (!isSupported) return;
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Calm, meditative speed for sacred shlokas
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    synth.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (!isSupported) return;
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (!isSupported) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {!isPlaying && !isPaused && (
        <button
          onClick={handlePlay}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          title="Read aloud shloka"
        >
          <Volume2 className="w-4 h-4" />
          <span>{label}</span>
        </button>
      )}

      {isPlaying && (
        <button
          onClick={handlePause}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-800 hover:bg-amber-700 text-white text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          title="Pause reading"
        >
          <Pause className="w-4 h-4" />
          <span>Pause</span>
        </button>
      )}

      {isPaused && (
        <button
          onClick={handlePlay}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-sm font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          title="Resume reading"
        >
          <Play className="w-4 h-4" />
          <span>Resume</span>
        </button>
      )}

      {(isPlaying || isPaused) && (
        <button
          onClick={handleStop}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-950/80 hover:bg-amber-900 border border-amber-700/60 text-amber-200 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          title="Stop reading"
        >
          <Square className="w-3.5 h-3.5" />
          <span>Stop</span>
        </button>
      )}
    </div>
  );
};
