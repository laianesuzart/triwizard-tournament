import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import { RiLoaderLine } from 'react-icons/ri';
import gsap from 'gsap';

import { useLoading } from '../../store';
import './styles.css';

function Loading() {
  const ref = useRef(null);
  const loading = useLoading((state) => state.loading);

  return (
    <Transition
      nodeRef={ref}
      in={loading}
      unmountOnExit
      timeout={300}
      onEnter={() => {
        gsap.to('.loading__icon', { scale: 0.8, rotate: 120, repeat: -1, yoyo: true });
      }}
      onExiting={() => {
        gsap.to('.loading__icon', { scale: 0, rotate: 0 });
        gsap.to('.loading', { delay: 0.1, autoAlpha: 0 });
      }}
    >
      <div className="loading" ref={ref}>
        <RiLoaderLine className="loading__icon" />
      </div>
    </Transition>
  );
}

export default Loading;
