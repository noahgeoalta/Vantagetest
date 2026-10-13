# Vantage

**YouTube, without the noise.**

A clean personal YouTube front-end. No ads, no comments, no algorithm — just your subscriptions, playlists, and watch history. Works as a PWA (installable on phone or desktop).

---

## Setup (5 minutes)

### 1. Get a YouTube API key

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Search for **YouTube Data API v3** → Enable it
4. Go to **Credentials** → **Create Credentials** → **API key**
5. Copy the key

### 2. Configure the app

Open `config.js` and paste your key:

```js
youtubeApiKey: 'AIza...',
```

That's it — the app works now. Open `index.html` in your browser.

### 3. Deploy (optional but recommended)

For the best experience (PWA install, works on mobile), host it for free:

**GitHub Pages (free, recommended):**
1. Create a free account at [github.com](https://github.com) if you don't have one
2. Click **+** → **New repository** → give it a name (e.g. `vantage`) → **Create repository**
3. Upload the Vantage folder: on the repo page click **uploading an existing file**, drag all the files in, commit
4. Go to **Settings** → **Pages** → under Source select **Deploy from a branch** → branch: `main`, folder: `/ (root)` → **Save**
5. Your app is live at `https://yourusername.github.io/reponame` within a minute

> **Security note:** Free GitHub Pages requires a **public** repository, meaning anyone can view your source code — including your `config.js` file with your API keys. To reduce risk:
> - Restrict your YouTube API key to your domain in [Google Cloud Console](https://console.cloud.google.com) (under the key's API restrictions → HTTP referrers)
> - Your JSONBin key is also visible — consider this acceptable since your JSONBin data is just watch progress, not personal data
> - If you want the repo private, you need a GitHub paid plan (Pro, ~$4/month), which unlocks private Pages

**Netlify (free, easiest):**
1. Drag the Vantage folder onto [app.netlify.com/drop](https://app.netlify.com/drop)
2. Done — you get a URL instantly (e.g. `https://random-name.netlify.app`)
3. Netlify Drop sites expire after a few hours unless you create a free account and claim the site

> Netlify serves from their own infrastructure, so your source files are not publicly browsable — your API keys are not exposed to visitors. Still, restrict your YouTube key to your domain as above.

---

## Sync across devices (optional)

Sync lets you pick up where you left off on any device using a personal sync code.

### Get a JSONBin API key

1. Sign up free at [jsonbin.io](https://jsonbin.io)
2. Go to **API Keys** → copy your Master Key

### Add it to config.js

```js
jsonbinApiKey: 'your-master-key-here',
```

### Use sync

In the app, tap the **Sync** button in the toolbar → enter any memorable code (e.g. `NOVA-4471`) → tap Connect. Enter the same code on your other device.

---

## Customization

All options are in `config.js`:

| Option | What it does |
|--------|-------------|
| `appName` | Name shown in the browser tab |
| `accentColor` | Color of the primary action button |
| `builtinPlaylists` | Playlists pinned on the home screen |
| `shuffleIds` | Playlists included in the Shuffle button |

---

## Using the app

### Playlists

**Local playlists** — tap `+ Playlist` on the home screen, choose **New Local**, give it a name. Then search any video and tap **+ Playlist** to add it. Everything is stored locally; no YouTube ID needed.

**YouTube playlists** — tap `+ Playlist` → **YouTube** tab → paste a public playlist ID or URL.

### Ad block overlay

While a video is playing, tap **AD** to cover the screen with a dark overlay and mute the player. The overlay auto-dismisses after the configured delay (default 8 s). Tap the **⚙** icon next to the AD button to adjust:

- **Opacity** — how dark the overlay is
- **Corner hole size** — transparent cutout in the bottom-right corner so you can glance at the screen to see when the ad ends
- **Auto-dismiss delay** — seconds before it turns off automatically

### Watch Later

On any search result tap **Watch Later**. The card on the home screen shows your saved videos. Tap **···** on the Watch Later card to clear the list.

### Sync

Tap **Sync** in the toolbar → enter a memorable code → Connect. Enter the same code on every device. Requires a JSONBin API key (see Setup above).

---

## Notes

- No backend, no server costs — it's just files
- All watch progress is stored in your browser's localStorage
- API keys are stored in your browser only — Vantage never sends them anywhere
- Sync data lives in your own JSONBin account — Vantage never sees it
- YouTube API free quota is 10,000 units/day — more than enough for personal use
- Restrict your YouTube API key to your domain in Google Cloud Console to prevent abuse
