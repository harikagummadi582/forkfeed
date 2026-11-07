# ForkFeed

**Find the angle nobody has covered, then turn it into a ready-to-shoot video.**

ForkFeed is a trend-to-lesson dashboard for education and tech creators, and for the agencies that manage them. It watches what creators are posting on Instagram and TikTok, reads what audiences are asking in the comments, and shows the topics where demand is high and coverage is low. For each gap it generates a content kit in the creator's own voice.

Built for the **Hack the Feed** hackathon (Oriane, GMI Cloud and Lovable).

## The problem

An education creator's weekly question is "what do I make next, and will it be one of twenty videos saying the same thing?" A general AI assistant can't answer that, because it can't see what was posted this week or what viewers are asking in the comments. ForkFeed can, because it works from real videos and real comments.

## How it works

1. **Pull.** Collect the latest Instagram and TikTok videos on a trending topic (for example, "Canva layoffs").
2. **Watch.** Break each video down into its hook, format, structure and claims, with timestamps, and group videos by angle.
3. **Read the audience.** Cluster comments into what viewers loved, disputed and asked for, and count the questions nobody answered.
4. **Find the gap.** Compare demand (fan questions) with coverage (videos per angle) to surface the open angle.
5. **Personalise.** Apply the creator's voice, niche and past top-performing hooks.
6. **Deliver.** Output a content kit: a hook, a shot list, a caption, an audio suggestion and a storyboard. Each reason links back to the source video or comment group.

## Pages

| Page | What it shows |
|---|---|
| Trend Radar | Topics trending among education creators, with velocity, 7-day trend and top videos |
| Deep-dive | An angle map (demand against coverage), the angle table, an all-videos grid and key takeaways |
| Video Breakdown | A phone-style player with timestamped hook, format, structure, claims and comment groups |
| Audience Gaps | Top fan questions, question coverage, sentiment across the video, and the uncovered angle |
| Creator Profile | Voice sliders, top hooks and past format performance |
| Content Kit | Hook, shot list, caption, audio, "why it will work" and a storyboard, with Regenerate, Approve and Export |
| Weekly Plan | Five upcoming kits per creator, plus a brand view ranking creators by topic fit |

## Current status

This is a hackathon prototype. **All data in the app is sample data** (see `src/data.js`), and all thumbnails, avatars and frames are drawn locally in SVG and CSS. The integration points for real data are stubbed in `src/api.js`. See [docs/INTEGRATION.md](docs/INTEGRATION.md).

## Tech stack

- React 18 and Vite 5
- Plain CSS, no UI framework
- Dependency-free SVG charts (sparklines, donut, angle map)
- Planned: [Oriane](https://www.oriane.xyz) video intelligence API for video and comment data, and [GMI Cloud](https://www.gmicloud.ai) inference for generating content kits

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Environment variables

Copy `.env.example` to `.env` and fill in your own keys. The `.env` file is gitignored. Never commit it.

```
VITE_ORIANE_API_KEY=your_oriane_key_here
VITE_GMI_API_KEY=your_gmi_key_here
```

The app runs without these keys, using sample data. Variables prefixed with `VITE_` are exposed to the browser, so for any public deployment, call these APIs from a small server instead.

## Project structure

```
src/
  App.jsx          Shell, sidebar navigation and the fit-to-screen wrapper
  api.js           Integration seam for Oriane and GMI (currently returns sample data)
  data.js          Sample data for every page
  art.jsx          Locally drawn avatars, thumbnails, phone frame and storyboard
  viz.jsx          SVG charts and the animated background
  pages/index.jsx  The seven pages
  styles.css       Theme, layout and animation
```

## Screenshots and layout

Every page fits on one screen without scrolling. Content scales down slightly in smaller windows. A window of about 1440 by 900 pixels gives the best layout.

## Roadmap

- Wire `fetchTopicVideos` to the Oriane API for real videos, analysis and comments
- Wire `generateKit` to a GMI Cloud model for creator-voice content kits
- Compute angles, demand and coverage from live data
- Build the creator voice profile from a creator's own past videos
- Multi-creator roster management for agencies
