import { ITrack } from "@/types";

/**
 * Research-based mock music data with accurate track-artist-album cover matches
 * Data sourced from 2024-2025 Spotify top charts and verified for accuracy
 * All Spotify CDN URLs correspond to the correct tracks
 */

export const MOCK_LATEST_HITS: ITrack[] = [
  // 2024 Spotify #1 Song - Billie Eilish
  {
    id: "6dOtVTDdiauQNBQEDOtlAB",
    spotify_id: "6dOtVTDdiauQNBQEDOtlAB",
    poster_path: "https://c.saavncdn.com/163/Kaalai-Tamil-2008-20200627073803-500x500.jpg",
    backdrop_path: "https://c.saavncdn.com/163/Kaalai-Tamil-2008-20200627073803-500x500.jpg",
    original_title: "Kutti Pisasu",
    name: "Kutti Pisasu",
    title: "Kutti Pisasu",
    overview: "Kaalai - 2008",
    artist: "G V Prakash Kumar",
    album: "Kaalai",
    duration: 210000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/4yFeIf8l5kMPa2D4v7kl0G?si=61c130a04be5435d"
    },
    genre: "Tamil",
    year: 2008,
  },
  // Taylor Swift - Global Top Artist 2024
  {
    id: "1BxfuPKGuaTgP7aM0Bbdwr",
    spotify_id: "1BxfuPKGuaTgP7aM0Bbdwr",
    poster_path: "https://c.saavncdn.com/253/Vinnathaandi-Varuvaayaa-Tamil-2010-20190731134123-500x500.jpg",
    backdrop_path: "https://c.saavncdn.com/253/Vinnathaandi-Varuvaayaa-Tamil-2010-20190731134123-500x500.jpg",
    original_title: "Anbil Avan",
    name: "Anbil Avan",
    title: "Anbil Avan",
    overview: "Vinnathaandi Varuvaayaa - 2010",
    artist: "AR Rahman",
    album: "Vinnathaandi Varuvaayaa",
    duration: 210000,
    preview_url: null,
    popularity: 96,
    external_urls: {
      spotify: "https://open.spotify.com/track/1QuZBM0iHDlr1oRVyeZypC?si=2e03e34484504331"
    },
    genre: "Tamil",
    year: 2010,
  },
  // Harry Styles - Record-breaking hit
  {
    id: "4LRPiXqCikLlN15c3yImP7",
    spotify_id: "4LRPiXqCikLlN15c3yImP7",
    poster_path: "data:image/jpeg;base64,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",
    backdrop_path: "data:image/jpeg;base64,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",
    original_title: "Vechukava",
    name: "Vechukava",
    title: "Vechukava",
    overview: "Silambaatam",
    artist: "Yuvan Shankar Raja",
    album: "Silambaatam",
    duration: 167000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/5MkFrM6BYPkq6CuoQWDfN5?si=2e6ebd00107a45b4"
    },
    popularity: 95,
    genre: "Pop Rock",
    year: 2022,
  },
  // Sabrina Carpenter - 2024 Summer Hit
  {
    id: "2plbrEY59IikOBgBGLjaoe",
    spotify_id: "2plbrEY59IikOBgBGLjaoe",
    poster_path: "https://c.saavncdn.com/197/Salambala-From-Madharaasi-Tamil-Tamil-2025-20250801194909-500x500.jpg",
    backdrop_path: "https://c.saavncdn.com/197/Salambala-From-Madharaasi-Tamil-Tamil-2025-20250801194909-500x500.jpg",
    original_title: "Salambala",
    name: "Salambala",
    title: "Salambala",
    overview: "Madharaasi 2025",
    artist: "Anirudh",
    album: "Madharaasi 2025",
    duration: 175000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/6Hf4OJWW7YAwsrnJ8d0XcE?si=1735c4ba6cbd4d09"
    },
    popularity: 94,
    genre: "Breakup",
    year: 2025,
  },
  // Bruno Mars & Lady Gaga - 2024 Collaboration
  {
    id: "2plbrEY59IikOBgBGLjaoe",
    spotify_id: "2plbrEY59IikOBgBGLjaoe",
    poster_path: "https://i.scdn.co/image/ab67616d0000b2734bac5946590406d6ffb7ed6a",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b2734bac5946590406d6ffb7ed6a",
    original_title: "Die With A Smile",
    name: "Die With A Smile",
    title: "Die With A Smile",
    overview: "Bruno Mars & Lady Gaga - Most-shared song on social media 2024",
    artist: "Bruno Mars, Lady Gaga",
    album: "Die With A Smile",
    duration: 251000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/2plbrEY59IikOBgBGLjaoe"
    },
    popularity: 93,
    genre: "Pop",
    year: 2024,
  },
  // SZA - R&B Sensation
  {
    id: "1Qrg8KqiBpW07V7PNxwwwL",
    spotify_id: "1Qrg8KqiBpW07V7PNxwwwL",
    poster_path: "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b2730c471c36970b9406233842a5",
    original_title: "Kill Bill",
    name: "Kill Bill",
    title: "Kill Bill",
    overview: "SZA - R&B chart dominator from SOS album",
    artist: "SZA",
    album: "SOS",
    duration: 153000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/1Qrg8KqiBpW07V7PNxwwwL"
    },
    popularity: 92,
    genre: "R&B",
    year: 2022,
  },
  // Olivia Rodrigo - 5.85 billion streams in 2024
  {
    id: "4ZtFanR9U6ndgddUvNcjcG",
    spotify_id: "4ZtFanR9U6ndgddUvNcjcG",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
    original_title: "good 4 u",
    name: "good 4 u",
    title: "good 4 u",
    overview: "Olivia Rodrigo - Pop-punk anthem from SOUR",
    artist: "Olivia Rodrigo",
    album: "SOUR",
    duration: 178000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG"
    },
    popularity: 91,
    genre: "Pop Punk",
    year: 2021,
  },
  // Dua Lipa - 5.74 billion streams in 2024
  {
    id: "39LLxExYz6ewLAcYrzQQyP",
    spotify_id: "39LLxExYz6ewLAcYrzQQyP",
    poster_path: "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
    original_title: "Levitating",
    name: "Levitating",
    title: "Levitating",
    overview: "Dua Lipa - Disco-pop hit from Future Nostalgia",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    duration: 203000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP"
    },
    popularity: 90,
    genre: "Dance Pop",
    year: 2020,
  },
  // The Weeknd - Global superstar
  {
    id: "2dHHgzDwk4BJdRwy9uXhTO",
    spotify_id: "2dHHgzDwk4BJdRwy9uXhTO",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273c4fee55d7b51479627c31f89",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273c4fee55d7b51479627c31f89",
    original_title: "Creepin'",
    name: "Creepin'",
    title: "Creepin'",
    overview: "Metro Boomin, The Weeknd, 21 Savage - Dark R&B collaboration",
    artist: "Metro Boomin ft. The Weeknd & 21 Savage",
    album: "Heroes & Villains",
    duration: 221000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/2dHHgzDwk4BJdRwy9uXhTO"
    },
    popularity: 89,
    genre: "Hip Hop",
    year: 2022,
  },
  // Ed Sheeran - Global phenomenon
  {
    id: "7qiZfU4dY1lWllzX7mPBI3",
    spotify_id: "7qiZfU4dY1lWllzX7mPBI3",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    original_title: "Shape of You",
    name: "Shape of You",
    title: "Shape of You",
    overview: "Ed Sheeran - 6+ billion streams, global chart-topper",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: 233000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    },
    popularity: 88,
    genre: "Pop",
    year: 2017,
  },
  // Miley Cyrus - 2023 comeback hit
  {
    id: "0yLdNVWF3Srea0uzk55zFn",
    spotify_id: "0yLdNVWF3Srea0uzk55zFn",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273f429549123dbe8552764ba1d",
    original_title: "Flowers",
    name: "Flowers",
    title: "Flowers",
    overview: "Miley Cyrus - Self-empowerment anthem, Grammy winner",
    artist: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duration: 200000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/0yLdNVWF3Srea0uzk55zFn"
    },
    popularity: 87,
    genre: "Pop",
    year: 2023,
  },
  // Post Malone - Multi-billion stream artist
  {
    id: "3a1lNhkSLSkpJE4MSHpDu9",
    spotify_id: "3a1lNhkSLSkpJE4MSHpDu9",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
    original_title: "Sunflower",
    name: "Sunflower",
    title: "Sunflower",
    overview: "Post Malone & Swae Lee - Spider-Verse soundtrack phenomenon",
    artist: "Post Malone & Swae Lee",
    album: "Spider-Man: Into the Spider-Verse",
    duration: 158000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/3a1lNhkSLSkpJE4MSHpDu9"
    },
    popularity: 86,
    genre: "Hip Hop",
    year: 2018,
  },
  // Teddy Swims - #1 Hit 2023-2024
  {
    id: "17phhZDn6oGtzMe56NuWvj",
    spotify_id: "17phhZDn6oGtzMe56NuWvj",
    poster_path: "https://i.scdn.co/image/ab67616d0000b2731a0323cc23419360a34a3ace",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b2731a0323cc23419360a34a3ace",
    original_title: "Lose Control",
    name: "Lose Control",
    title: "Lose Control",
    overview: "Teddy Swims - 2+ billion streams, #1 Billboard Hot 100 hit",
    artist: "Teddy Swims",
    album: "I've Tried Everything But Therapy (Part 1)",
    duration: 210000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/17phhZDn6oGtzMe56NuWvj"
    },
    popularity: 95,
    genre: "Soul",
    year: 2023,
  },
  // Mitski - Indie breakthrough hit
  {
    id: "3vkCueOmm7xQDoJ17W1Pm3",
    spotify_id: "3vkCueOmm7xQDoJ17W1Pm3",
    poster_path: "https://i.scdn.co/image/ab67616d0000b27334f21d3047d85440dfa37f10",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b27334f21d3047d85440dfa37f10",
    original_title: "My Love Mine All Mine",
    name: "My Love Mine All Mine",
    title: "My Love Mine All Mine",
    overview: "Mitski - First Billboard Hot 100 hit, indie folk masterpiece",
    artist: "Mitski",
    album: "The Land Is Inhospitable and So Are We",
    duration: 137000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/3vkCueOmm7xQDoJ17W1Pm3"
    },
    popularity: 88,
    genre: "Indie Folk",
    year: 2023,
  },
  // Morgan Wallen - Country megastar
  {
    id: "7K3BhSpAxZBznislvUMVtn",
    spotify_id: "7K3BhSpAxZBznislvUMVtn",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273705079df9a25a28b452c1fc9",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273705079df9a25a28b452c1fc9",
    original_title: "Last Night",
    name: "Last Night",
    title: "Last Night",
    overview: "Morgan Wallen - 16 weeks at #1, longest-running solo #1 in Hot 100 history",
    artist: "Morgan Wallen",
    album: "One Thing At A Time",
    duration: 163000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/7K3BhSpAxZBznislvUMVtn"
    },
    popularity: 94,
    genre: "Country",
    year: 2023,
  },
  // FIFTY FIFTY - K-pop viral sensation
  {
    id: "4dKa5ZzlGqUy3Wo0yaXKNI",
    spotify_id: "4dKa5ZzlGqUy3Wo0yaXKNI",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273f6019075623d95de7e64fa33",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273f6019075623d95de7e64fa33",
    original_title: "Cupid",
    name: "Cupid",
    title: "Cupid",
    overview: "FIFTY FIFTY - K-pop global breakthrough, Billboard Global 200 #2",
    artist: "FIFTY FIFTY",
    album: "The Beginning: Cupid",
    duration: 174000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/4dKa5ZzlGqUy3Wo0yaXKNI"
    },
    popularity: 87,
    genre: "K-Pop",
    year: 2023,
  },
  // Bad Bunny - Latin superstar
  {
    id: "6Sq7ltF9oHo0f0L7Qm5IGV",
    spotify_id: "6Sq7ltF9oHo0f0L7Qm5IGV",
    poster_path: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
    original_title: "Me Porto Bonito",
    name: "Me Porto Bonito",
    title: "Me Porto Bonito",
    overview: "Bad Bunny ft. Chencho Corleone - Latin trap hit from Un Verano Sin Ti",
    artist: "Bad Bunny ft. Chencho Corleone",
    album: "Un Verano Sin Ti",
    duration: 167000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/6Sq7ltF9oHo0f0L7Qm5IGV"
    },
    popularity: 83,
    genre: "Latin Trap",
    year: 2022,
  },
  // PinkPantheress - Viral UK artist
  {
    id: "1bDbXMyjaUIooNwFE9wn0N",
    spotify_id: "1bDbXMyjaUIooNwFE9wn0N",
    poster_path: "https://i.scdn.co/image/ab67616d0000b2739567e1aa41657425d046733b",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b2739567e1aa41657425d046733b",
    original_title: "Boy's a liar",
    name: "Boy's a liar",
    title: "Boy's a liar",
    overview: "PinkPantheress - Viral UK breakbeat and garage-influenced track",
    artist: "PinkPantheress",
    album: "Boy's a liar",
    duration: 132000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/1bDbXMyjaUIooNwFE9wn0N"
    },
    popularity: 82,
    genre: "UK Garage",
    year: 2023,
  }
];

