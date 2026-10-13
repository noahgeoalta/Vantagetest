/* ─────────────────────────────────────────────
   VANTAGE — Configuration
   Fill in your values here, then open index.html
   ───────────────────────────────────────────── */

var CONFIG = {

  /* Your YouTube Data API v3 key.
     Get one free at: https://console.cloud.google.com
     Enable "YouTube Data API v3", create an API key, paste it below. */
  youtubeApiKey: 'YOUR_YOUTUBE_API_KEY',

  /* Your JSONBin.io API key (for cross-device sync — optional).
     Get one free at: https://jsonbin.io → sign up → API Keys.
     Leave empty to disable sync. */
  jsonbinApiKey: '',

  /* Display name shown in the app (whatever you want to call it) */
  appName: 'Vantage',

  /* Accent color for the primary action button (hex).
     This is the "Shuffle" / highlight button. */
  accentColor: '#ffffff',

  /* ── Your playlists ──────────────────────────────────────────────
     Add YouTube playlist IDs you want pinned in the app.
     Each entry: { id, name, thumb }
     thumb can be a URL or a local path.
     Leave as empty array [] if you don't want built-in playlists. */
  builtinPlaylists: [
    /* Example:
    { id: 'PLxxxxxx', name: 'My Playlist', thumb: 'https://i.ytimg.com/...' },
    */
  ],

  /* ── Shuffle pool ────────────────────────────────────────────────
     Playlist IDs to include when you hit the Shuffle button.
     Leave as empty array [] to shuffle from all playlists. */
  shuffleIds: [],

  /* ── Auto-updated channels ───────────────────────────────────────
     Advanced: channels that get auto-fetched into a playlist.
     Leave as empty object {} unless you know what you're doing.
     Format mirrors CHANNEL_ADD in app.js. */
  channelAdd: {},

};
