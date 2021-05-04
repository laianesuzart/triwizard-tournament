import { Component } from "react";
import { AiFillHome, AiFillLinkedin } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';
import { FaAngleDoubleRight } from 'react-icons/fa';

import './style.scss';

class Menu extends Component {
    render() {
        const { option } = this.props;
        return(
            <nav>
                <ul>
                    <li className="title">
                        <button>
                            <span className="text">Hogwarts</span><FaAngleDoubleRight className="icon arrow"/>
                        </button>
                    </li>
                    <li>
                        <button><AiFillHome className="icon"/><span className="text">home</span></button>
                    </li>
                    <li>
                        <button onClick={() => option('http://hp-api.herokuapp.com/api/characters/students')}><GiTrophyCup className="icon"/><span className="text">champions</span></button>
                    </li>
                    <li>
                        <button><GiCrystalWand className="icon"/><span className="text">members</span></button>
                    </li>
                    <li>
                        <button><AiFillLinkedin className="icon"/><span className="text">azulazi</span></button>
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