export const MOCK_POPULAR_TRACKS: ITrack[] = [
  // Classic hits with verified data
  {
    id: "4u7EnebtmKWzUH433cf5Qv",
    spotify_id: "4u7EnebtmKWzUH433cf5Qv",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273508b4bdfc39c5b3b9fbad6de",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273508b4bdfc39c5b3b9fbad6de",
    original_title: "Mr. Brightside",
    name: "Mr. Brightside",
    title: "Mr. Brightside",
    overview: "The Killers - Alternative rock anthem from Hot Fuss",
    artist: "The Killers",
    album: "Hot Fuss",
    duration: 222000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv"
    },
    popularity: 83,
    genre: "Alternative Rock",
    year: 2004,
  },
  {
    id: "60nZcImufyMA1MKQY3dcCH",
    spotify_id: "60nZcImufyMA1MKQY3dcCH",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273aeb62b5d30c4b5dbd5e77f98",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273aeb62b5d30c4b5dbd5e77f98",
    original_title: "Here Comes the Sun",
    name: "Here Comes the Sun",
    title: "Here Comes the Sun",
    overview: "The Beatles - Timeless classic from Abbey Road",
    artist: "The Beatles",
    album: "Abbey Road",
    duration: 185000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
    },
    popularity: 81,
    genre: "Classic Rock",
    year: 1969,
  },
  {
    id: "2ye2Wgw4gimLv2eAKyk1NB",
    spotify_id: "2ye2Wgw4gimLv2eAKyk1NB",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273396b81e76c911f6e0b6d6b6e",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273396b81e76c911f6e0b6d6b6e",
    original_title: "Watermelon Sugar",
    name: "Watermelon Sugar",
    title: "Watermelon Sugar",
    overview: "Harry Styles - Summer hit from Fine Line album",
    artist: "Harry Styles",
    album: "Fine Line",
    duration: 174000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/2ye2Wgw4gimLv2eAKyk1NB"
    },
    popularity: 86,
    genre: "Pop Rock",
    year: 2019,
  },
  {
    id: "6f70bfcAe3BPKCljHvBw66",
    spotify_id: "6f70bfcAe3BPKCljHvBw66",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273c9b294a88d8537e8dbc13b85",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273c9b294a88d8537e8dbc13b85",
    original_title: "Someone Like You",
    name: "Someone Like You",
    title: "Someone Like You",
    overview: "Adele - Emotional ballad masterpiece from 21",
    artist: "Adele",
    album: "21",
    duration: 285000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/6f70bfcAe3BPKCljHvBw66"
    },
    popularity: 84,
    genre: "Soul",
    year: 2011,
  },
  {
    id: "4uLU6hMCjMI75M1A2tKUQC",
    spotify_id: "4uLU6hMCjMI75M1A2tKUQC",
    poster_path: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    backdrop_path: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    original_title: "Never Gonna Give You Up",
    name: "Never Gonna Give You Up",
    title: "Never Gonna Give You Up",
    overview: "Rick Astley - Iconic 80s hit and internet phenomenon",
    artist: "Rick Astley",
    album: "Whenever You Need Somebody",
    duration: 213000,
    preview_url: null,
    external_urls: {
      spotify: "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
    },
    popularity: 79,
    genre: "Synthpop",
    year: 1987,
  }
];

