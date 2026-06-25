import jaynesLogo from '../assets/jaynes-logo.png';

const NAV_LINKS = [
  { label: 'Projects', hasDropdown: false },
  { label: 'Why Choose Us', hasDropdown: true },
  { label: 'Company', hasDropdown: false },
  { label: 'Locations', hasDropdown: true },
  { label: 'Careers', hasDropdown: false },
  { label: 'Resources', hasDropdown: true },
] as const;

function PlusIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 3v10M3 8h10"
        stroke={light ? '#fff' : '#0f0d0d'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-header-left">
          <a href="#" className="site-header-logo" aria-label="Jaynes home">
            <img src={jaynesLogo} alt="Jaynes" width={62} height={56} />
          </a>

          <nav className="site-header-nav" aria-label="Main navigation">
            <ul className="site-header-nav-list">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href="#" className="site-header-nav-link">
                    <span>{link.label}</span>
                    {link.hasDropdown && <PlusIcon />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a href="#" className="site-header-cta">
          <span>Contact Us</span>
          <PlusIcon light />
        </a>

        <button
          type="button"
          className="site-header-menu-btn"
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .site-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
          background: #fff;
        }

        .site-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          max-width: 1440px;
          margin: 0 auto;
          padding: 12px 20px;
        }

        .site-header-left {
          display: flex;
          align-items: center;
          gap: 40px;
          min-width: 0;
        }

        .site-header-logo {
          display: block;
          flex-shrink: 0;
          line-height: 0;
        }

        .site-header-logo img {
          display: block;
          width: 62px;
          height: auto;
        }

        .site-header-nav {
          display: none;
        }

        .site-header-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .site-header-nav-link {
          display: flex;
          align-items: center;
          gap: 2px;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.32px;
          color: #0f0d0d;
          text-decoration: none;
          white-space: nowrap;
        }

        .site-header-nav-link:hover {
          color: #bb1d23;
        }

        .site-header-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: #bb1d23;
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.32px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .site-header-cta:hover {
          background: #a31a1f;
        }

        .site-header-menu-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .site-header-menu-btn span {
          display: block;
          height: 2px;
          width: 100%;
          background: #0f0d0d;
        }

        @media (min-width: 1024px) {
          .site-header-inner {
            padding: 12px 100px;
          }

          .site-header-nav {
            display: block;
          }

          .site-header-menu-btn {
            display: none;
          }

          .site-header-cta {
            gap: 80px;
          }
        }
      `}</style>
    </header>
  );
}
