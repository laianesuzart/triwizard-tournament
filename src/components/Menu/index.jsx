import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './style.css';

function Menu() {
  const [topPosition, setTopPosition] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const header = document.querySelector('header');
    setTopPosition(header.getBoundingClientRect().height);

    window.addEventListener(
      'resize',
      () => {
        setTopPosition(header.getBoundingClientRect().height);
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, []);

  return (
    <nav className="menu" data-top={topPosition}>
      <ul>
        <li className="title">
          <a href="https://www.wizardingworld.com/" target="_blank" rel="noreferrer">
            <span className="text">Hogwarts</span>
            <FaAngleDoubleRight className="icon arrow" />
          </a>
        </li>
        <li>
          <Link to="/">
            <AiFillHome className="icon" />
            <span className="text">home</span>
          </Link>
        </li>
        <li>
          <Link to="/champions">
            <GiTrophyCup className="icon" />
            <span className="text">champions</span>
          </Link>
        </li>
        <li>
          <Link to="/members">
            <GiCrystalWand className="icon" />
            <span className="text">members</span>
          </Link>
        </li>
        <li>
          <a href="https:/github.com/laianesuzart/" target="_blank" rel="noreferrer">
            <AiFillGithub className="icon" />
            <span className="text">github</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
