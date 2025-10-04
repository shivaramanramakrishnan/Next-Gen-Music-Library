import { useCallback, useEffect } from 'react';
import { useAudioPlayer } from './useAudioPlayer';
import { useQueue } from '@/context/queueContext';
import { ITrack } from '@/types';

export const useQueueAudioPlayer = () => {
  const audioPlayer = useAudioPlayer();
  const { 
    queue, 
    getCurrentTrack, 
    getNextTrack, 
    getPreviousTrack, 
    playNext, 
    playPrevious,
    playTrackAtIndex,
    toggleShuffle: queueToggleShuffle,
    toggleRepeat: queueToggleRepeat
  } = useQueue();

  const currentTrack = getCurrentTrack();
  const nextTrack = getNextTrack();
  const previousTrack = getPreviousTrack();

  // Sync audio player with queue current track
  useEffect(() => {
    if (currentTrack && currentTrack.id !== audioPlayer.currentTrack?.id) {
      console.log('🎵 Queue: Playing track from queue:', currentTrack.name || currentTrack.title);
      audioPlayer.playTrack(currentTrack);
    }
  }, [currentTrack, audioPlayer]);

  // Enhanced skip next that works with queue
  const skipNext = useCallback(() => {
    console.log('🎵 Queue: Skip next');
    if (nextTrack) {
      playNext();
    } else {
      console.log('🎵 Queue: No next track available');
    }
  }, [nextTrack, playNext]);

  // Enhanced skip previous that works with queue
  const skipPrevious = useCallback(() => {
    console.log('🎵 Queue: Skip previous');
    if (previousTrack) {
      playPrevious();
    } else {
      console.log('🎵 Queue: No previous track available');
    }
  }, [previousTrack, playPrevious]);

  // Play specific track from queue
  const playTrackFromQueue = useCallback((track: ITrack) => {
    // Find the track in the queue and play it
    const trackIndex = queue.items.findIndex(item => item.id === track.id);
    if (trackIndex !== -1) {
      playTrackAtIndex(trackIndex);
    } else {
      // If track is not in queue, add it and play
      console.log('🎵 Queue: Track not in queue, adding and playing');
      // This would require adding the track to queue first
      // For now, just play it directly
      audioPlayer.playTrack(track);
    }
  }, [queue.items, playTrackAtIndex, audioPlayer]);

  // Enhanced shuffle that syncs with queue
  const toggleShuffle = useCallback(() => {
    queueToggleShuffle();
    audioPlayer.toggleShuffle();
  }, [queueToggleShuffle, audioPlayer]);

  // Enhanced repeat that syncs with queue
  const toggleRepeat = useCallback(() => {
    queueToggleRepeat();
    audioPlayer.toggleRepeat();
  }, [queueToggleRepeat, audioPlayer]);

  // Handle track end - auto advance to next track
  useEffect(() => {
    const _handleTrackEnd = () => {
      if (queue.repeatMode === 'one') {
        // Repeat current track
        if (currentTrack) {
          audioPlayer.playTrack(currentTrack);
        }
      } else if (nextTrack) {
        // Play next track
        playNext();
      } else if (queue.repeatMode === 'all' && queue.items.length > 0) {
        // Loop back to beginning
        playTrackAtIndex(0);
      } else {
        // No more tracks, stop playing
        console.log('🎵 Queue: End of queue reached');
      }
    };

    // We'll need to listen to the audio element's 'ended' event
    // This is a simplified version - in a real implementation,
    // you'd want to integrate this with the actual audio element
    return () => {
      // Cleanup if needed
    };
  }, [currentTrack, nextTrack, queue.repeatMode, queue.items.length, playNext, playTrackAtIndex, audioPlayer]);

  return {
    // Audio player state
    currentTrack: audioPlayer.currentTrack,
    isPlaying: audioPlayer.isPlaying,
    progress: audioPlayer.progress,
    volume: audioPlayer.volume,
    isShuffled: queue.isShuffled,
    repeatMode: queue.repeatMode,
    isMinimized: audioPlayer.isMinimized,
    
    // Queue state
    queueItems: queue.items,
    currentIndex: queue.currentIndex,
    nextTrack,
    previousTrack,
    
    // Actions
    playTrack: playTrackFromQueue,
    togglePlay: audioPlayer.togglePlay,
    skipNext,
    skipPrevious,
    seek: audioPlayer.seek,
    setVolume: audioPlayer.setVolume,
    toggleShuffle,
    toggleRepeat,
    toggleFavorite: audioPlayer.toggleFavorite,
    toggleMinimize: audioPlayer.toggleMinimize,
    closePlayer: audioPlayer.closePlayer,
  };
};
