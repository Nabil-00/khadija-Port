interface WorkdhdSectionProps {
  sectionNumber?: string;
  onCaseStudyClick?: () => void;
  caseStudyHref?: string;
}

const styles = `
  .wd-section {
    background: #0d1b2a;
    padding: 80px 60px;
    font-family: 'DM Sans', sans-serif;
    position: relative;
    overflow: hidden;
  }

  .wd-section::before {
    content: '';
    position: absolute;
    top: -100px; left: -80px;
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(180,120,220,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    .wd-section { padding: 48px 24px; }
    .wd-grid { grid-template-columns: 1fr 1fr !important; }
    .wd-p1 { grid-column: 1 / -1 !important; grid-row: auto !important; }
  }

  @media (max-width: 600px) {
    .wd-section { padding: 48px 24px; }
    .wd-grid { grid-template-columns: 1fr !important; }
    .wd-p1, .wd-p2, .wd-p3, .wd-p4, .wd-p5 {
      grid-column: 1 !important; grid-row: auto !important;
    }
    .wd-num { font-size: 64px !important; }
    .wd-title { font-size: 30px !important; }
  }

  .wd-meta {
    display: flex;
    align-items: flex-start;
    gap: 48px;
    margin-bottom: 48px;
  }

  .wd-num {
    font-family: 'DM Serif Display', serif;
    font-size: 96px;
    color: rgba(255,255,255,0.08);
    line-height: 1;
    flex-shrink: 0;
    user-select: none;
  }

  .wd-info { flex: 1; padding-top: 12px; }

  .wd-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: #c084fc;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .wd-title {
    font-family: 'DM Serif Display', serif;
    font-size: 42px;
    color: #f0ece3;
    line-height: 1.15;
    margin-bottom: 14px;
  }

  .wd-desc {
    font-size: 14px;
    color: rgba(240,236,227,0.5);
    line-height: 1.75;
    max-width: 420px;
  }

  .wd-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }

  .wd-skill {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(192,132,252,0.8);
    border-bottom: 1px solid rgba(192,132,252,0.35);
    padding-bottom: 2px;
  }

  .wd-cta {
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
  .wd-cta:hover { background: #ffd740; transform: translateY(-1px); }

  .wd-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.85fr 0.85fr;
    grid-template-rows: auto auto;
    gap: 3px;
    border-radius: 16px;
    overflow: hidden;
  }

  .wd-panel {
    background: #fff;
    padding: 28px;
    position: relative;
    overflow: hidden;
    min-height: 190px;
  }

  .wd-plabel {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #9b59b6;
    margin-bottom: 6px;
  }

  .wd-ptitle {
    font-size: 17px;
    font-weight: 600;
    color: #111;
    line-height: 1.3;
    margin-bottom: 10px;
  }

  .wd-p1 { grid-column: 1; grid-row: 1 / 3; display: flex; flex-direction: column; justify-content: space-between; }

  .wd-hero-preview {
    margin: 16px 0;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    height: 160px;
    background: linear-gradient(135deg, #e8d5f5 0%, #c9b8e8 40%, #f5c8d8 100%);
  }

  .wd-hero-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    background: rgba(255,255,255,0.5);
  }

  .wd-hero-logo { font-size: 10px; font-weight: 700; color: #7b3fa0; font-style: italic; }
  .wd-hero-links { display: flex; gap: 8px; }
  .wd-hero-link { font-size: 8px; color: #555; }

  .wd-hero-signup {
    font-size: 8px;
    padding: 3px 8px;
    border-radius: 20px;
    border: 1px solid #d4a0e0;
    color: #7b3fa0;
    background: #fff;
  }

  .wd-hero-body { padding: 10px 12px; }
  .wd-hero-headline { font-size: 11px; font-weight: 700; color: #5a2d7a; font-style: italic; line-height: 1.4; max-width: 120px; }
  .wd-hero-pill { display: inline-block; margin-top: 8px; background: #e8a0bf; color: #fff; font-size: 8px; font-weight: 700; letter-spacing: 0.05em; padding: 4px 12px; border-radius: 20px; }

  .wd-blob1 { position: absolute; right: -10px; top: 20px; width: 80px; height: 80px; border-radius: 50%; background: rgba(224,176,255,0.35); }
  .wd-blob2 { position: absolute; right: 20px; top: -15px; width: 50px; height: 50px; border-radius: 50%; background: rgba(255,180,210,0.3); }

  .wd-pillars { display: flex; gap: 0; border-top: 1px solid #eee; padding-top: 14px; margin-top: auto; }
  .wd-pillar { flex: 1; font-size: 11px; font-weight: 500; color: #333; line-height: 1.4; }
  .wd-pillar:not(:last-child) { border-right: 1px solid #eee; margin-right: 10px; padding-right: 10px; }
  .wd-pnote { font-size: 9px; color: #aaa; display: block; margin-bottom: 2px; }

  .wd-p2 { grid-column: 2; grid-row: 1; background: #fdf8ff; }

  .wd-phone-frame {
    width: 72px; height: 130px;
    background: #1a1a2e;
    border-radius: 14px;
    margin: 10px auto 0;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 2px solid #333;
  }

  .wd-phone-screen {
    flex: 1;
    background: linear-gradient(160deg, #c9b8e8 0%, #b8c8f0 50%, #e8b8d8 100%);
    padding: 8px 6px;
  }

  .wd-phone-wt { font-size: 7px; font-weight: 700; color: #5a2070; text-align: center; line-height: 1.3; margin-bottom: 4px; font-style: italic; }
  .wd-phone-sub { font-size: 5.5px; color: rgba(255,255,255,0.85); text-align: center; line-height: 1.4; margin-bottom: 6px; }
  .wd-phone-input { background: rgba(160,140,200,0.4); border-radius: 4px; padding: 3px 5px; font-size: 5.5px; color: #fff; margin-bottom: 3px; }
  .wd-phone-btn { background: #d4a0c4; border-radius: 10px; padding: 3px 0; text-align: center; font-size: 6px; color: #fff; font-weight: 600; margin-top: 4px; }
  .wd-phone-notch { height: 6px; background: #1a1a2e; display: flex; align-items: center; justify-content: center; }
  .wd-phone-dot { width: 12px; height: 4px; background: #333; border-radius: 2px; }

  .wd-p3 { grid-column: 3; grid-row: 1; background: #fef8f0; }
  .wd-feature-list { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; }
  .wd-feat { font-size: 11px; color: #444; padding: 6px 10px; background: #f5f0ff; border-radius: 6px; font-weight: 500; border-left: 2px solid #c084fc; }

  .wd-p4 { grid-column: 2; grid-row: 2; }
  .wd-palette { display: flex; gap: 4px; margin-top: 10px; flex-wrap: wrap; }
  .wd-swatch { height: 32px; border-radius: 8px; flex: 1; }

  .wd-p5 { grid-column: 3; grid-row: 2; background: #f5f0ff; }
  .wd-stat-row { display: flex; flex-direction: column; gap: 8px; margin-top: 10px; }
  .wd-stat { display: flex; align-items: center; justify-content: space-between; }
  .wd-stat-label { font-size: 11px; color: #555; }
  .wd-stat-val { font-size: 13px; font-weight: 700; color: #7b3fa0; }
  .wd-bar-bg { height: 4px; background: #ecddf8; border-radius: 2px; margin-top: 2px; }
  .wd-bar-fill { height: 4px; border-radius: 2px; background: linear-gradient(90deg, #c084fc, #e879b0); }
`;

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const skills = ['UI/UX Design', 'Mobile App Design', 'Landing Page', 'Responsive Design', 'Accessibility Thinking'];
const pillars = ['Cognitive Ease', 'Emotional Calm', 'Focus Support'];
const features = ['Reduced cognitive load', 'Calm visual hierarchy', 'Motivational micro-copy', 'Accessible color system'];
const swatches = ['#c9b8e8', '#f5c8d8', '#b8c8f0', '#e8a0bf', '#7b3fa0'];
const stats = [
  { label: 'Focus clarity', val: '92%', pct: 92 },
  { label: 'Accessibility', val: '88%', pct: 88 },
  { label: 'Visual calm', val: '95%', pct: 95 },
];

