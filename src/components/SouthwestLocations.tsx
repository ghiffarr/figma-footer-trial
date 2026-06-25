import { useState } from 'react';
import mapAlbuquerque from '../assets/map-albuquerque.svg';
import mapDurango from '../assets/map-durango.svg';
import mapAztec from '../assets/map-aztec.svg';
import mapLasCruces from '../assets/map-las-cruces.svg';
import mapElPaso from '../assets/map-el-paso.svg';

type City = 'Albuquerque' | 'Durango' | 'Aztec' | 'Las Cruces' | 'El Paso';

const CITIES: City[] = ['Albuquerque', 'Durango', 'Aztec', 'Las Cruces', 'El Paso'];

const CITY_MAP: Record<City, string> = {
  Albuquerque: mapAlbuquerque,
  Durango: mapDurango,
  Aztec: mapAztec,
  'Las Cruces': mapLasCruces,
  'El Paso': mapElPaso,
};

const INTRO_TEXT = [
  'Eighty years is more than a milestone. It’s a testament to the resilience and craftsmanship of generations of Jaynes employees. It’s also a testament to the Jaynes community in the Southwest. Since 1946, Jaynes has built more than structures; we’ve built schools where futures begin, hospitals where healing take place, and workplaces that drive innovation.',
  'Most meaningfully, Jaynes has built lasting relationships with owners, communities, and each other. This defines the Jaynes Way.',
];

const CONTACT = {
  address: ['2906 Broadway NE', 'Albuquerque, NM 87107'],
  phone: '505.345.8591',
  fax: '505.345.8598',
  hrFax: '505.998.0713 / 505.908.3212',
};

function MapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
        fill="#bb1d23"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.22z"
        fill="#bb1d23"
      />
    </svg>
  );
}

function PrinterIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 8H5a3 3 0 0 0-3 3v5h4v4h12v-4h4v-5a3 3 0 0 0-3-3zm-2 10H7v-5h10v5zm2-10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-1-5H6v4h12V3z"
        fill="#bb1d23"
      />
    </svg>
  );
}

function SouthwestMap({ city }: { city: City }) {
  return (
    <div className="southwest-map">
      <img
        src={CITY_MAP[city]}
        alt={`${city} office location map`}
        width={679}
        height={424}
        className="southwest-map-img"
      />
    </div>
  );
}

export default function SouthwestLocations() {
  const [activeCity, setActiveCity] = useState<City>('Albuquerque');

  return (
    <section className="southwest" aria-label="Jaynes Southwest locations">
      <div className="southwest-inner">
        <div className="southwest-layout">
          <div className="southwest-left">
            <div className="southwest-intro">
              {INTRO_TEXT.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <hr className="southwest-intro-divider" />

            <div className="southwest-contact-panel">
              <div className="southwest-contact-block">
                <div className="southwest-contact-rows">
                  <div className="southwest-contact-row">
                    <MapIcon />
                    <div>
                      <p>{CONTACT.address[0]}</p>
                      <p>{CONTACT.address[1]}</p>
                    </div>
                  </div>
                  <div className="southwest-contact-row">
                    <PhoneIcon />
                    <p>{CONTACT.phone}</p>
                  </div>
                  <div className="southwest-contact-row">
                    <PrinterIcon />
                    <p>{CONTACT.fax}</p>
                  </div>
                </div>

                <hr className="southwest-contact-divider" />

                <div className="southwest-hr-fax">
                  <p className="southwest-hr-fax-label">HR FAX</p>
                  <div className="southwest-contact-row">
                    <PrinterIcon />
                    <p>{CONTACT.hrFax}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="southwest-right">
            <div className="southwest-tabs" role="tablist" aria-label="Office locations">
              {CITIES.map((city) => {
                const isActive = city === activeCity;
                return (
                  <button
                    key={city}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`southwest-tab${isActive ? ' southwest-tab--active' : ''}`}
                    onClick={() => setActiveCity(city)}
                  >
                    {city}
                  </button>
                );
              })}
            </div>

            <div className="southwest-map-wrap" role="tabpanel" aria-label={`${activeCity} map`}>
              <SouthwestMap city={activeCity} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .southwest {
          width: 100%;
          background: #fff;
        }

        .southwest-inner {
          max-width: 1240px;
          margin: 0 auto;
        }

        .southwest-layout {
          display: flex;
          flex-direction: column;
        }

        .southwest-left {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .southwest-intro {
          background: #bb1d23;
          color: #fff;
          padding: 24px 20px;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.32px;
        }

        .southwest-intro p {
          margin: 0;
        }

        .southwest-intro p + p {
          margin-top: 0;
        }

        .southwest-intro-divider {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin: 0;
          width: 100%;
        }

        .southwest-contact-panel {
          background: #bb1d23;
        }

        .southwest-contact-block {
          background: #fff;
          border-left: 1px solid #bbbaba;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .southwest-contact-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .southwest-contact-row {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.32px;
          color: #231f20;
        }

        .southwest-contact-row p {
          margin: 0;
        }

        .southwest-contact-row svg {
          flex-shrink: 0;
        }

        .southwest-contact-divider {
          border: none;
          border-top: 1px solid #bbbaba;
          margin: 0;
          width: 100%;
        }

        .southwest-hr-fax {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .southwest-hr-fax-label {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          letter-spacing: -0.36px;
          color: #231f20;
        }

        .southwest-right {
          background: #f3f4f6;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px;
          min-height: 320px;
        }

        .southwest-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .southwest-tab {
          flex: 1 1 calc(50% - 4px);
          min-width: 140px;
          max-width: 100%;
          padding: 8px 0;
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          background: transparent;
          font-family: inherit;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.4px;
          color: #4f4c4d;
          text-align: left;
          cursor: pointer;
          position: relative;
        }

        .southwest-tab--active {
          font-weight: 500;
          color: #231f20;
        }

        .southwest-tab--active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #ce2027;
        }

        .southwest-tab:focus-visible {
          outline: 2px solid #bb1d23;
          outline-offset: 2px;
        }

        .southwest-map-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 240px;
        }

        .southwest-map {
          width: 100%;
          max-width: 679px;
        }

        .southwest-map-img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (min-width: 768px) {
          .southwest-intro {
            padding: 32px;
            font-size: 18px;
            letter-spacing: -0.36px;
          }

          .southwest-contact-block {
            padding: 32px;
          }

          .southwest-right {
            padding: 24px;
            min-height: 480px;
          }

          .southwest-tab {
            flex: 0 0 calc(33.333% - 6px);
            font-size: 22px;
            letter-spacing: -0.44px;
          }
        }

        @media (min-width: 1024px) {
          .southwest-layout {
            flex-direction: row;
            align-items: stretch;
          }

          .southwest-left {
            width: 441px;
            flex-shrink: 0;
          }

          .southwest-right {
            flex: 1;
            min-width: 0;
            justify-content: space-between;
          }

          .southwest-tab {
            flex: 0 0 245px;
            font-size: 24px;
            letter-spacing: -0.48px;
          }

          .southwest-map-wrap {
            min-height: 424px;
          }
        }
      `}</style>
    </section>
  );
}
