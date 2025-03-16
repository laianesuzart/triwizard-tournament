import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import Wizard from './assets/img/wizard.svg?react';
import Wand from './assets/img/wand.svg?react';

import Loading from './components/Loading';
import Modal from './components/Modal';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './Routes';

import './styles/index.css';

const queryClient = new QueryClient();
gsap.registerPlugin(useGSAP);

function App() {
  const ref = useRef(null);

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
    <div className="full-container">
      <Loading />
      <Modal />
      <Header ref={ref} />
      <Menu ref={ref} />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
      <div className="intro" aria-hidden="true">
        <Wand id="wand" fill="gold" />
        <Wizard id="wizard" fill="#bebebe" />
      </div>
    </div>
  );
}

export default App;
