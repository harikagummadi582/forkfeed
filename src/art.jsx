// Locally drawn sample art: people, video thumbnails and storyboard frames.
// No external images, so screenshots always look the same offline.

const SKIN = ['#f1c9a5', '#d9a27a', '#b9805a', '#8d5a3b', '#f6d7bd']
const HAIR = ['#2b1d16', '#4a2c1c', '#1a1a1f', '#7a4a2a', '#c9a15a']

export function Bust({ seed = 0, hue = 250, style }) {
  const skin = SKIN[seed % SKIN.length], hair = HAIR[(seed * 3 + 1) % HAIR.length]
  const long = seed % 2 === 0
  return (
    <svg viewBox="0 0 100 100" style={style} preserveAspectRatio="xMidYMax meet">
      <path d={`M8 100 Q8 66 50 62 Q92 66 92 100 Z`} fill={`hsl(${hue} 55% 38%)`} />
      <path d="M40 62 L50 76 L60 62 Z" fill={`hsl(${hue} 55% 28%)`} />
      <rect x="43" y="50" width="14" height="14" rx="5" fill={skin} />
      {long && <path d="M30 40 Q28 14 50 14 Q72 14 70 40 L72 62 Q66 54 64 44 L36 44 Q34 54 28 62 Z" fill={hair} />}
      <ellipse cx="50" cy="38" rx="16" ry="18" fill={skin} />
      {!long && <path d="M33 36 Q32 16 50 16 Q68 16 67 36 Q60 26 50 27 Q40 26 33 36 Z" fill={hair} />}
      <circle cx="44" cy="39" r="1.6" fill="#1f1f29" /><circle cx="56" cy="39" r="1.6" fill="#1f1f29" />
      <path d="M45 47 Q50 51 55 47" stroke="#8a4b3b" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Avatar({ seed = 0, hue = 250, size = 40 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', flex: 'none', background: `linear-gradient(145deg, hsl(${hue} 80% 85%), hsl(${hue + 30} 70% 70%))`, boxShadow: '0 0 0 2px #fff, 0 2px 8px rgba(16,24,40,.15)' }}>
      <Bust seed={seed} hue={hue} style={{ width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}

const PLATFORM = { instagram: 'Instagram', tiktok: 'TikTok' }

export function Thumb({ v, small, bare, onClick }) {
  return (
    <div className={'thumb2' + (small ? ' sm' : '')} onClick={onClick}
      style={{ background: `linear-gradient(150deg, hsl(${v.hue} 85% 58%), hsl(${v.hue + 50} 70% 28%))` }}>
      <div className="blob" style={{ background: `hsl(${v.hue + 120} 90% 70%)` }} />
      <Bust seed={v.seed} hue={v.hue + 20} style={{ position: 'absolute', right: '-4%', bottom: 0, height: '86%', width: '60%' }} />
      {!small && !bare && <div className="tt">{v.title}</div>}
      <div className="play"><svg viewBox="0 0 24 24" width="14" height="14"><path d="M8 5v14l11-7z" fill="#0f172a" /></svg></div>
      {!small && <span className="plat">{PLATFORM[v.platform]}</span>}
      {!small && <span className="dur">{v.dur}</span>}
    </div>
  )
}

export function VideoCard({ v }) {
  return (
    <div className="vcard">
      <Thumb v={v} />
      <div className="vmeta">
        <Avatar seed={v.seed} hue={v.hue} size={30} />
        <div style={{ minWidth: 0 }}>
          <div className="vt">{v.title}</div>
          <div className="small" style={{ marginTop: 2 }}>{v.creator} · {v.views} views</div>
        </div>
      </div>
    </div>
  )
}

// Vertical 9:16 player frame for the breakdown page.
export function PhoneFrame({ title, seed = 2, hue = 262 }) {
  return (
    <div className="phone" style={{ background: `linear-gradient(160deg, hsl(${hue} 80% 55%), hsl(${hue + 40} 70% 20%))` }}>
      <div className="blob" style={{ background: `hsl(${hue + 120} 90% 70%)`, width: '70%', height: '40%', top: '-8%', right: '-20%' }} />
      <Bust seed={seed} hue={hue + 20} style={{ position: 'absolute', left: '8%', right: '8%', bottom: '9%', height: '68%', width: '84%' }} />
      <div className="ptop"><span>Following</span><b>For You</b></div>
      <div className="pside"><i /><i /><i /><i /></div>
      <div className="pcap">{title}</div>
      <div className="pbar"><div /></div>
    </div>
  )
}

// Storyboard frame for a shot in the content kit.
export function Frame({ n, label, hue, seed }) {
  return (
    <div className="frame">
      <div className="fimg" style={{ background: `linear-gradient(150deg, hsl(${hue} 80% 62%), hsl(${hue + 50} 65% 30%))` }}>
        <Bust seed={seed} hue={hue + 20} style={{ position: 'absolute', right: '6%', bottom: 0, height: '82%', width: '62%' }} />
        <span className="fn">{n}</span>
      </div>
      <div className="small" style={{ marginTop: 8, color: 'var(--text)' }}>{label}</div>
    </div>
  )
}
