import React, { useContext, useState, useCallback, useRef } from "react";
import { ITrack } from "@/types";

interface QueueState {
  items: ITrack[];
  currentIndex: number;
  isShuffled: boolean;
  repeatMode: 'off' | 'one' | 'all';
}

interface QueueContextType {
  // State
  queue: QueueState;
  isQueueOpen: boolean;
  
  // Queue management
  addToQueue: (track: ITrack) => void;
  addMultipleToQueue: (tracks: ITrack[]) => void;
  removeFromQueue: (index: number) => void;
  clearQueue: () => void;
  reorderQueue: (fromIndex: number, toIndex: number) => void;
  
  // Navigation
  playNext: () => void;
  playPrevious: () => void;
  playTrackAtIndex: (index: number) => void;
  
  // Queue controls
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  
  // UI
  toggleQueue: () => void;
  openQueue: () => void;
  closeQueue: () => void;
  
  // Current track info
  getCurrentTrack: () => ITrack | null;
  getNextTrack: () => ITrack | null;
  getPreviousTrack: () => ITrack | null;
}

const context = React.createContext<QueueContextType>({
  queue: { items: [], currentIndex: -1, isShuffled: false, repeatMode: 'off' },
  isQueueOpen: false,
  addToQueue: () => {},
  addMultipleToQueue: () => {},
  removeFromQueue: () => {},
  clearQueue: () => {},
  reorderQueue: () => {},
  playNext: () => {},
  playPrevious: () => {},
  playTrackAtIndex: () => {},
  toggleShuffle: () => {},
  toggleRepeat: () => {},
  toggleQueue: () => {},
  openQueue: () => {},
  closeQueue: () => {},
  getCurrentTrack: () => null,
  getNextTrack: () => null,
  getPreviousTrack: () => null,
});

interface Props {
  children: React.ReactNode;
}

