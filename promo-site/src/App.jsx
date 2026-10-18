import { useEffect, useState } from 'react'
import { projectContent as content } from './data/projectContent.js'

const SectionMeta = ({ children, light = false }) => (
  <div className={`section-meta${light ? ' section-meta--light' : ''}`}>{children}</div>
)

const ArrowIcon = () => (
  <svg className="icon-arrow" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = [
    ['About', '#about'],
    ['Features', '#features'],
    ['How it works', '#how-it-works'],
    ['Testing', '#testing'],
    ['Videos', '#videos'],
    ['Team', '#team'],
  ]

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <a className="wordmark" href="#home" onClick={close}>PULSEBAND<span aria-hidden="true">•</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
      </nav>
    </header>
  )
}

function Waveform() {
  const bars = [16, 30, 50, 84, 48, 72, 104, 58, 34, 68, 116, 90, 52, 30, 64, 98, 72, 46, 82, 108, 70, 50, 32, 60, 88, 64, 42, 24]
  return (
    <div className="waveform" aria-hidden="true">
      {bars.map((height, index) => <span key={index} style={{ '--wave-height': `${height}px`, '--delay': `${index * -0.07}s` }} />)}
    </div>
  )
}

function HeroArtwork() {
  return (
    <figure className="hero-art" aria-labelledby="hero-art-caption">
      <div className="hero-art-grid" aria-hidden="true" />
      <div className="hero-art-circle hero-art-circle--coral" aria-hidden="true" />
      <div className="hero-art-circle hero-art-circle--line" aria-hidden="true" />
      <div className="hero-art-signal" aria-hidden="true">
        {[22, 42, 68, 38, 76, 54, 92, 48, 66, 30, 72, 44].map((height, index) => (
          <i key={index} style={{ '--signal-height': `${height}px`, '--signal-delay': `${index * -0.12}s` }} />
        ))}
      </div>
      <div className="hero-friend-dots" aria-hidden="true">
        {content.friends.map((friend) => <i key={friend.name} style={{ '--friend-colour': friend.colour }} />)}
      </div>
      <div className="hero-device-wrap">
        <img
          className="hero-device-main"
          src={content.productImage.src}
          alt={content.productImage.alt}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-art-note" aria-hidden="true"><span>Stay aware</span><i /><span>Reconnect</span></div>
      <figcaption id="hero-art-caption"><span>PulseBand / Pair connection</span><span>Social wearable concept / 2026</span></figcaption>
    </figure>
  )
}

function ProductCampaignVisual() {
  return (
    <figure className="product-campaign" id="campaign-visual">
      <div className="product-campaign-type" aria-hidden="true"><span>Together,</span><strong>further.</strong></div>
      <div className="product-campaign-orbit" aria-hidden="true" />
      <img
        src={content.productImage.src}
        alt="The authentic transparent PulseBand pair showing Nayaka and Syifa connected"
        loading="lazy"
      />
      <figcaption><span>Real device / Real interface</span><span>Pair awareness</span></figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-meta">
          <span>Team 16</span>
          <span>DECO3500 / Social &amp; Mobile Computing</span>
          <span>2026</span>
        </div>
        <h1 id="hero-title"><span>Pulse</span><span>Band</span></h1>
        <p className="hero-statement">Stay connected.<br />Feel the moment.</p>
        <p className="hero-description">A social wearable concept that helps friends communicate, reconnect and stay aware of each other during concerts and music festivals.</p>
        <a className="scroll-link" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
      </div>
      <HeroArtwork />
      <Waveform />
    </section>
  )
}