export default function WorkdhdSection({
  sectionNumber = '01',
  onCaseStudyClick,
  caseStudyHref,
}: WorkdhdSectionProps) {
  const CTAEl = caseStudyHref ? 'a' : 'button';
  const ctaProps = caseStudyHref
    ? { href: caseStudyHref }
    : { onClick: onCaseStudyClick, type: 'button' as const };

  return (
    <>
      <style>{styles}</style>

      <section className="wd-section" data-project-card>
        <div className="wd-meta" data-project-text>
          <div className="wd-num">{sectionNumber}</div>
          <div className="wd-info">
            <div className="wd-tag">UI/UX Design &amp; Product Experience</div>
            <h2 className="wd-title">Workdhd -<br />Workspace App</h2>
            <p className="wd-desc">
              A calm, ADHD-friendly productivity app designed to reduce cognitive load.
              Spans a web landing page and mobile interface - built for focus, clarity,
              and emotional ease.
            </p>
            <div className="wd-tags">
              {skills.map((s) => <span key={s} className="wd-skill">{s}</span>)}
            </div>
            <CTAEl className="wd-cta" {...ctaProps}>
              View Case Study <ArrowIcon />
            </CTAEl>
          </div>
        </div>

        <div className="wd-grid" data-project-image>
          <div className="wd-panel wd-p1">
            <div>
              <div className="wd-ptitle" style={{ fontSize: 20 }}>Workdhd<br />Workspace App</div>
              <div className="wd-plabel">Modern web landing page &amp; mobile interface</div>
            </div>

            <div className="wd-hero-preview">
              <div className="wd-blob1" />
              <div className="wd-blob2" />
              <div className="wd-hero-nav">
                <div className="wd-hero-logo">Workdhd</div>
                <div className="wd-hero-links">
                  {['Home', 'About', 'Features'].map((l) => <span key={l} className="wd-hero-link">{l}</span>)}
                </div>
                <div className="wd-hero-signup">SIGN UP</div>
              </div>
              <div className="wd-hero-body">
                <div className="wd-hero-headline">Get ready to revolutionize your work flow!!</div>
                <div className="wd-hero-pill">DOWNLOAD NOW</div>
              </div>
              <div style={{ position: 'absolute', right: 14, bottom: 10, fontSize: 9, color: '#7b3fa0', fontWeight: 500, textAlign: 'right', lineHeight: 1.4 }}>
                Enjoy a stress free<br />workspace, everyday.
              </div>
            </div>

            <div>
              <div className="wd-plabel">Design direction</div>
              <div className="wd-pillars">
                {pillars.map((p) => <div key={p} className="wd-pillar">{p}</div>)}
              </div>
            </div>
          </div>

          <div className="wd-panel wd-p2">
            <div className="wd-ptitle">Mobile<br />App Interface</div>
            <div className="wd-phone-frame">
              <div className="wd-phone-notch"><div className="wd-phone-dot" /></div>
              <div className="wd-phone-screen">
                <div className="wd-phone-wt">Welcome to<br />Workdhd</div>
                <div className="wd-phone-sub">Your brain is your power,<br />not your curse ♡</div>
                <div className="wd-phone-input">Email Address</div>
                <div className="wd-phone-input">Password</div>
                <div className="wd-phone-btn">Login</div>
              </div>
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="wd-plabel">Responsive design</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#333' }}>ADHD-focused workflow tool</div>
            </div>
          </div>

          <div className="wd-panel wd-p3">
            <div className="wd-ptitle">Design<br />Principles</div>
            <div className="wd-feature-list">
              {features.map((f) => <div key={f} className="wd-feat">{f}</div>)}
            </div>
          </div>

          <div className="wd-panel wd-p4">
            <div className="wd-ptitle">Brand Palette</div>
            <div className="wd-plabel">Pastel-forward, emotionally soft</div>
            <div className="wd-palette">
              {swatches.map((c) => <div key={c} className="wd-swatch" style={{ background: c }} />)}
            </div>
            <div style={{ marginTop: 10 }}>
              <div className="wd-plabel">Typography</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#7b3fa0', fontStyle: 'italic' }}>Rounded + italic display</div>
              <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>Warm, approachable, playful</div>
            </div>
          </div>

          <div className="wd-panel wd-p5">
            <div className="wd-ptitle">Design Goals</div>
            <div className="wd-stat-row">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="wd-stat">
                    <span className="wd-stat-label">{s.label}</span>
                    <span className="wd-stat-val">{s.val}</span>
                  </div>
                  <div className="wd-bar-bg">
                    <div className="wd-bar-fill" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
