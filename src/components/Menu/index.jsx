import { Component } from "react";
import { AiFillHome } from 'react-icons/ai';
import { GiTrophyCup, GiCrystalWand } from 'react-icons/gi';

import './style.scss';

class Menu extends Component {
    render() {
        const { option } = this.props;
        return(
            <nav>
                <ul>
                    <li>
                        <button><AiFillHome className="icon"/><span className="text">Home</span></button>
                    </li>
                    <li>
                        <button onClick={() => option('http://hp-api.herokuapp.com/api/characters/students')}><GiTrophyCup className="icon"/><span className="text">Select Champions</span></button>
                    </li>
                    <li>
                        <button><GiCrystalWand className="icon"/><span className="text">All Characters</span></button>
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