function About() {
  const moments = [
    ['01', 'Loud environments', 'Voice communication becomes difficult.'],
    ['02', 'Moving crowds', 'Friends can become separated.'],
    ['03', 'Weak connection', 'Messages may not arrive when they are needed.'],
  ]

  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <SectionMeta>02 / About PulseBand</SectionMeta>
      <div className="about-lead reveal">
        <h2 id="about-title">Built for the moments<br /><em>when staying connected gets hard.</em></h2>
        <p>Concerts and festivals are loud, crowded and constantly moving. Messages can be delayed, calls can be difficult to hear, and reconnecting after separation can take attention away from the live experience.</p>
      </div>
      <p className="about-highlight reveal">PulseBand explores a simpler way for friends to stay connected without constantly checking their phones.</p>
      <div className="moment-list">
        {moments.map(([number, title, copy]) => (
          <article className="moment reveal" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeatureVisual({ feature }) {
  if (feature.visual === 'direction') {
    return (
      <div className="feature-symbol feature-symbol--direction" aria-hidden="true">
        <span>Finding Nayaka</span><b>↗</b><small>18 m</small>
      </div>
    )
  }
  if (feature.visual === 'signals') {
    return (
      <div className="signal-list" aria-label="Quick signal examples">
        {feature.signals.map((signal) => <span key={signal}>{signal}</span>)}
      </div>
    )
  }
  return <div className="feature-symbol feature-symbol--sos" aria-label="SOS deliberate confirmation">SOS<small>Hold to confirm</small></div>
}

function Features() {
  return (
    <section className="features section-pad" id="features" aria-labelledby="features-title">
      <SectionMeta light>03 / Core experience</SectionMeta>
      <div className="features-heading reveal">
        <h2 id="features-title">Three things.<br /><em>That’s the point.</em></h2>
        <p>A focused set of interactions for awareness, quick communication and reconnection.</p>
      </div>
      <div className="feature-list">
        {content.features.map((feature) => (
          <article className="feature reveal" key={feature.number}>
            <div className="feature-copy">
              <span>{feature.number} / 03</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
            <FeatureVisual feature={feature} />
          </article>
        ))}
      </div>
      <div className="product-gallery reveal">
        <ProductCampaignVisual />
        <div className="friend-key">
          <span>Connected group</span>
          {content.friends.map((friend) => (
            <div key={friend.name}><i style={{ '--friend-colour': friend.colour }}>{friend.initials}</i><strong>{friend.name}</strong></div>
          ))}
        </div>
        <p>Some directional, proximity and Bluetooth behaviours are simulated in the proof-of-concept.</p>
      </div>
    </section>
  )
}

function InteractionVisual({ type }) {
  if (type === 'select') {
    return (
      <div className="interaction-visual menu-ui" aria-hidden="true">
        <span>PulseBand menu</span>
        <strong>Find Friend</strong>
        <small>Select</small>
      </div>
    )
  }
  if (type === 'friends') {
    return (
      <div className="interaction-visual friend-selector" aria-hidden="true">
        <span>Select a friend</span>
        <div>{content.friends.map((friend) => <i key={friend.name} style={{ '--friend-colour': friend.colour }}>{friend.initials}<small>{friend.name}</small></i>)}</div>
      </div>
    )
  }
  if (type === 'arrow') {
    return <div className="interaction-visual direction-ui" aria-hidden="true"><span>Finding Nayaka</span><b>↑</b><small>Follow the direction</small></div>
  }
  if (type === 'proximity') {
    return <div className="interaction-visual proximity-ui" aria-hidden="true"><span>Getting closer</span><div><i /><i /><i /><i /><i /></div><strong>8 m</strong></div>
  }
  return <div className="interaction-visual connected-ui" aria-hidden="true"><b>✓</b><span>Reconnected</span><small>Back to the moment</small></div>
}

function HowItWorks() {
  return (
    <section className="how section-pad" id="how-it-works" aria-labelledby="how-title">
      <SectionMeta>04 / How it works</SectionMeta>
      <div className="how-heading reveal">
        <h2 id="how-title">A few taps.<br /><em>A closer friend.</em></h2>
      </div>
      <div className="how-steps">
        {content.howItWorks.map((step) => (
          <article className="how-step reveal" key={step.number}>
            <InteractionVisual type={step.visual} />
            <div className="how-step-copy">
              <span>Step {step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function TutorialImage({ src, label, index }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="tutorial-placeholder" role="img" aria-label={`${label} screenshot placeholder`}>
        <span>Screen {String(index + 1).padStart(2, '0')}</span>
        <div className="placeholder-ui"><i /><i /><strong>{label}</strong><b>+</b></div>
        <small>Replace in /public/tutorial</small>
      </div>
    )
  }
  return <img src={src} alt={`${label} tutorial screen`} onError={() => setFailed(true)} />
}

function Tutorial() {
  const [groupIndex, setGroupIndex] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const group = content.tutorial[groupIndex]
  const [stepLabel, stepImage] = group.steps[stepIndex]

  const selectGroup = (index) => {
    setGroupIndex(index)
    setStepIndex(0)
  }

  return (
    <section className="tutorial section-pad" id="tutorial" aria-labelledby="tutorial-title">
      <SectionMeta>05 / Step by step</SectionMeta>
      <div className="tutorial-heading reveal">
        <h2 id="tutorial-title">See how<br />it works.</h2>
        <p>Three simple flows. Select each step to explore the interaction.</p>
      </div>
      <div className="tutorial-tabs" role="tablist" aria-label="Tutorial flows">
        {content.tutorial.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={groupIndex === index}
            className={groupIndex === index ? 'is-active' : ''}
            onClick={() => selectGroup(index)}
            key={item.key}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tutorial-stage" role="tabpanel">
        <div className="tutorial-media"><TutorialImage key={stepImage} src={stepImage} label={stepLabel} index={stepIndex} /></div>
        <div className="tutorial-copy">
          <span>{group.label}</span>
          <p className="tutorial-note">{group.note}</p>
          <ol>
            {group.steps.map(([label], index) => (
              <li key={label} className={stepIndex === index ? 'is-active' : ''}>
                <button type="button" onClick={() => setStepIndex(index)}><span>{String(index + 1).padStart(2, '0')}</span>{label}</button>
              </li>
            ))}
          </ol>
          <button className="round-button" type="button" onClick={() => setStepIndex((current) => (current + 1) % group.steps.length)} aria-label="Next tutorial step">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <p className="sos-disclaimer">SOS currently alerts connected group members. It does not contact emergency services.</p>
    </section>
  )
}

function VideoPlayer({ video }) {
  if (video.src) {
    return (
      <video className="video-player" controls preload="metadata" poster={video.poster || undefined}>
        <source src={video.src} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    )
  }
  return (
    <div className="video-placeholder" role="img" aria-label={`${video.label}: ${video.placeholder}`}>
      <span className="video-time">00:00</span>
      <div className="video-play" aria-hidden="true">▶</div>
      <div className="video-label"><strong>{video.label}</strong><span>{video.placeholder}</span></div>
      <div className="video-grid" aria-hidden="true" />
    </div>
  )
}

function UsabilityTesting() {
  return (
    <section className="testing section-pad" id="testing" aria-labelledby="testing-title">
      <SectionMeta light>06 / Usability testing</SectionMeta>
      <div className="testing-heading reveal">
        <h2 id="testing-title">Tested with people.<br /><em>Not just designed on screen.</em></h2>
        <p>Five participants tested PulseBand’s friend-finding and proximity interactions.</p>
      </div>
      <div className="reveal"><VideoPlayer video={content.videos.usability} /></div>
    </section>
  )
}

function Improvements() {
  return (
    <section className="improvements section-pad" aria-labelledby="improvements-title">
      <SectionMeta>07 / What we improved</SectionMeta>
      <h2 id="improvements-title" className="reveal">Test.<br />Notice.<br /><em>Improve.</em></h2>
      <div className="improvement-list">
        {content.improvements.map((item) => (
          <article className="improvement reveal" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.finding}{item.note && <small>{item.note}</small>}</p>
            <strong>{item.refinement}</strong>
          </article>
        ))}
      </div>
      <p className="improvement-closing">Simpler.<br />Clearer.<br /><em>More focused.</em></p>
    </section>
  )
}

function PromoVideo() {
  return (
    <section className="promo-video section-pad" id="videos" aria-labelledby="videos-title">
      <SectionMeta light>08 / In the moment</SectionMeta>
      <div className="promo-heading reveal">
        <h2 id="videos-title">See PulseBand<br /><em>in the moment.</em></h2>
        <p>The video will be inserted later.</p>
      </div>
      <div className="reveal"><VideoPlayer video={content.videos.promo} /></div>
    </section>
  )
}

function TeamClosing() {
  return (
    <section className="closing section-pad" id="team" aria-labelledby="closing-title">
      <SectionMeta>09 / Team 16</SectionMeta>
      <h2 id="closing-title" className="reveal">Stay connected.<br /><em>Feel the moment.</em></h2>
      <div className="closing-layout">
        <div className="closing-brand"><strong>PulseBand</strong><span>Team 16</span></div>
        <div className="team-list">
          {content.team.map((member, index) => (
            <article key={member.name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{member.name}</h3><p>{member.preferred || 'Team member'}</p></article>
          ))}
        </div>
      </div>
      <footer className="site-footer"><span>DECO3500</span><span>Social &amp; Mobile Computing</span><span>2026</span></footer>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
    if (target) requestAnimationFrame(() => target.scrollIntoView())
  }, [])

  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -45px' })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    let frame
    const updateParallax = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.045, 42)
        const graphicShift = Math.max(window.scrollY * -0.018, -18)
        document.documentElement.style.setProperty('--hero-parallax', `${shift}px`)
        document.documentElement.style.setProperty('--hero-graphic-parallax', `${graphicShift}px`)
      })
    }

    updateParallax()
    window.addEventListener('scroll', updateParallax, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateParallax)
      cancelAnimationFrame(frame)
      document.documentElement.style.removeProperty('--hero-parallax')
      document.documentElement.style.removeProperty('--hero-graphic-parallax')
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Tutorial />
        <UsabilityTesting />
        <Improvements />
        <PromoVideo />
        <TeamClosing />
      </main>
    </>
  )
}
