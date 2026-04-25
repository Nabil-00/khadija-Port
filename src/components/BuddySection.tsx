interface BuddySectionProps {
  sectionNumber?: string;
  onCaseStudyClick?: () => void;
  caseStudyHref?: string;
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

  .buddy-section {
    background: #0d1b2a;
    padding: 80px 60px;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    border: 1px solid rgba(188, 155, 106, 0.3);
  }

  @media (max-width: 900px) {
    .buddy-section { padding: 48px 24px; }
    .buddy-brand-grid { grid-template-columns: 1fr 1fr !important; }
    .buddy-panel-1 { grid-column: 1 / -1 !important; grid-row: auto !important; }
    .buddy-panel-4, .buddy-panel-5 { grid-column: span 1; }
  }

  @media (max-width: 600px) {
    .buddy-brand-grid { grid-template-columns: 1fr !important; }
    .buddy-panel-1, .buddy-panel-2, .buddy-panel-3,
    .buddy-panel-4, .buddy-panel-5 { grid-column: 1 !important; grid-row: auto !important; }
    .buddy-section-number { font-size: 64px !important; }
    .buddy-project-title { font-size: 30px !important; }
  }

  .buddy-section::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(253,181,21,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .buddy-section-meta {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 48px;
  }

  .buddy-section-number {
    font-family: 'DM Serif Display', serif;
    font-size: 96px;
    color: rgba(255,255,255,0.1);
    line-height: 1;
    flex-shrink: 0;
    user-select: none;
  }

  .buddy-section-info { flex: 1; padding-top: 12px; }

  .buddy-project-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #FDB515;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .buddy-project-title {
    font-family: 'DM Serif Display', serif;
    font-size: 42px;
    color: #f0ece3;
    line-height: 1.15;
    margin-bottom: 14px;
  }

  .buddy-project-desc {
    font-size: 14px;
    color: rgba(240,236,227,0.65);
    line-height: 1.75;
    max-width: 420px;
  }

  .buddy-skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }

  .buddy-skill-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FDB515;
    border-bottom: 1px solid rgba(188,155,106,0.45);
    padding-bottom: 2px;
  }

  .buddy-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 28px;
    background: #f5c518;
    color: #0d1b2a;
    font-size: 13px;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 100px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .buddy-cta-btn:hover { background: #ffd740; transform: translateY(-1px); }

  .buddy-brand-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 3px;
    border-radius: 16px;
    overflow: hidden;
  }

  .buddy-panel {
    background: #fff;
    padding: 28px;
    position: relative;
    overflow: hidden;
    min-height: 200px;
  }

  .buddy-panel-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #00b09b;
    margin-bottom: 6px;
  }

  .buddy-panel-title {
    font-size: 18px;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
    margin-bottom: 12px;
  }

  .buddy-panel-1 {
    grid-column: 1;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buddy-logo-mark {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px 0;
    gap: 10px;
  }

  .buddy-wordmark {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.18em;
    color: #00a89c;
    font-family: 'DM Sans', sans-serif;
  }

  .buddy-pillars {
    display: flex;
    gap: 0;
    border-top: 1px solid #eee;
    padding-top: 16px;
    margin-top: auto;
  }

  .buddy-pillar {
    flex: 1;
    font-size: 11px;
    font-weight: 500;
    color: #333;
    line-height: 1.4;
  }

  .buddy-pillar:not(:last-child) {
    border-right: 1px solid #eee;
    margin-right: 12px;
    padding-right: 12px;
  }

  .buddy-panel-2 { grid-column: 2; grid-row: 1; }

  .buddy-mini-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    margin-top: 8px;
    border-radius: 8px;
    overflow: hidden;
  }

  .buddy-mini-cell {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    overflow: hidden;
  }

  .buddy-mc-1 { background: linear-gradient(135deg, #7bc8e2 0%, #a78bfa 100%); }
  .buddy-mc-2 { background: linear-gradient(135deg, #c084fc 0%, #60a5fa 100%); }
  .buddy-mc-3 { background: linear-gradient(135deg, #34d399 0%, #60a5fa 100%); }
  .buddy-mc-4 { background: linear-gradient(135deg, #f472b6 0%, #c084fc 60%, #60a5fa 100%); }

  .buddy-panel-3 { grid-column: 3; grid-row: 1; background: #f0fafb; }

  .buddy-device-stack {
    display: flex;
    align-items: flex-end;
    margin-top: 12px;
    justify-content: center;
    position: relative;
    height: 100px;
  }

  .buddy-device-phone {
    width: 52px; height: 90px;
    background: #fff;
    border: 2px solid #cce8e6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 700;
    color: #00a89c;
    letter-spacing: 0.05em;
    flex-direction: column;
    gap: 3px;
    box-shadow: 0 4px 16px rgba(0,168,156,0.15);
    z-index: 2;
    font-family: 'DM Sans', sans-serif;
  }

  .buddy-device-tablet {
    width: 72px; height: 88px;
    background: linear-gradient(135deg, #e0f7f5 0%, #b2ece8 100%);
    border: 2px solid #cce8e6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    font-size: 8px;
    font-weight: 700;
    color: #00a89c;
    letter-spacing: 0.05em;
    z-index: 1;
    margin-left: -10px;
    font-family: 'DM Sans', sans-serif;
  }

  .buddy-device-speaker {
    width: 44px; height: 44px;
    background: #fff;
    border: 2px solid #cce8e6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-left: -8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .buddy-panel-4 { grid-column: 2; grid-row: 2; }

  .buddy-experience-tags {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 10px;
  }

  .buddy-exp-tag {
    font-size: 11px;
    color: #444;
    padding: 6px 10px;
    background: #f5f5f5;
    border-radius: 6px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
  }

  .buddy-panel-5 { grid-column: 3; grid-row: 2; background: #e8f8f6; }

  .buddy-store-visual {
    margin-top: 12px;
    border-radius: 8px;
    background: linear-gradient(160deg, #d0f0ee 0%, #b2e8e4 100%);
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .buddy-store-icon {
    width: 36px; height: 36px;
    background: rgba(0,168,156,0.15);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .buddy-store-text { font-size: 11px; font-weight: 600; color: #006b64; }
  .buddy-store-sub { font-size: 10px; color: #00a89c; }

  .buddy-pkg-row {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }

  .buddy-pkg-box {
    flex: 1;
    height: 36px;
    border-radius: 6px;
    background: linear-gradient(135deg, #a8e6e2, #7dd4cf);
  }

  .buddy-pkg-box-dark {
    background: linear-gradient(135deg, #2a8a84, #006b64);
  }
`;

const HeartSVG = ({ size = 64, gradient = true }: { size?: number; gradient?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 54C32 54 8 40 8 22C8 14.268 14.268 8 22 8C26.418 8 30.418 10.09 32 13.5C33.582 10.09 37.582 8 42 8C49.732 8 56 14.268 56 22C56 40 32 54 32 54Z"
      fill={gradient ? 'url(#buddy-hg)' : '#00a89c'}
    />
    {gradient && (
      <path d="M28 28 Q32 20 36 28 Q40 36 32 44 Q24 36 28 28Z" fill="white" opacity="0.4" />
    )}
    {gradient && (
      <defs>
        <linearGradient id="buddy-hg" x1="8" y1="8" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00c8b4" />
          <stop offset="100%" stopColor="#0096a0" />
        </linearGradient>
      </defs>
    )}
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export default function BuddySection({
  sectionNumber = '02',
  onCaseStudyClick,
  caseStudyHref,
}: BuddySectionProps) {
  return (
    <>
      <style>{styles}</style>

      <section className="buddy-section" data-project-card>
        <div className="buddy-section-meta" data-project-text>
          <div className="buddy-section-number">{sectionNumber}</div>
          <div className="buddy-section-info">
            <div className="buddy-project-tag">Brand Identity &amp; Design System</div>
            <h2 className="buddy-project-title">
              Buddy - Wellness<br />Brand Universe
            </h2>
            <p className="buddy-project-desc">
              A design-forward wellness brand built for cross-platform cohesion. Crafted with accessible artistry - spanning identity
              systems, immersive experiences, and product design.
            </p>
            <div className="buddy-skill-tags">
              {['Brand Identity', 'Design Systems', 'Product Design', 'Art Direction', 'Experiential'].map((t) => (
                <span key={t} className="buddy-skill-tag">{t}</span>
              ))}
            </div>
            {caseStudyHref ? (
              <a className="buddy-cta-btn" href={caseStudyHref}>
                View Case Study <ArrowIcon />
              </a>
            ) : (
              <button className="buddy-cta-btn" onClick={onCaseStudyClick} type="button">
                View Case Study <ArrowIcon />
              </button>
            )}
          </div>
        </div>

        <div className="buddy-brand-grid" data-project-image>
          <div className="buddy-panel buddy-panel-1">
            <div>
              <div className="buddy-panel-title" style={{ fontSize: 22 }}>
                Buddy:<br />Brand Essence<br />&amp; Philosophy
              </div>
            </div>
            <div className="buddy-logo-mark">
              <HeartSVG size={64} gradient />
              <div className="buddy-wordmark">BUDDY</div>
            </div>
            <div>
              <div className="buddy-panel-label">High-concept philosophy</div>
              <div className="buddy-pillars">
                {['Design-Forward Wellness', 'Accessible Artistry', 'Cross-Platform Cohesion'].map((p) => (
                  <div key={p} className="buddy-pillar">{p}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="buddy-panel buddy-panel-2">
            <div className="buddy-panel-title">Experimental<br />Core Identity</div>
            <div className="buddy-mini-grid">
              <div className="buddy-mini-cell buddy-mc-1">
                <HeartSVG size={28} gradient={false} />
              </div>
              <div className="buddy-mini-cell buddy-mc-2">
                <span style={{ fontSize: 22 }}>🚶</span>
              </div>
              <div className="buddy-mini-cell buddy-mc-3">
                <span style={{ fontSize: 22 }}>🔷</span>
              </div>
              <div className="buddy-mini-cell buddy-mc-4">
                <span style={{ fontSize: 22 }}>🧍</span>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="buddy-panel-label">Art-directed study</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#222', marginBottom: 4 }}>
                Vibrant and Design-Forward Edutech Style
              </div>
              <div className="buddy-panel-label" style={{ marginTop: 8 }}>Art-directed study</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#222' }}>
                Slightly Surreal Imagery for Mental States
              </div>
            </div>
          </div>

          <div className="buddy-panel buddy-panel-3">
            <div className="buddy-panel-title">Product Application<br />&amp; Cross-Platform</div>
            <div className="buddy-device-stack">
              <div className="buddy-device-tablet">
                <HeartSVG size={14} gradient={false} />
                <span>BUDDY</span>
              </div>
              <div className="buddy-device-phone">
                <HeartSVG size={14} gradient={false} />
                <span>BUDD</span>
              </div>
              <div className="buddy-device-speaker">🔊</div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="buddy-panel-label">From mobile to smart environments</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#333' }}>Unified Visual Language</div>
            </div>
          </div>

          <div className="buddy-panel buddy-panel-4">
            <div className="buddy-panel-title">
              Art-Directed<br />&amp; Immersive<br />Experiences
            </div>
            <div className="buddy-experience-tags">
              {[
                'Rhythmic and Tactile Editorial Style',
                'Contemporary Digital Studio Aesthetic',
                'Experimental packaging',
              ].map((t) => (
                <div key={t} className="buddy-exp-tag">{t}</div>
              ))}
            </div>
          </div>

          <div className="buddy-panel buddy-panel-5">
            <div className="buddy-panel-title" style={{ fontSize: 15 }}>Brand Touchpoints</div>
            <div className="buddy-store-visual">
              <div className="buddy-store-icon">
                <HeartSVG size={20} gradient={false} />
              </div>
              <div>
                <div className="buddy-store-text">Buddy</div>
                <div className="buddy-store-sub">Retail Experience</div>
              </div>
            </div>
            <div className="buddy-pkg-row">
              <div className="buddy-pkg-box" />
              <div className="buddy-pkg-box buddy-pkg-box-dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