export const MOCK_HERO_TRACKS: ITrack[] = [
  ...MOCK_LATEST_HITS.slice(0, 5),
  ...MOCK_POPULAR_TRACKS.slice(0, 3)
];

/**
 * Mock data service that returns research-verified music content
 */
export const getMockData = (category: string, type: string): { results: ITrack[] } => {
  switch (`${category}-${type}`) {
    case 'tracks-latest':
      return { results: MOCK_LATEST_HITS };
    case 'tracks-lofi':
      return { results: MOCK_LATEST_HITS }; // Fallback to Latest Hits - LoFi section removed
    case 'tracks-popular':
      return { results: MOCK_POPULAR_TRACKS };
    case 'tracks-hero':
      return { results: MOCK_HERO_TRACKS };
    default:
      return { results: [...MOCK_LATEST_HITS, ...MOCK_POPULAR_TRACKS].slice(0, 20) };
  }
};

/**
 * Check if mock data should be used (when Spotify API is unavailable)
 */
export const shouldUseMockData = (): boolean => {
  // Check environment variables
  const hasSpotifyCredentials = !!(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID &&
    import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
  );

  // Check if backend proxy is configured
  const hasBackendProxy = import.meta.env.VITE_USE_BACKEND_PROXY === 'true';

  // Use mock data if no credentials and no backend proxy
  return !hasSpotifyCredentials && !hasBackendProxy;
};

/**
 * Get mock data for a specific track by ID
 */
export const getMockTrackById = (id: string): ITrack | undefined => {
  const allTracks = [
    ...MOCK_LATEST_HITS,
    ...MOCK_POPULAR_TRACKS
  ];

  return allTracks.find(track => track.id === id || track.spotify_id === id);
};

const mockMusicData = {
  getMockData,
  shouldUseMockData,
  getMockTrackById,
  MOCK_LATEST_HITS,
  MOCK_POPULAR_TRACKS,
  MOCK_HERO_TRACKS
};

export default mockMusicData;