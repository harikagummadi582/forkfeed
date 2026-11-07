// Small dependency-free SVG visuals.

export function Sparkline({ data, color = '#4f46e5', w = 90, h = 28 }) {
  const max = Math.max(...data), min = Math.min(...data)
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - 3 - ((v - min) / (max - min || 1)) * (h - 6)])
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ')
  const id = 'sg' + color.replace('#', '') + data.length
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      <defs><linearGradient id={id} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={color} stopOpacity=".35" /><stop offset="1" stopColor={color} stopOpacity="0" /></linearGradient></defs>
      <path d={`${line} L${w} ${h} L0 ${h} Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts.at(-1)[0]} cy={pts.at(-1)[1]} r="2.6" fill={color} />
    </svg>
  )
}

export function Donut({ parts, size = 150, label, sub }) {
  const r = 52, c = 2 * Math.PI * r
  const total = parts.reduce((a, p) => a + p.v, 0)
  let acc = 0
  return (
    <svg width={size} height={size} viewBox="0 0 140 140">
      <circle cx="70" cy="70" r={r} fill="none" stroke="#e7e8ee" strokeWidth="14" />
      {parts.map((p) => {
        const len = (p.v / total) * c
        const el = <circle key={p.k} cx="70" cy="70" r={r} fill="none" stroke={p.color} strokeWidth="14"
          strokeDasharray={`${len - 2} ${c - len + 2}`} strokeDashoffset={-acc} transform="rotate(-90 70 70)" className="donut-seg" />
        acc += len
        return el
      })}
      <text x="70" y="68" textAnchor="middle" fill="#0f172a" fontSize="22" fontWeight="700">{label}</text>
      <text x="70" y="86" textAnchor="middle" fill="#64748b" fontSize="10">{sub}</text>
    </svg>
  )
}

// Demand (fan questions) vs coverage (videos). Top-left = open angle.
export function AngleMap({ items, onPick }) {
  const W = 640, H = 300, L = 54, B = 36, T = 16, R = 16
  const px = (v) => L + (v / 100) * (W - L - R)
  const py = (v) => H - B - (v / 360) * (H - B - T)
  const col = { Crowded: '#ef4444', Medium: '#d97706', Open: '#059669' }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
      <defs>
        <linearGradient id="ws" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#059669" stopOpacity=".16" /><stop offset="1" stopColor="#059669" stopOpacity="0" /></linearGradient>
      </defs>
      <rect x={L} y={T} width={(W - L - R) * 0.38} height={(H - B - T) * 0.45} rx="10" fill="url(#ws)" stroke="#059669" strokeOpacity=".35" strokeDasharray="4 4" />
      <text x={L + 10} y={T + (H - B - T) * 0.45 - 24} fill="#059669" fontSize="11" fontWeight="600">OPEN ANGLE</text>
      <text x={L + 10} y={T + (H - B - T) * 0.45 - 10} fill="#64748b" fontSize="10">high demand, low coverage</text>
      {[0, 90, 180, 270, 360].map((v) => <g key={v}><line x1={L} x2={W - R} y1={py(v)} y2={py(v)} stroke="#e7e8ee" strokeWidth="1" /><text x={L - 8} y={py(v) + 3} textAnchor="end" fill="#64748b" fontSize="10">{v}</text></g>)}
      {[0, 25, 50, 75, 100].map((v) => <text key={v} x={px(v)} y={H - B + 16} textAnchor="middle" fill="#64748b" fontSize="10">{v}</text>)}
      <text x={(W + L) / 2} y={H - 4} textAnchor="middle" fill="#64748b" fontSize="11">Videos covering the angle</text>
      <text transform={`translate(12 ${(H - B) / 2}) rotate(-90)`} textAnchor="middle" fill="#64748b" fontSize="11">Fan questions</text>
      {items.map((a) => {
        const x = px(a.videos), y = py(a.demand), r = 9 + a.videos / 9, open = a.level === 'Open'
        return (
          <g key={a.name} onClick={() => onPick?.(a)} style={{ cursor: 'pointer' }}>
            {open && <circle cx={x} cy={y} r={r} fill={col[a.level]} className="pulse" />}
            <circle cx={x} cy={y} r={r} fill={col[a.level]} fillOpacity=".28" stroke={col[a.level]} strokeWidth="1.6" />
            <text x={x + r + 6} y={y + 4} fill="#0f172a" fontSize="11" fontWeight={open ? 700 : 500}>{a.name.length > 26 ? a.name.slice(0, 25) + '…' : a.name}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function Stat({ label, value, delta }) {
  return (
    <div className="card stat">
      <div className="small" style={{ marginTop: 0 }}>{label}</div>
      <div className="statv">{value}</div>
      {delta && <div className="small" style={{ color: 'var(--lime)' }}>{delta}</div>}
    </div>
  )
}

export function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
      <div className="gridlines" />
    </div>
  )
}
