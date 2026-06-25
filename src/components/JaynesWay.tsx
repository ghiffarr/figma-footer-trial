import founderImage from '../assets/jaynes-founder.jpg';
import redChevrons from '../assets/red-chevrons.svg';

const BODY_INTRO = [
  'Eighty years is more than a milestone. It’s a testament to the resilience and',
  'craftsmanship of generations of Jaynes employees. It’s also a testament to the',
  'Jaynes community in the Southwest. Since 1946, Jaynes has built more than',
  'structures; we’ve built schools where futures begin, hospitals where healing',
  'takes place, and workplaces that drive innovation. Most meaningfully, Jaynes',
  'has built lasting relationships with owners, communities, and each other. This',
  'defines the Jaynes Way.',
];

const BODY_PARAGRAPHS = [
  'From humble beginnings as a small concrete company, Jaynes has grown into one of the Southwest’s largest employee-owned companies. This evolution reflects the enduring principle underlying The Jaynes Way – that people achieve more together.',
  'This philosophy shapes our culture, drives collaboration, and ensures the success of every project, from complex healthcare facilities to historic restorations. As the Southwest grows, so does Jaynes. We embrace new technologies, expand into new markets, and invest in the next generation of builders, all while remaining grounded in the relationships, integrity, and pride that have defined us for eight decades.',
];

function RedChevrons() {
  return (
    <img
      className="jaynes-way-chevrons"
      src={redChevrons}
      alt=""
      aria-hidden="true"
    />
  );
}

export default function JaynesWay() {
  return (
    <section className="jaynes-way" aria-labelledby="jaynes-way-heading">
      <div className="jaynes-way-inner">
        <h2 id="jaynes-way-heading" className="jaynes-way-heading">
          <span>Celebrating</span>
          <span className="jaynes-way-heading-accent"> 80 years </span>
          <span>of the Jaynes Way</span>
        </h2>

        <div className="jaynes-way-content">
          <div className="jaynes-way-portrait-wrap">
            <RedChevrons />
            <div className="jaynes-way-portrait">
            <img
  className="jaynes-way-portrait-img"
  src={founderImage}
  alt="George T. Jaynes"
/>
            </div>
          </div>

          <div className="jaynes-way-copy">
            <div className="jaynes-way-intro">
              {BODY_INTRO.map((line) => (
                <p key={line.slice(0, 20)}>{line}</p>
              ))}
            </div>

            <p className="jaynes-way-lead">
              The Jaynes Way guides every project we undertake.
            </p>

            <div className="jaynes-way-body">
              {BODY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .jaynes-way {
  background: #fff;
  margin-top: -48px;
  padding-top: 96px;
}

        .jaynes-way-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 20px 64px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .jaynes-way-heading {
          margin: 0;
          font-family: "CCRegeneration", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 36px;
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          color: #231f20;
          max-width: 780px;
        }

        .jaynes-way-heading-accent {
          color: #ce2027;
        }

        .jaynes-way-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .jaynes-way-portrait-wrap {
          position: relative;
          width: 100%;
          max-width: 314px;
        }

 .jaynes-way-chevrons {
  position: absolute;
  left: -120px;
  bottom: -170px;
  width: 190px;
  height: auto;
  pointer-events: none;
  z-index: 0;
}

        .jaynes-way-portrait {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 314px;
          aspect-ratio: 314 / 369;
          overflow: hidden;
        }

        .jaynes-way-portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

        .jaynes-way-copy {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 716px;
        }

        .jaynes-way-intro p {
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.36px;
          color: #4f4c4d;
        }

        .jaynes-way-lead {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          color: #231f20;
        }

        .jaynes-way-body {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .jaynes-way-body p {
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.36px;
          color: #4f4c4d;
        }

        @media (min-width: 768px) {
          .jaynes-way {
            margin-top: -72px;
            padding-top: 72px;
          }

          .jaynes-way-inner {
            padding: 48px 40px 80px;
          }

          .jaynes-way-heading {
            font-size: 48px;
          }

          .jaynes-way-intro p,
          .jaynes-way-body p {
            font-size: 18px;
          }

          .jaynes-way-lead {
            font-size: 20px;
          }
        }

        @media (min-width: 1024px) {
  .jaynes-way {
    margin-top: -100px;
    padding-top: 160px;
  }

          .jaynes-way-inner {
            padding: 0 100px 100px;
            gap: 40px;
          }

          .jaynes-way-heading {
            font-size: 64px;
          }

          .jaynes-way-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 48px;
          }

          .jaynes-way-portrait-wrap {
            flex-shrink: 0;
          }

          .jaynes-way-copy {
            flex: 1;
            min-width: 0;
            max-width: 716px;
          }

          .jaynes-way-lead {
            font-size: 22px;
          }

          .jaynes-way-body {
            max-width: 609px;
          }
        }
      `}</style>
    </section>
  );
}
