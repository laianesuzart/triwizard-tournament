import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Wizard from '../../assets/img/wizard.svg?react';
import Wand from '../../assets/img/wand.svg?react';
import './style.css';

gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(() => {
    gsap.fromTo(
      '#wand',
      { scale: 0, y: 120, x: -40, transformOrigin: 'bottom left' },
      { scale: 1, duration: 1 }
    );
    gsap.from('#wand', { rotate: 10, repeat: 4, duration: 0.6, yoyo: true });
    gsap.to('#wand', { scale: 0, delay: 3.2 });
    gsap.fromTo(
      '#wizard',
      { x: '100vw', y: '50vh' },
      { x: '-100vw', y: '-40vh', duration: 5, delay: 2.2 }
    );
    gsap.to('.intro', { scaleX: 0, transformOrigin: 'left', delay: 4.8 });
  });

  return (
    <>
      <main className="container">
        <div className="card" tabIndex={-1}>
          <div className="card__wrapper">
            <img src="/trophy.jpg" className="card__cover" alt="" />
          </div>
          <Link to="/champions" className="card__link">
            Join the Tournament
          </Link>
          <img src="/mashle.webp" className="card__character" alt="" />
        </div>
      </main>
      <div className="intro" aria-hidden="true">
        <Wand id="wand" fill="gold" />
        <Wizard id="wizard" fill="#bebebe" />
      </div>
    </>
  );
}

export default Home;
