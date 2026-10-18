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
      <a className="wordmark" href="#home" onClick={close}>PulseBand<span aria-hidden="true">•</span></a>
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

function HeroArtwork() {
  return (
    <figure className="hero-art">
      <div className="hero-device-wrap">
        <img
          className="hero-device-main"
          src={content.productImage.src}
          alt={content.productImage.alt}
          loading="eager"
          fetchPriority="high"
          width="1672"
          height="941"
        />
      </div>
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
        <div className="hero-eyebrow"><span /> Your people. Always within reach.</div>
        <h1 id="hero-title">Stay connected.<br /><span>Feel the moment.</span></h1>
        <p className="hero-description">A social wearable concept that helps friends communicate, reconnect and stay aware of each other during concerts and music festivals.</p>
        <div className="hero-actions">
          <a className="hero-cta" href="#features">Meet PulseBand <span aria-hidden="true">↗</span></a>
          <a className="scroll-link" href="#how-it-works">How it works <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <HeroArtwork />
      <div className="hero-bottom">
        <span>PulseBand</span>
        <a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
        <span>Team 16 · DECO3500 · 2026</span>
      </div>
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
      <SectionMeta light>04 / Core experience</SectionMeta>
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
          <span>Connected pair</span>
          {content.friends.map((friend) => (
            <div key={friend.name}><i style={{ '--friend-colour': friend.colour }}>{friend.initials}</i><strong>{friend.name}</strong></div>
          ))}
        </div>
        <p>The prototype connects two watches: Nayaka and Syifa. Some directional, proximity and Bluetooth behaviours are simulated in the proof-of-concept.</p>
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
      <SectionMeta>05 / How it works</SectionMeta>
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

function VideoPlayer({ video }) {
  if (video.src) {
    return (
      <video className="video-player" controls playsInline preload="metadata" aria-label={video.label} poster={video.poster || undefined}>
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
        <h2 id="testing-title">Tested with People.<br /><em>Refined through Feedback.</em></h2>
        <p>Five participants tested PulseBand’s friend-finding and proximity interactions.</p>
      </div>
      <div className="reveal"><VideoPlayer video={content.videos.usability} /></div>
    </section>
  )
}

function PromoVideo() {
  return (
    <section className="promo-video section-pad" id="videos" aria-labelledby="videos-title">
      <SectionMeta light>03 / In the moment</SectionMeta>
      <div className="promo-heading reveal">
        <h2 id="videos-title">See PulseBand<br /><em>in the moment.</em></h2>
      </div>
      <div className="reveal"><VideoPlayer video={content.videos.promo} /></div>
    </section>
  )
}

function TeamClosing() {
  return (
    <section className="closing section-pad" id="team" aria-labelledby="closing-title">
      <SectionMeta>07 / Team 16</SectionMeta>
      <h2 id="closing-title" className="reveal">Stay connected.<br /><em>Feel the moment.</em></h2>
      <div className="closing-layout">
        <aside className="closing-brand" aria-label="About the team">
          <span className="team-card-label"><i aria-hidden="true" /> The people behind it</span>
          <h3>Team 16<span>.</span></h3>
          <p>Bringing friends closer,<br />one pulse at a time.</p>
          <div className="team-card-footer">
            <strong>PulseBand<span aria-hidden="true">•</span></strong>
            <span>DECO3500<br />Social &amp; Mobile Computing</span>
          </div>
        </aside>
        <div className="team-list">
          {content.team.map((member, index) => (
            <article key={member.name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{member.name}</h3></article>
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


  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <PromoVideo />
        <Features />
        <HowItWorks />
        <UsabilityTesting />
        <TeamClosing />
      </main>
    </>
  )
}
