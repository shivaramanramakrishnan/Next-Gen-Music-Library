import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Header,
  Footer,
  SideBar,
  ScrollToTop,
  Loader,
  ErrorBoundary,
  DemoModeBadge,
} from "@/common";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { QueuePanel } from "@/components/ui/QueuePanel";
import { MiniPlayer } from "@/components/ui/MiniPlayer";
import { useQueueAudioPlayer } from "@/hooks/useQueueAudioPlayer";

import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppContent = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const queueAudioPlayer = useQueueAudioPlayer();

  // Debug: Log when Command Palette state changes
  useEffect(() => {
    console.log('Command Palette state changed:', isCommandPaletteOpen);
  }, [isCommandPaletteOpen]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log('Key pressed:', { key: e.key, metaKey: e.metaKey, ctrlKey: e.ctrlKey });

      // Cmd+K or Ctrl+K to open command palette
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        console.log('Command palette shortcut triggered');
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <SideBar />
      <Header onOpenSearch={() => setIsCommandPaletteOpen(true)} />
      <DemoModeBadge />
      <main className="transition-all duration-300 lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0 bg-white dark:bg-deep-dark min-h-screen">
        <ScrollToTop>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </ScrollToTop>
      </main>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onItemSelect={(item) => {
          console.log('Selected item:', item);
          // Handle item selection - navigation only (no audio player)
        }}
      />

      {/* Queue Panel */}
      <QueuePanel />

      {/* Mini Player */}
      <MiniPlayer
        currentTrack={queueAudioPlayer.currentTrack}
        isPlaying={queueAudioPlayer.isPlaying}
        progress={queueAudioPlayer.progress}
        volume={queueAudioPlayer.volume}
        isShuffled={queueAudioPlayer.isShuffled}
        repeatMode={queueAudioPlayer.repeatMode}
        onTogglePlay={queueAudioPlayer.togglePlay}
        onSkipPrevious={queueAudioPlayer.skipPrevious}
        onSkipNext={queueAudioPlayer.skipNext}
        onSeek={queueAudioPlayer.seek}
        onVolumeChange={queueAudioPlayer.setVolume}
        onToggleShuffle={queueAudioPlayer.toggleShuffle}
        onToggleRepeat={queueAudioPlayer.toggleRepeat}
        onToggleFavorite={queueAudioPlayer.toggleFavorite}
        onToggleMinimize={queueAudioPlayer.toggleMinimize}
        isMinimized={queueAudioPlayer.isMinimized}
      />

      <Footer />
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
