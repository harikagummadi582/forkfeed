// Data layer. Everything the UI reads comes from here.
// Swap these mock objects for Oriane / LLM calls in src/api.js later.

export const topics = [
  { id: 'canva', name: 'Canva layoffs', sub: 'Career, design industry, AI impact', velocity: 412, videos: 237, trend: [4, 6, 9, 14, 30, 62, 100] },
  { id: 'jr-ai', name: 'AI replacing junior devs', sub: 'Jobs, skills, what to learn', velocity: 286, videos: 189, trend: [10, 14, 18, 30, 44, 61, 80] },
  { id: 'ai-tools', name: 'Best AI tools for students', sub: 'Productivity, studying, creation', velocity: 164, videos: 145, trend: [20, 24, 30, 33, 41, 48, 52] },
  { id: 'degree', name: 'Is a design degree still worth it?', sub: 'Career, ROI, AI disruption', velocity: 121, videos: 98, trend: [12, 11, 16, 20, 22, 30, 33] },
  { id: 'future', name: 'How to future-proof your career', sub: 'Skills, learning paths', velocity: 97, videos: 76, trend: [16, 18, 17, 22, 24, 27, 30] },
]

export const angles = [
  { name: 'Career advice', sub: 'What to do if you’re affected, next steps', videos: 82, demand: 140, crowded: 86, level: 'Crowded' },
  { name: 'AI blamed', sub: 'Layoffs as an AI cost-cutting signal', videos: 56, demand: 90, crowded: 78, level: 'Crowded' },
  { name: 'What to learn next', sub: 'Skills to stay relevant', videos: 41, demand: 160, crowded: 61, level: 'Medium' },
  { name: 'Impact on the design industry', sub: 'What it means for design roles overall', videos: 32, demand: 70, crowded: 52, level: 'Medium' },
  { name: 'What it means for junior designers', sub: 'How it affects entry-level talent', videos: 9, demand: 312, crowded: 18, level: 'Open' },
]

export const breakdown = [
  { t: '0:00', k: 'Hook', v: '“Canva just laid off a bunch of people… here’s the real reason.”' },
  { t: '0:07', k: 'Format', v: 'Explainer (talking head + on-screen points)' },
  { t: '0:12', k: 'Structure', v: '1) What happened  2) Why now (AI, growth)  3) What it means for you  4) Next steps' },
  { t: '0:28', k: 'Key claims', v: ['Layoffs affect design, product and marketing', 'AI and efficiency were a factor', 'It’s part of a broader industry shift', 'Creators and designers should upskill now'] },
]

export const commentGroups = {
  loved: [
    { t: '0:03', q: 'Finally someone explaining the real reason', n: 118 },
    { t: '0:28', q: 'The upskill list is actually useful', n: 74 },
  ],
  disputed: [
    { t: '0:12', q: 'It’s not just AI, it’s overhiring', n: 91 },
    { t: '0:07', q: 'Too many on-screen points, hard to follow', n: 33 },
  ],
  asked: [
    { t: '0:40', q: 'What does this mean for junior designers?', n: 312 },
    { t: '0:50', q: 'Should I still learn Canva or switch?', n: 198 },
  ],
}

export const fanQuestions = [
  { q: 'What does this mean for junior designers?', n: 312, status: 'Unanswered' },
  { q: 'Should I still learn Canva (or switch to something else)?', n: 198, status: 'Unanswered' },
  { q: 'Will other design tools (Figma, Adobe) do the same?', n: 144, status: 'Partially answered' },
  { q: 'What skills make you safer from layoffs?', n: 122, status: 'Answered' },
  { q: 'Is this mainly because of AI?', n: 98, status: 'Answered' },
]

export const gap = {
  title: 'No one explained what this means for junior designers.',
  points: [
    '312 people asked this across 237 videos',
    '0 videos cover a junior-specific breakdown',
    'High interest, low coverage = prime angle',
  ],
}

export const sentimentCurve = [52, 58, 66, 61, 48, 40, 55, 72, 80, 74, 63, 70] // for the audience gaps chart

export const creator = {
  name: 'Alex', role: 'Education & tech creator', followers: '114K', views: '2.8M',
  niche: ['Design tools', 'AI & creativity', 'Career & skills'],
  voice: [
    { l: 'Educational', r: 'Entertaining', v: 72 },
    { l: 'Analytical', r: 'Relatable', v: 68 },
    { l: 'Serious', r: 'Casual', v: 61 },
    { l: 'In-depth', r: 'Bite-sized', v: 78 },
  ],
  hooks: [
    { h: '“Here’s what no one tells you about…”', p: 12.4 },
    { h: '“I tested X so you don’t have to…”', p: 10.9 },
    { h: '“This changes everything for…”', p: 9.8 },
  ],
  formats: [
    { f: 'Explainer (talking head)', views: '42%', ret: '68%' },
    { f: 'List (3–5 tips)', views: '38%', ret: '64%' },
    { f: 'News breakdown', views: '36%', ret: '61%' },
    { f: 'Tutorial / walkthrough', views: '29%', ret: '57%' },
  ],
}

