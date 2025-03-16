import { useRef } from 'react';
import { BiErrorAlt } from 'react-icons/bi';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';

import { useModal } from '../../store';
import './styles.css';

const DefaultIcon = <BiErrorAlt />;

function Modal() {
  const ref = useRef(null);

  const open = useModal((state) => state.open);
  const closeModal = useModal((state) => state.closeModal);
  const { title, description, icon: Icon } = useModal((state) => state.config);

  return (
    <Transition
      nodeRef={ref}
      in={open}
      unmountOnExit
      addEndListener={(done) => {
        gsap.context(() => {
          if (open) {
            gsap.set('.modal__content', { y: -50 });
            gsap
              .timeline({ onComplete: done })
              .to('.modal', { autoAlpha: 0.65, duration: 0.1 })
              .to('.modal__content', { autoAlpha: 1, y: 0, duration: 0.25 }, 0);
          } else {
            gsap
              .timeline({ onComplete: done })
              .to('.modal__content', { autoAlpha: 0, y: -50, duration: 0.25 })
              .to('.modal', { autoAlpha: 0, duration: 0.1 }, '>-=0.1');
          }
        }, ref);
      }}
    >
      <div className="modal" ref={ref}>
        <div role="dialog" className="modal__content">
          <h3>
            {Icon ?? DefaultIcon}
            <span>{title}</span>
          </h3>
          <p>{description}</p>
          <div className="modal__buttons">
            <button onClick={closeModal}>close</button>
            <button
              onClick={() => {
                location.reload();
              }}
            >
              retry
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Modal;
