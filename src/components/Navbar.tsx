import { useEffect, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  links?: NavLink[];
  contactHref?: string;
  activePath?: string;
}

const styles = `
  .kz-nav-outer {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 1000;
    background: #0d1b2a;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    transition: background 280ms ease, backdrop-filter 280ms ease, border-color 280ms ease;
  }

  .kz-nav-outer.kz-scrolled {
    background: rgba(6, 21, 36, 0.84);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(188, 155, 106, 0.28);
  }

  .kz-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 14px 40px;
    font-family: 'DM Sans', sans-serif;
    gap: 16px;
  }

  .kz-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .kz-logo-box {
    width: 34px; height: 34px;
    background: #f5c518;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.15s;
  }

  .kz-logo:hover .kz-logo-box { background: #ffd740; }

  .kz-logo-text {
    font-size: 15px;
    font-weight: 600;
    color: #f0ece3;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .kz-links {
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 50px;
    padding: 5px 8px;
    gap: 2px;
  }

  .kz-link {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.55);
    padding: 6px 16px;
    border-radius: 50px;
    text-decoration: none;
    transition: color 0.2s, background 0.2s, transform 0.2s;
    white-space: nowrap;
    font-family: 'DM Sans', sans-serif;
  }

  .kz-link:hover { color: #fff; background: rgba(255,255,255,0.08); transform: translateY(-1px); }
  .kz-link.kz-active { color: #fff; background: rgba(255,255,255,0.12); }

  .kz-cta {
    background: #f5c518;
    color: #0d1b2a;
    font-size: 13px;
    font-weight: 600;
    padding: 8px 22px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .kz-cta:hover { background: #ffd740; box-shadow: 0 10px 24px rgba(253, 181, 21, 0.3); }
  .kz-cta:active { transform: scale(0.97); }

  .kz-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
  }

  .kz-hamburger span {
    display: block;
    width: 22px; height: 2px;
    background: rgba(255,255,255,0.7);
    border-radius: 2px;
  }

  .kz-mobile-menu {
    display: none;
    flex-direction: column;
    background: #0d1b2a;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 12px 24px 20px;
    gap: 4px;
  }

  .kz-mobile-menu.kz-open { display: flex; }

  .kz-mobile-link {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255,255,255,0.65);
    padding: 10px 12px;
    border-radius: 10px;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    transition: background 0.15s, color 0.15s;
  }

  .kz-mobile-link:hover { background: rgba(255,255,255,0.06); color: #fff; }

  .kz-mobile-cta {
    margin-top: 8px;
    background: #f5c518;
    color: #0d1b2a;
    font-size: 14px;
    font-weight: 600;
    padding: 11px;
    border-radius: 50px;
    text-align: center;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
  }

  @media (max-width: 768px) {
    .kz-nav { padding: 12px 20px; }
    .kz-links { display: none; }
    .kz-cta { display: none; }
    .kz-hamburger { display: flex; }
  }

  .kz-spacer { height: 64px; }
`;

const LogoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#0d1b2a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l4 4 6-7" />
  </svg>
);

const defaultLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Service', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({
  logo = 'Khadija Zubair',
  links = defaultLinks,
  contactHref = '#contact',
  activePath = '',
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className={`kz-nav-outer${scrolled ? ' kz-scrolled' : ''}`}>
        <nav className="kz-nav">
          <a className="kz-logo" href="#home">
            <div className="kz-logo-box"><LogoIcon /></div>
            <span className="kz-logo-text">{logo}</span>
          </a>
          <div className="kz-links">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className={'kz-link' + (activePath === href ? ' kz-active' : '')}>
                {label}
              </a>
            ))}
          </div>
          <a href={contactHref} className="kz-cta">Contact Me</a>
          <button className="kz-hamburger" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} type="button">
            <span /><span /><span />
          </button>
        </nav>
        <div className={'kz-mobile-menu' + (open ? ' kz-open' : '')}>
          {links.map(({ label, href }) => (
            <a key={label} href={href} className="kz-mobile-link" onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href={contactHref} className="kz-mobile-cta" onClick={() => setOpen(false)}>Contact Me</a>
        </div>
      </div>
      <div className="kz-spacer" />
    </>
  );
}
