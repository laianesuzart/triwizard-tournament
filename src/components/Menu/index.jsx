import { Link } from 'react-router-dom';
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './style.scss';

function Menu() {
    return(
        <nav className="menu">
            <ul>
                <li className="title">
                    <a href="https://www.wizardingworld.com/" target="_blank" rel="noreferrer">
                        <span className="text">Hogwarts</span><FaAngleDoubleRight className="icon arrow"/>
                    </a>
                </li>
                <li>
                    <Link to="/">
                        <AiFillHome className="icon"/><span className="text">home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/champions">
                        <GiTrophyCup className="icon"/><span className="text">champions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/members">
                        <GiCrystalWand className="icon"/><span className="text">members</span>
                    </Link>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/laianesuzart/" target="_blank" rel="noreferrer">
                        <AiFillLinkedin className="icon"/><span className="text">azulazi</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;