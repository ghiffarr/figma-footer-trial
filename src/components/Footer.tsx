import jaynesLogo from '../assets/jaynes-logo.png'

const footerNav = {
  projects: [
    'Concrete',
    'Commercial',
    'Education',
    'Federal',
    'Healthcare',
    'Historic',
    'Hospitality',
    'Industrial',
    'Millwork',
    'Multi-family',
    'Municipal',
    'Recreation',
    'Tribal',
    'All Projects',
  ],
  advantages: ['Safety', 'Quality', 'Specialized Teams', 'PreConstruction'],
  people: ['Our Story', 'Leadership', 'Awards', 'Careers', 'Veterans', 'Employee Owned'],
  resources: ['Jaynes News', 'LinkedIn', 'Facebook', 'Instagram'],
  contact: ['Albuquerque', 'Durango', 'Aztec', 'Las Cruces', 'El Paso'],
} as const;

function NavColumn({
  title,
  links,
  hideTitle = false,
}: {
  title: string;
  links: readonly string[];
  hideTitle?: boolean;
}) {
  return (
    <div className="footer-nav-column">
      <p className={`footer-nav-title${hideTitle ? ' footer-nav-title--hidden' : ''}`}>{title}</p>
      <ul className="footer-nav-list">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SubscribeArrow() {
  return (
    <svg
      className="footer-subscribe-arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-newsletter">
          <h2 className="footer-heading">Stay Connected with Jaynes Corporation</h2>
          <div className="footer-newsletter-form-wrap">
            <p className="footer-newsletter-text">
              Stay informed about our projects, partnerships, and company milestones.
            </p>
            <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <label className="footer-email-field">
                <input
                  type="email"
                  className="footer-email-input"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </label>
              <button type="submit" className="footer-subscribe-btn">
                <span>Subscribe</span>
                <SubscribeArrow />
              </button>
            </form>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-main">
          <div className="footer-logo">
            <img
              src={jaynesLogo}
              alt="Jaynes Corporation"
              width={221}
              height={200}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="footer-nav">
            <div className="footer-nav-desktop">
              <NavColumn title="Projects" links={footerNav.projects} />
              <NavColumn title="Advantages" links={footerNav.advantages} />
              <NavColumn title="People" links={footerNav.people} />
              <NavColumn title="Resources" links={footerNav.resources} />
              <NavColumn title="Contact" links={footerNav.contact} />
            </div>

            <div className="footer-nav-tablet">
              <div className="footer-nav-tablet-row footer-nav-tablet-row--three">
                <NavColumn title="Projects" links={footerNav.projects} />
                <NavColumn title="Advantages" links={footerNav.advantages} />
                <NavColumn title="People" links={footerNav.people} />
              </div>
              <div className="footer-nav-tablet-row footer-nav-tablet-row--two">
                <NavColumn title="Resources" links={footerNav.resources} />
                <NavColumn title="Contact" links={footerNav.contact} />
              </div>
            </div>

            <div className="footer-nav-mobile">
              <div className="footer-nav-mobile-row">
                <NavColumn
                  title="Projects"
                  links={footerNav.projects.slice(0, 7)}
                />
                <NavColumn
                  title="Projects"
                  links={footerNav.projects.slice(7)}
                  hideTitle
                />
              </div>
              <div className="footer-nav-mobile-row">
                <NavColumn title="Advantages" links={footerNav.advantages} />
                <NavColumn title="People" links={footerNav.people} />
              </div>
              <div className="footer-nav-mobile-row">
                <NavColumn title="Resources" links={footerNav.resources} />
                <NavColumn title="Contact" links={footerNav.contact} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-credits">
          <p>© 2026 Jaynes Corporation. All rights reserved.</p>
          <div className="footer-credits-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
