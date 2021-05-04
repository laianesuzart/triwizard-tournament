import { Component } from "react";
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './style.scss';

class Menu extends Component {
    render() {
        return(
            <nav>
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
                    {/* <li>
                        <button>Students</button>
                    </li>
                    <li>
                        <button>Staff</button>
                    </li>
                    <li>
                        <button>Gryffindor</button>
                    </li>
                    <li>
                        <button>Slytherin</button>
                    </li>
                    <li>
                        <button>Hufflepuff</button>
                    </li>
                    <li>
                        <button>Ravenclaw</button>
                    </li> */}
                </ul>
            </nav>
        );
    }
}

export default Menu