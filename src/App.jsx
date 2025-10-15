import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useGSAP } from '@gsap/react';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap';

import Wand from './assets/img/wand.svg?react';

import Loading from './components/Loading';
import Modal from './components/Modal';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './Routes';

import './styles/index.css';

const queryClient = new QueryClient();
gsap.registerPlugin(useGSAP, DrawSVGPlugin);

function App() {
  const ref = useRef(null);

  useGSAP(() => {
    const showAnimation = sessionStorage.getItem('hide-animation') !== 'true';
    if (showAnimation) {
      const tl = gsap.timeline();
      tl.to('.intro', { display: 'grid', alignItems: 'center' });
      tl.from('.wand', { duration: 1.2, drawSVG: 0 });
      tl.from('.stars', { duration: 1, drawSVG: 0 });
      tl.from('#wand', { rotate: 10, repeat: 3, duration: 0.6, yoyo: true });
      tl.to('.intro', { height: 0, opacity: 0 });

      sessionStorage.setItem('hide-animation', 'true');
    }
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
        <Wand />
      </div>
    </div>
  );
}

export default App;
