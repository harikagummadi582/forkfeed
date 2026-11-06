import { useState } from 'react'
import * as D from '../data.js'
import { generateKit } from '../api.js'

const Head = ({ title, sub, children }) => (
  <div className="head"><div><h1>{title}</h1><div className="sub">{sub}</div></div><div className="row" style={{ alignItems: 'center' }}>{children}</div></div>
)
const Plats = () => <span className="small">Instagram · TikTok</span>

export function TrendRadar({ go }) {
  return (<>
    <Head title="Trend Radar" sub="Topics trending among education creators">
      <span className="pill">Education creators ▾</span><span className="pill">Last 7 days ▾</span>
    </Head>
    <div className="card" style={{ padding: 6 }}>
      <table>
        <thead><tr><th>Topic</th><th>Velocity</th><th>Videos</th><th>Top platforms</th><th /></tr></thead>
        <tbody>
          {D.topics.map((t) => (
            <tr key={t.id} className="click" onClick={() => go('dive')}>
              <td><b>{t.name}</b><div className="small">{t.sub}</div></td>
              <td><span className="badge b-green">+{t.velocity}%</span></td>
              <td>{t.videos}</td><td><Plats /></td><td>›</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>)
}

export function DeepDive({ go }) {
  const [tab, setTab] = useState('Angle clusters')
  const color = { Crowded: ['b-red', '#ef4444'], Medium: ['b-amber', '#f59e0b'], Open: ['b-green', '#22c55e'] }
  return (<>
    <Head title="Canva layoffs — Topic deep-dive" sub="237 videos from education creators · Last 7 days"><button className="btn">Refresh</button></Head>
    <div className="tabs">{['Angle clusters', 'All videos (237)', 'Key takeaways'].map((t) => <button key={t} className={'tab' + (tab === t ? ' on' : '')} onClick={() => setTab(t)}>{t}</button>)}</div>
    <div className="card" style={{ padding: 6 }}>
      <table>
        <thead><tr><th>Angle (what creators are saying)</th><th>Videos</th><th>Crowded vs open</th></tr></thead>
        <tbody>
          {D.angles.map((a) => (
            <tr key={a.name} className="click" onClick={() => go('gaps')}>
              <td><b>{a.name}</b><div className="small">{a.sub}</div></td>
              <td>{a.videos}</td>
              <td><div className="row" style={{ alignItems: 'center' }}>
                <span className={'badge ' + color[a.level][0]} style={{ minWidth: 92, textAlign: 'center' }}>{a.level} ({a.crowded}%)</span>
                <div className="bar"><div style={{ width: a.crowded + '%', background: color[a.level][1] }} /></div>
              </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>)
}

export function VideoBreakdown() {
  const [tab, setTab] = useState('Analysis')
  const c = D.commentGroups
  return (<>
    <Head title="Video breakdown" sub="Canva layoffs · Video 12 of 237"><button className="btn">‹</button><button className="btn">›</button></Head>
    <div className="row">
      <div style={{ width: 240 }}><div className="video">The Canva layoffs in 60 seconds<small>0:00 / 1:24</small></div></div>
      <div className="col">
        <div className="tabs">{['Analysis', 'On-screen text', 'Comments (423)'].map((t) => <button key={t} className={'tab' + (tab === t ? ' on' : '')} onClick={() => setTab(t)}>{t}</button>)}</div>
        {tab === 'Analysis' && <div className="card">
          {D.breakdown.map((b) => (
            <div className="tl" key={b.t}><span className="ts" style={{ height: 22 }}>{b.t}</span>
              <div><b>{b.k}</b>{Array.isArray(b.v) ? <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--muted)' }}>{b.v.map((x) => <li key={x}>{x}</li>)}</ul> : <span style={{ color: 'var(--muted)' }}>{b.v}</span>}</div></div>
          ))}
        </div>}
        {tab === 'On-screen text' && <div className="card">
          {['The Canva layoffs in 60 seconds', 'Why now? AI + growth', 'What it means for you', 'Upskill now'].map((x, i) => <div className="tl" key={x}><span className="ts">0:{String(i * 15).padStart(2, '0')}</span><span>{x}</span></div>)}
        </div>}
        {tab === 'Comments (423)' && <div className="grid3">
          {[['Loved', c.loved, 'b-green'], ['Disputed', c.disputed, 'b-red'], ['Asked for', c.asked, 'b-purple']].map(([t, items, cls]) => (
            <div className="card" key={t}><span className={'badge ' + cls}>{t}</span>
              {items.map((i) => <div key={i.q} style={{ marginTop: 14 }}><span className="ts">{i.t}</span> <span>{i.q}</span><div className="small">{i.n} comments</div></div>)}
            </div>))}
        </div>}
      </div>
    </div>
  </>)
}

export function AudienceGaps({ go }) {
  const st = { Unanswered: 'b-red', 'Partially answered': 'b-amber', Answered: 'b-green' }
  return (<>
    <Head title="Audience gaps" sub="What fans are asking, and what’s still unanswered"><span className="pill">Canva layoffs ▾</span></Head>
    <div className="grid2">
      <div className="col"><div className="card">
        <b>Top fan questions</b>
        <table style={{ marginTop: 8 }}><thead><tr><th>Question</th><th>Mentions</th><th /></tr></thead>
          <tbody>{D.fanQuestions.map((f, i) => (
            <tr key={f.q}><td>{i + 1}. {f.q}</td><td>{f.n}</td><td><span className={'badge ' + st[f.status]}>{f.status}</span></td></tr>))}</tbody></table>
      </div>
        <div className="card" style={{ marginTop: 16 }}><b>Sentiment across the video</b><div className="small" style={{ marginBottom: 10 }}>Audience positivity by timestamp</div>
          <div className="spark">{D.sentimentCurve.map((v, i) => <div key={i} style={{ height: v + '%' }} />)}</div></div>
      </div>
      <div className="card glow" style={{ alignSelf: 'start' }}>
        <b style={{ color: 'var(--purple2)' }}>What nobody covered</b>
        <div className="big" style={{ margin: '14px 0' }}>{D.gap.title}</div>
        {D.gap.points.map((p) => <div key={p} style={{ padding: '6px 0', color: 'var(--muted)' }}>{p}</div>)}
        <button className="btn lime" style={{ marginTop: 16, width: '100%' }} onClick={() => go('kit')}>Use this angle</button>
      </div>
    </div>
  </>)
}

export function CreatorProfile() {
  const c = D.creator
  return (<>
    <Head title="Creator profile" sub="Your style, topics and what works best for your audience"><span className="pill">Alex (you) ▾</span></Head>
    <div className="grid2" style={{ gridTemplateColumns: '1fr 1fr' }}>
      <div className="col">
        <div className="card row" style={{ alignItems: 'center' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--purple)', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 20 }}>A</div>
          <div><b style={{ fontSize: 18 }}>{c.name}</b><div className="small">{c.role}</div><div className="small">{c.followers} followers · {c.views} total views</div></div>
          <div style={{ marginLeft: 'auto' }}><div className="small" style={{ marginBottom: 6 }}>Niche</div>{c.niche.map((n) => <span className="chip" key={n}>{n}</span>)}</div>
        </div>
        <div className="card" style={{ marginTop: 16 }}><b>Your voice</b>
          {c.voice.map((v) => <div key={v.l} style={{ marginTop: 12 }}><div className="slabel"><span>{v.l}</span><span>{v.r}</span></div><div className="slider"><i style={{ left: v.v + '%' }} /></div></div>)}
        </div>
      </div>
      <div className="col">
        <div className="card"><b>Your top hooks</b><div className="small">Last 30 videos</div>
          {c.hooks.map((h) => <div className="shot" key={h.h}><span className="col">{h.h}</span><span style={{ color: 'var(--lime)' }}>{h.p}%</span></div>)}</div>
        <div className="card" style={{ marginTop: 16 }}><b>Past format performance</b>
          <table><thead><tr><th>Format</th><th>Avg. view rate</th><th>Avg. retention</th></tr></thead>
            <tbody>{c.formats.map((f) => <tr key={f.f}><td>{f.f}</td><td>{f.views}</td><td><span className="badge b-green">{f.ret}</span></td></tr>)}</tbody></table></div>
      </div>
    </div>
  </>)
}

export function ForkKit() {
  const [kit, setKit] = useState(D.kit)
  const [busy, setBusy] = useState(false)
  const [approved, setApproved] = useState(false)
  const regen = async () => { setBusy(true); setApproved(false); setKit(await generateKit('canva', D.creator)); setBusy(false) }
  return (<>
    <Head title="Content kit" sub="A ready-to-shoot video based on real gaps and your style">
      <button className="btn" onClick={regen} disabled={busy}>{busy ? <><span className="spin" />Generating…</> : 'Regenerate'}</button>
      <button className="btn primary" onClick={() => setApproved(true)}>{approved ? 'Approved' : 'Approve'}</button>
      <button className="btn" onClick={() => navigator.clipboard?.writeText(JSON.stringify(kit, null, 2))}>Export ▾</button>
    </Head>
    <div className="grid2" style={{ gridTemplateColumns: '1.1fr 1fr' }}>
      <div className="col">
        <div className="card"><div className="small">Video idea</div><div className="big" style={{ marginTop: 8 }}>{kit.idea}</div></div>
        <div className="card" style={{ marginTop: 16 }}><b style={{ color: 'var(--purple2)' }}>Hook (0–5s)</b><p style={{ lineHeight: 1.5 }}>{kit.hook}</p></div>
        <div className="row" style={{ marginTop: 16 }}>
          <div className="card col"><b>Caption (draft)</b><p className="small">{kit.caption}</p></div>
          <div className="card col"><b>Audio suggestion</b><p className="small">{kit.audio}</p></div>
        </div>
      </div>
      <div className="col">
        <div className="card"><b>Shot list (≈ 60–75s)</b>
          {kit.shots.map((s) => <div className="shot" key={s.t}><span className="ts">{s.t}</span><span>{s.d}</span></div>)}</div>
        <div className="card" style={{ marginTop: 16 }}><b style={{ color: 'var(--lime)' }}>Why it will work</b>
          <div style={{ marginTop: 10 }}>{kit.why.map((w) => <span className="chip lime" key={w}>{w}</span>)}</div></div>
      </div>
    </div>
  </>)
}

export function WeeklyPlan() {
  const [view, setView] = useState('Creator view')
  return (<>
    <Head title="Weekly plan" sub="Your next 5 content kits, tailored to trends, gaps and your style">
      <span className="pill">Alex ▾</span>
      <div className="tabs" style={{ margin: 0 }}>{['Creator view', 'Brand view'].map((v) => <button key={v} className={'tab' + (view === v ? ' on' : '')} onClick={() => setView(v)}>{v}</button>)}</div>
    </Head>
    {view === 'Creator view' ? <div className="plan">
      {D.weekPlan.map((p) => (
        <div className="card" key={p.day}>
          <div className="small" style={{ marginBottom: 8 }}>{p.day}</div>
          <div className="thumb" style={{ background: `linear-gradient(140deg, hsl(${p.hue} 70% 45%), hsl(${p.hue + 40} 60% 18%))` }}><span>{p.len}</span></div>
          <b>{p.title}</b>
          <div style={{ margin: '10px 0' }}>{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          <span className={'badge ' + (p.status === 'Draft' ? 'b-amber' : 'b-green')}>{p.status}</span>
        </div>))}
    </div> : <div className="card"><b>Brand view</b> <span className="small">Top creators & formats by topic fit · Canva layoffs</span>
      <table style={{ marginTop: 8 }}><thead><tr><th>Creator</th><th>Audience</th><th>Best format (for this topic)</th><th>Fit score</th></tr></thead>
        <tbody>{D.brandFit.map((b) => (
          <tr key={b.name}><td><b>{b.name}</b></td><td>{b.audience}</td><td>{b.fmt}</td>
            <td><div className="row" style={{ alignItems: 'center' }}><span className="badge b-green">{b.fit}%</span><div className="bar"><div style={{ width: b.fit + '%', background: 'var(--green)' }} /></div></div></td></tr>))}</tbody></table>
    </div>}
  </>)
}
