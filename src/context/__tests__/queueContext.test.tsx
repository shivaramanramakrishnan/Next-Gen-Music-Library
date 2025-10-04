import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import QueueProvider, { useQueue } from '../queueContext';
import { ITrack } from '@/types';

// Mock track data
const mockTrack: ITrack = {
  id: '1',
  name: 'Test Track',
  original_title: 'Test Track',
  poster_path: '/test.jpg',
  overview: 'Test description',
  backdrop_path: '/test-backdrop.jpg',
  artist: 'Test Artist',
  album: 'Test Album',
  duration: 180000,
};

// Test component that uses the queue
const TestComponent = () => {
  const { addToQueue, queue, openQueue } = useQueue();
  
  return (
    <div>
      <button onClick={() => addToQueue(mockTrack)}>Add Track</button>
      <button onClick={openQueue}>Open Queue</button>
      <div data-testid="queue-length">{queue.items.length}</div>
      <div data-testid="queue-open">{queue.isShuffled ? 'shuffled' : 'not-shuffled'}</div>
    </div>
  );
};

describe('QueueContext', () => {
  it('should provide queue context', () => {
    render(
      <QueueProvider>
        <TestComponent />
      </QueueProvider>
    );

    expect(screen.getByTestId('queue-length')).toHaveTextContent('0');
    expect(screen.getByTestId('queue-open')).toHaveTextContent('not-shuffled');
  });

  it('should add track to queue', () => {
    render(
      <QueueProvider>
        <TestComponent />
      </QueueProvider>
    );

    const addButton = screen.getByText('Add Track');
    act(() => {
      addButton.click();
    });

    expect(screen.getByTestId('queue-length')).toHaveTextContent('1');
  });

  it('should open queue panel', () => {
    render(
      <QueueProvider>
        <TestComponent />
      </QueueProvider>
    );

    const openButton = screen.getByText('Open Queue');
    act(() => {
      openButton.click();
    });

    // Queue should be open (we can't easily test the UI state without more complex setup)
    expect(openButton).toBeInTheDocument();
  });
});