export const kit = {
  idea: 'Canva layoffs: what it actually means for junior designers (+ your next moves)',
  hook: 'Everyone’s talking about the Canva layoffs, but what does it really mean if you’re a junior designer? Let’s break it down.',
  shots: [
    { t: '0–5s', d: 'Hook (you on camera)' },
    { t: '5–15s', d: 'Quick recap: what happened' },
    { t: '15–35s', d: 'Impact on junior designers (the gap)' },
    { t: '35–55s', d: '3 next steps (skills, portfolio, opportunities)' },
    { t: '55–65s', d: 'Wrap up + CTA (ask your question)' },
  ],
  caption: 'The Canva layoffs aren’t just about headcount — here’s what they mean for junior designers:',
  audio: 'Upbeat, modern tech (95–105 BPM)',
  why: [
    'High unanswered demand (312 questions)',
    'You had strong retention on career explainers (68%)',
    'Low coverage (only 9 videos on this angle)',
  ],
}

export const weekPlan = [
  { day: 'Mon, Jan 27', title: 'Canva layoffs: what it means for junior designers', tags: ['Career', 'Gap'], len: '1:10', status: 'Ready to shoot', hue: 280 },
  { day: 'Tue, Jan 28', title: 'AI replacing junior devs: real risk or hype?', tags: ['AI', 'Career'], len: '1:05', status: 'Ready to shoot', hue: 200 },
  { day: 'Wed, Jan 29', title: '5 skills to learn after the Canva layoffs', tags: ['Skills', 'How-to'], len: '1:02', status: 'Ready to shoot', hue: 160 },
  { day: 'Thu, Jan 30', title: 'Should you switch from Canva to Figma?', tags: ['Tools', 'Comparison'], len: '1:08', status: 'Draft', hue: 20 },
  { day: 'Fri, Jan 31', title: 'The bigger trend: what these layoffs say about AI', tags: ['Industry', 'Analysis'], len: '1:04', status: 'Draft', hue: 240 },
]

export const brandFit = [
  { name: 'Alex', audience: '114K', fmt: 'Explainer (1–2 min)', fit: 95 },
  { name: 'Maya', audience: '268K', fmt: 'Industry analysis (2–4 min)', fit: 92 },
  { name: 'Leo', audience: '89K', fmt: 'Career advice (short, <60s)', fit: 88 },
  { name: 'Emma', audience: '321K', fmt: 'List / next steps (1–2 min)', fit: 86 },
]

// Sample videos used for thumbnails in screenshots.
export const videos = [
  { title: 'Canva just laid off staff. Here is why.', creator: 'Maya Chen', views: '482K', dur: '1:24', platform: 'tiktok', hue: 262, seed: 2 },
  { title: 'What the Canva layoffs mean for designers', creator: 'Leo Park', views: '215K', dur: '0:58', platform: 'instagram', hue: 200, seed: 1 },
  { title: 'AI is not the reason. Overhiring is.', creator: 'Emma Ruiz', views: '640K', dur: '1:41', platform: 'tiktok', hue: 330, seed: 4 },
  { title: '5 skills to learn after a layoff', creator: 'Dev Patel', views: '173K', dur: '1:12', platform: 'instagram', hue: 160, seed: 3 },
  { title: 'Should you leave Canva for Figma?', creator: 'Sara Kim', views: '96K', dur: '0:47', platform: 'tiktok', hue: 24, seed: 6 },
  { title: 'Junior designers: read this today', creator: 'Noah Wells', views: '58K', dur: '1:03', platform: 'instagram', hue: 290, seed: 5 },
  { title: 'The real story behind tech layoffs', creator: 'Ava Torres', views: '310K', dur: '2:10', platform: 'tiktok', hue: 230, seed: 8 },
  { title: 'Design careers in the age of AI', creator: 'Ben Okafor', views: '129K', dur: '1:35', platform: 'instagram', hue: 180, seed: 7 },
  { title: 'What no one says about layoffs', creator: 'Zoe Martin', views: '87K', dur: '0:52', platform: 'tiktok', hue: 350, seed: 9 },
  { title: 'Build a portfolio that survives AI', creator: 'Ian Brooks', views: '144K', dur: '1:28', platform: 'instagram', hue: 140, seed: 10 },
  { title: 'Is Canva still worth learning?', creator: 'Priya Nair', views: '203K', dur: '1:06', platform: 'tiktok', hue: 215, seed: 11 },
  { title: 'Layoffs explained in 45 seconds', creator: 'Jack Rowe', views: '371K', dur: '0:45', platform: 'tiktok', hue: 40, seed: 12 },
]
export const storyboard = [
  { n: 1, label: 'Hook on camera', hue: 262, seed: 2 },
  { n: 2, label: 'Recap what happened', hue: 215, seed: 2 },
  { n: 3, label: 'Impact on juniors', hue: 330, seed: 2 },
  { n: 4, label: 'Three next steps', hue: 160, seed: 2 },
  { n: 5, label: 'Wrap up and ask', hue: 24, seed: 2 },
]
