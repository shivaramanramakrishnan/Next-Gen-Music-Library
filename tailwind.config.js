/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // NextSound Brand Colors
        'nextsound': {
          'primary': '#1DB954',        // Spotify Green - Music industry standard
          'secondary': '#FF6B35',      // Vibrant Orange - Energy & creativity
          'accent': '#8B5CF6',         // Purple - Premium features
          'neutral': '#1A1A1A',        // Deep charcoal - Sophisticated dark
          'light': '#F8F9FA',          // Clean white - Modern minimalism
        },
        // Semantic Colors
        'nextsound-success': '#10B981',        // Emerald - Play, success states
        'nextsound-warning': '#F59E0B',        // Amber - Pause, warnings
        'nextsound-error': '#EF4444',          // Red - Stop, errors
        'nextsound-info': '#3B82F6',           // Blue - Info, secondary actions
        // Music-Specific Colors
        'nextsound-playing': '#1DB954',        // Active playback
        'nextsound-paused': '#6B7280',         // Paused state
        'nextsound-loading': '#8B5CF6',        // Loading/buffering
        'nextsound-queue': '#F59E0B',          // Queue management
        // Legacy colors for compatibility
        'deep-dark': '#121212',
        'card-dark': '#1A1A1A',
        'hover-gray': '#282828',
        'accent-orange': '#FF6B35',
        'success-green': '#1ED760',
        'warning-amber': '#FFA726',
        'spotify-green': '#1DB954',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'nextsound-primary': '0 0 20px rgba(29, 185, 84, 0.3)',
        'nextsound-secondary': '0 0 20px rgba(255, 107, 53, 0.3)',
        'nextsound-accent': '0 0 20px rgba(139, 92, 246, 0.3)',
        'card-elevated': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.15)',
        // Legacy shadows for compatibility
        'spotify-glow': '0 0 20px rgb(29, 185, 84, 0.3)',
        'accent-glow': '0 0 24px rgb(255, 107, 53, 0.25)',
      },
      screens: {
        'xs': '380px',
      },
    },
  },
  plugins: [],
}
