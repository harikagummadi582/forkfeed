import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Background } from './viz.jsx'
import { TrendRadar, DeepDive, VideoBreakdown, AudienceGaps, CreatorProfile, ForkKit, WeeklyPlan } from './pages/index.jsx'

const NAV = [
  ['radar', 'Trend Radar'], ['dive', 'Deep-dive'], ['video', 'Video Breakdown'],
  ['gaps', 'Audience Gaps'], ['profile', 'Creator Profile'], ['kit', 'Content Kit'], ['plan', 'Weekly Plan'],
]

// Shrinks the page content just enough to fit the window, so nothing ever scrolls.
function FitPage({ children, pageKey }) {
  const box = useRef(null), inner = useRef(null)
  const fit = () => {
    const b = box.current, i = inner.current
    if (!b || !i) return
    i.style.zoom = 1
    const cs = getComputedStyle(b)
    const availH = b.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom)
    const availW = b.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight)
    const z = Math.min(1, availH / i.scrollHeight, availW / i.scrollWidth)
    i.style.zoom = Math.max(0.5, z).toFixed(3)
  }
  useLayoutEffect(() => {
    fit()
    const t = [setTimeout(fit, 120), setTimeout(fit, 600)]
    document.fonts?.ready.then(fit)
    const mo = new MutationObserver(() => requestAnimationFrame(fit))
    mo.observe(inner.current, { childList: true, subtree: true })
    window.addEventListener('resize', fit)
    return () => { t.forEach(clearTimeout); mo.disconnect(); window.removeEventListener('resize', fit) }
  }, [pageKey])
  return <main className="main" ref={box}><div className="fit" ref={inner} key={pageKey}>{children}</div></main>
}

export default function App() {
  const [page, setPage] = useState('radar')
  const go = setPage
  const pages = {
    radar: <TrendRadar go={go} />, dive: <DeepDive go={go} />, video: <VideoBreakdown />,
    gaps: <AudienceGaps go={go} />, profile: <CreatorProfile />, kit: <ForkKit />, plan: <WeeklyPlan />,
  }
  return (
    <>
      <Background />
      <div className="app">
        <aside className="side">
          <div className="logo"><i>F</i>ForkFeed</div>
          {NAV.map(([id, label]) => (
            <button key={id} className={'nav' + (page === id ? ' on' : '')} onClick={() => go(id)}>{label}</button>
          ))}
        </aside>
        <FitPage pageKey={page}>{pages[page]}</FitPage>
      </div>
    </>
  )
}
