import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './style.css';

function Menu({ ref }) {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.borderBoxSize) {
        const height = entry.borderBoxSize[0].blockSize;
        setTopPosition(height);
      }
    });

    if (ref?.current) resizeObserver.observe(ref.current);

    return () => {
      if (ref?.current) resizeObserver.unobserve(ref.current);
    };
  }, [ref]);

  return (
    <nav className="menu" data-top={topPosition} tabIndex={-1}>
      <ul>
        <li className="title">
          <a href="https://www.wizardingworld.com/" target="_blank" rel="noreferrer">
            <span className="text">Hogwarts</span>
            <FaAngleDoubleRight className="icon arrow" />
          </a>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <AiFillHome className="icon" />
            <span className="text">home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/champions" activeClassName="active">
            <GiTrophyCup className="icon" />
            <span className="text">champions</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/members" activeClassName="active">
            <GiCrystalWand className="icon" />
            <span className="text">members</span>
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/laianesuzart/" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
            <span className="text">github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
