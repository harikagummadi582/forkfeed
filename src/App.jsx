import { useState } from 'react'
import { TrendRadar, DeepDive, VideoBreakdown, AudienceGaps, CreatorProfile, ForkKit, WeeklyPlan } from './pages/index.jsx'

const NAV = [
  ['radar', 'Trend Radar'], ['dive', 'Deep-dive'], ['video', 'Video Breakdown'],
  ['gaps', 'Audience Gaps'], ['profile', 'Creator Profile'], ['kit', 'Content Kit'], ['plan', 'Weekly Plan'],
]

export default function App() {
  const [page, setPage] = useState('radar')
  const go = setPage
  const pages = {
    radar: <TrendRadar go={go} />, dive: <DeepDive go={go} />, video: <VideoBreakdown />,
    gaps: <AudienceGaps go={go} />, profile: <CreatorProfile />, kit: <ForkKit />, plan: <WeeklyPlan />,
  }
  return (
    <div className="app">
      <aside className="side">
        <div className="logo"><i>W</i>Whitespace</div>
        {NAV.map(([id, label]) => (
          <button key={id} className={'nav' + (page === id ? ' on' : '')} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </aside>
      <main className="main">{pages[page]}</main>
    </div>
  )
}