const QueueProvider: React.FC<Props> = ({ children }) => {
  const [queue, setQueue] = useState<QueueState>({
    items: [],
    currentIndex: -1,
    isShuffled: false,
    repeatMode: 'off',
  });
  
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const shuffledIndices = useRef<number[]>([]);

  // Add single track to queue
  const addToQueue = useCallback((track: ITrack) => {
    setQueue(prev => ({
      ...prev,
      items: [...prev.items, track],
    }));
  }, []);

  // Add multiple tracks to queue
  const addMultipleToQueue = useCallback((tracks: ITrack[]) => {
    setQueue(prev => ({
      ...prev,
      items: [...prev.items, ...tracks],
    }));
  }, []);

  // Remove track from queue
  const removeFromQueue = useCallback((index: number) => {
    setQueue(prev => {
      const newItems = [...prev.items];
      newItems.splice(index, 1);
      
      let newCurrentIndex = prev.currentIndex;
      
      // Adjust current index if needed
      if (index < prev.currentIndex) {
        newCurrentIndex = prev.currentIndex - 1;
      } else if (index === prev.currentIndex) {
        // If removing current track, move to next or previous
        if (newItems.length === 0) {
          newCurrentIndex = -1;
        } else if (prev.currentIndex >= newItems.length) {
          newCurrentIndex = newItems.length - 1;
        }
      }
      
      return {
        ...prev,
        items: newItems,
        currentIndex: newCurrentIndex,
      };
    });
  }, []);

  // Clear entire queue
  const clearQueue = useCallback(() => {
    setQueue(prev => ({
      ...prev,
      items: [],
      currentIndex: -1,
    }));
  }, []);

  // Reorder queue items
  const reorderQueue = useCallback((fromIndex: number, toIndex: number) => {
    setQueue(prev => {
      const newItems = [...prev.items];
      const [movedItem] = newItems.splice(fromIndex, 1);
      newItems.splice(toIndex, 0, movedItem);
      
      let newCurrentIndex = prev.currentIndex;
      
      // Adjust current index based on reordering
      if (fromIndex === prev.currentIndex) {
        newCurrentIndex = toIndex;
      } else if (fromIndex < prev.currentIndex && toIndex >= prev.currentIndex) {
        newCurrentIndex = prev.currentIndex - 1;
      } else if (fromIndex > prev.currentIndex && toIndex <= prev.currentIndex) {
        newCurrentIndex = prev.currentIndex + 1;
      }
      
      return {
        ...prev,
        items: newItems,
        currentIndex: newCurrentIndex,
      };
    });
  }, []);

  // Play next track
  const playNext = useCallback(() => {
    setQueue(prev => {
      if (prev.items.length === 0) return prev;
      
      let nextIndex = prev.currentIndex + 1;
      
      if (nextIndex >= prev.items.length) {
        if (prev.repeatMode === 'all') {
          nextIndex = 0;
        } else {
          return prev; // No next track
        }
      }
      
      return {
        ...prev,
        currentIndex: nextIndex,
      };
    });
  }, []);

  // Play previous track
  const playPrevious = useCallback(() => {
    setQueue(prev => {
      if (prev.items.length === 0) return prev;
      
      let prevIndex = prev.currentIndex - 1;
      
      if (prevIndex < 0) {
        if (prev.repeatMode === 'all') {
          prevIndex = prev.items.length - 1;
        } else {
          return prev; // No previous track
        }
      }
      
      return {
        ...prev,
        currentIndex: prevIndex,
      };
    });
  }, []);

  // Play track at specific index
  const playTrackAtIndex = useCallback((index: number) => {
    setQueue(prev => ({
      ...prev,
      currentIndex: index,
    }));
  }, []);

  // Toggle shuffle
  const toggleShuffle = useCallback(() => {
    setQueue(prev => {
      const newShuffled = !prev.isShuffled;
      
      if (newShuffled && prev.items.length > 0) {
        // Create shuffled indices array
        const indices = Array.from({ length: prev.items.length }, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        shuffledIndices.current = indices;
      }
      
      return {
        ...prev,
        isShuffled: newShuffled,
      };
    });
  }, []);

  // Toggle repeat mode
  const toggleRepeat = useCallback(() => {
    setQueue(prev => {
      const modes: Array<'off' | 'one' | 'all'> = ['off', 'one', 'all'];
      const currentIndex = modes.indexOf(prev.repeatMode);
      const nextMode = modes[(currentIndex + 1) % modes.length];
      
      return {
        ...prev,
        repeatMode: nextMode,
      };
    });
  }, []);

  // Queue UI controls
  const toggleQueue = useCallback(() => {
    setIsQueueOpen(prev => !prev);
  }, []);

  const openQueue = useCallback(() => {
    setIsQueueOpen(true);
  }, []);

  const closeQueue = useCallback(() => {
    setIsQueueOpen(false);
  }, []);

  // Get current track
  const getCurrentTrack = useCallback((): ITrack | null => {
    if (queue.currentIndex < 0 || queue.currentIndex >= queue.items.length) {
      return null;
    }
    return queue.items[queue.currentIndex];
  }, [queue.currentIndex, queue.items]);

  // Get next track
  const getNextTrack = useCallback((): ITrack | null => {
    if (queue.items.length === 0) return null;
    
    let nextIndex = queue.currentIndex + 1;
    if (nextIndex >= queue.items.length) {
      if (queue.repeatMode === 'all') {
        nextIndex = 0;
      } else {
        return null;
      }
    }
    
    return queue.items[nextIndex];
  }, [queue.currentIndex, queue.items, queue.repeatMode]);

  // Get previous track
  const getPreviousTrack = useCallback((): ITrack | null => {
    if (queue.items.length === 0) return null;
    
    let prevIndex = queue.currentIndex - 1;
    if (prevIndex < 0) {
      if (queue.repeatMode === 'all') {
        prevIndex = queue.items.length - 1;
      } else {
        return null;
      }
    }
    
    return queue.items[prevIndex];
  }, [queue.currentIndex, queue.items, queue.repeatMode]);

  const value: QueueContextType = {
    queue,
    isQueueOpen,
    addToQueue,
    addMultipleToQueue,
    removeFromQueue,
    clearQueue,
    reorderQueue,
    playNext,
    playPrevious,
    playTrackAtIndex,
    toggleShuffle,
    toggleRepeat,
    toggleQueue,
    openQueue,
    closeQueue,
    getCurrentTrack,
    getNextTrack,
    getPreviousTrack,
  };

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
};

export default QueueProvider;

export const useQueue = () => {
  const contextValue = useContext(context);
  if (!contextValue) {
    throw new Error('useQueue must be used within a QueueProvider');
  }
  return contextValue;
};
