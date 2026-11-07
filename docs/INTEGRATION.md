# Integration guide

ForkFeed reads all of its content through two functions in [`src/api.js`](../src/api.js). They currently return sample data from [`src/data.js`](../src/data.js). Replace their bodies to go live. The pages don't need to change as long as the return shapes stay the same.

## `fetchTopicVideos(topicId)`

Intended source: the Oriane video intelligence API (Instagram and TikTok).

Should return:

```js
{
  angles: [
    // One entry per cluster of videos that take the same angle
    { name, sub, videos, demand, crowded, level }   // level: 'Crowded' | 'Medium' | 'Open'
  ],
  breakdown: [
    // Timestamped analysis of one video
    { t: '0:00', k: 'Hook', v: 'text or array of strings' }
  ],
  comments: {
    loved:    [{ t: '0:03', q: 'comment theme', n: 118 }],
    disputed: [{ t: '0:12', q: 'comment theme', n: 91 }],
    asked:    [{ t: '0:40', q: 'comment theme', n: 312 }]
  }
}
```

Field meanings:

- `videos`: how many videos cover the angle (coverage).
- `demand`: how many fan questions point at the angle.
- `crowded`: a 0 to 100 saturation score. `level` is derived from it.
- `t`: a timestamp inside the video that the analysis or comment group ties to.

## `generateKit(topicId, creator)`

Intended source: an LLM on GMI Cloud.

Input: the chosen angle, the unanswered fan questions, and the creator profile (voice sliders, niche, top hooks).

Should return:

```js
{
  idea, hook, caption, audio,
  shots: [{ t: '0-5s', d: 'Hook (you on camera)' }],
  why:   ['reason linked to a source video or comment group']
}
```

## Keys

Put keys in `.env` (see `.env.example`). Vite exposes `VITE_` variables to the browser, so for a public deployment, move these calls behind a small server route and keep the keys on the server.

## Suggested order

1. Make one real Oriane call for one topic and map the response to the shapes above.
2. Compute `demand`, `videos` and `crowded` per angle from that data.
3. Replace the placeholder phone frame and thumbnails with real video thumbnails.
4. Wire `generateKit` to the LLM, passing the real gap and the creator profile.
5. Cache one successful run as JSON so the demo works if a live call fails.
