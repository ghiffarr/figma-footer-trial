import heroImage from '../assets/hero-image.jpg';


export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <img
        className="hero-image"
        src={heroImage}
        alt="Construction workers at a building site"
      />

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 420px;
          height: 55vh;
          max-height: 600px;
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (min-width: 768px) {
          .hero {
            min-height: 560px;
            height: 70vh;
            max-height: 800px;
          }
        }

        @media (min-width: 1024px) {
          .hero {
            min-height: 720px;
            height: 955px;
            max-height: none;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
          }
        }
      `}</style>
    </section>
  );
}
