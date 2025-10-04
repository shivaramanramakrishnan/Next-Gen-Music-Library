import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiPlay, 
  FiTrash2, 
  FiShuffle, 
  FiRepeat,
  FiMenu
} from 'react-icons/fi';
import { ITrack } from '@/types';
import { useQueue } from '@/context/queueContext';
import { getImageUrl, cn } from '@/utils';
import { Button } from './button';

interface QueuePanelProps {
  className?: string;
}

export const QueuePanel: React.FC<QueuePanelProps> = ({ className }) => {
  const {
    queue,
    isQueueOpen,
    closeQueue,
    removeFromQueue,
    clearQueue,
    playTrackAtIndex,
    toggleShuffle,
    toggleRepeat,
    getCurrentTrack,
  } = useQueue();

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const _dragRef = useRef<HTMLDivElement>(null);

  const currentTrack = getCurrentTrack();

  const formatDuration = (ms: number) => {
    if (!ms) return '0:00';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      // Reorder logic would go here - for now just log
      console.log(`Move item from ${draggedIndex} to ${dropIndex}`);
    }
    
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handlePlayTrack = (track: ITrack, index: number) => {
    playTrackAtIndex(index);
  };

  const handleRemoveTrack = (index: number) => {
    removeFromQueue(index);
  };

  if (!isQueueOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={cn(
          "fixed top-0 right-0 h-full w-96 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-2xl z-50 flex flex-col",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Queue
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {queue.items.length} songs
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Shuffle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleShuffle}
              className={cn(
                "w-8 h-8",
                queue.isShuffled 
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                  : "text-gray-400 hover:text-gray-600 dark:text-gray-500"
              )}
            >
              <FiShuffle className="w-4 h-4" />
            </Button>
            
            {/* Repeat Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleRepeat}
              className={cn(
                "w-8 h-8 relative",
                queue.repeatMode !== 'off' 
                  ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                  : "text-gray-400 hover:text-gray-600 dark:text-gray-500"
              )}
            >
              <FiRepeat className="w-4 h-4" />
              {queue.repeatMode === 'one' && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              )}
            </Button>
            
            {/* Clear Queue Button */}
            {queue.items.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={clearQueue}
                className="w-8 h-8 text-gray-400 hover:text-red-600 dark:text-gray-500"
              >
                <FiTrash2 className="w-4 h-4" />
              </Button>
            )}
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeQueue}
              className="w-8 h-8 text-gray-400 hover:text-gray-600 dark:text-gray-500"
            >
              <FiX className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Currently Playing */}
        {currentTrack && (
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/10">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={getImageUrl(currentTrack.poster_path)}
                  alt={currentTrack.title || currentTrack.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 truncate">
                  {currentTrack.title || currentTrack.name}
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 truncate">
                  {currentTrack.artist || 'Unknown Artist'}
                </p>
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                Now Playing
              </div>
            </div>
          </div>
        )}

        {/* Queue List */}
        <div className="flex-1 overflow-y-auto">
          {queue.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <FiPlay className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Your queue is empty
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Add songs to your queue to see them here
              </p>
            </div>
          ) : (
            <div className="p-2">
              {queue.items.map((track, index) => (
                <motion.div
                  key={`${track.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  draggable
                  onDragStart={(e) => handleDragStart(e as any, index)}
                  onDragOver={(e) => handleDragOver(e as any, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e as any, index)}
                  className={cn(
                    "group flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer",
                    "hover:bg-gray-50 dark:hover:bg-gray-800",
                    index === queue.currentIndex && "bg-blue-50 dark:bg-blue-900/20",
                    draggedIndex === index && "opacity-50",
                    dragOverIndex === index && "bg-blue-100 dark:bg-blue-900/30"
                  )}
                >
                  {/* Drag Handle */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiMenu className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  {/* Track Image */}
                  <div className="relative">
                    <img
                      src={getImageUrl(track.poster_path)}
                      alt={track.title || track.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    {index === queue.currentIndex && (
                      <div className="absolute inset-0 bg-nextsound-primary/20 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-nextsound-primary rounded-full animate-pulse shadow-nextsound-primary"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className={cn(
                      "font-medium truncate",
                      index === queue.currentIndex 
                        ? "text-nextsound-primary dark:text-nextsound-primary" 
                        : "text-gray-900 dark:text-white"
                    )}>
                      {track.title || track.name}
                    </h4>
                    <p className={cn(
                      "text-sm truncate",
                      index === queue.currentIndex 
                        ? "text-nextsound-primary/80 dark:text-nextsound-primary/80" 
                        : "text-gray-500 dark:text-gray-400"
                    )}>
                      {track.artist || 'Unknown Artist'}
                    </p>
                  </div>
                  
                  {/* Duration */}
                  <div className="text-xs text-gray-400 dark:text-gray-500">
                    {formatDuration(track.duration || 0)}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePlayTrack(track, index)}
                      className="w-8 h-8 text-gray-400 hover:text-blue-600"
                    >
                      <FiPlay className="w-3 h-3" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveTrack(index)}
                      className="w-8 h-8 text-gray-400 hover:text-red-600"
                    >
                      <FiTrash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
