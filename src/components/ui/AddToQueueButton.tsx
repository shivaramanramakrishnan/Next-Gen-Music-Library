import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiCheck } from 'react-icons/fi';
import { ITrack } from '@/types';
import { useQueue } from '@/context/queueContext';
import { Button } from './button';
import { cn } from '@/utils';

interface AddToQueueButtonProps {
  track: ITrack;
  variant?: 'icon' | 'text' | 'compact';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AddToQueueButton: React.FC<AddToQueueButtonProps> = ({
  track,
  variant = 'icon',
  size = 'md',
  className
}) => {
  const { addToQueue, openQueue } = useQueue();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToQueue = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToQueue(track);
    setIsAdded(true);
    openQueue(); // Open queue panel when adding
    
    // Reset added state after animation
    setTimeout(() => setIsAdded(false), 2000);
  };

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  if (variant === 'text') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={handleAddToQueue}
        className={cn(
          "flex items-center space-x-2 text-gray-600 hover:text-nextsound-primary dark:text-gray-400 dark:hover:text-nextsound-primary transition-colors duration-200",
          className
        )}
      >
        <motion.div
          animate={{ scale: isAdded ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isAdded ? (
            <FiCheck className={iconSizes[size]} />
          ) : (
            <FiPlus className={iconSizes[size]} />
          )}
        </motion.div>
        <span className="text-sm font-medium">
          {isAdded ? 'Added!' : 'Add to Queue'}
        </span>
      </Button>
    );
  }

  if (variant === 'compact') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleAddToQueue}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-all duration-200",
          "text-gray-400 hover:text-nextsound-primary dark:text-gray-500 dark:hover:text-nextsound-primary",
          "hover:bg-nextsound-primary/10 dark:hover:bg-nextsound-primary/20",
          sizeClasses[size],
          className
        )}
      >
        <motion.div
          animate={{ scale: isAdded ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {isAdded ? (
            <FiCheck className={iconSizes[size]} />
          ) : (
            <FiPlus className={iconSizes[size]} />
          )}
        </motion.div>
      </Button>
    );
  }

  // Default icon variant
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleAddToQueue}
      className={cn(
        "opacity-0 group-hover:opacity-100 transition-all duration-200",
        "text-gray-400 hover:text-nextsound-primary dark:text-gray-500 dark:hover:text-nextsound-primary",
        "hover:bg-nextsound-primary/10 dark:hover:bg-nextsound-primary/20",
        sizeClasses[size],
        className
      )}
    >
      <motion.div
        animate={{ scale: isAdded ? [1, 1.2, 1] : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isAdded ? (
          <FiCheck className={iconSizes[size]} />
        ) : (
          <FiPlus className={iconSizes[size]} />
        )}
      </motion.div>
    </Button>
  );
};
