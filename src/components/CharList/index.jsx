import BasicCard from "../BasicCard";
import Gryffindor from '../../assets/img/gryffindor.png';
import Slytherin from '../../assets/img/slytherin.png';
import Hufflepuff from '../../assets/img/hufflepuff.png';
import Ravenclaw from '../../assets/img/ravenclaw.png';

import './style.scss';

function CharList({ list, url, updateUrl }) {

    const showChar = (arr) => {
        return arr.map((char, index) => <BasicCard char={char} key={index}/>);
    }

    return(
        <div className="membersContainer">
            <nav className="filterMenu">
                <button onClick={() => updateUrl(`${url}`)}>all</button>
                <button onClick={() => updateUrl(`${url}/staff`)}>staff</button>
                <button onClick={() => updateUrl(`${url}/students`)}>students</button>
                <button onClick={() => updateUrl(`${url}/house/gryffindor`)}>
                    <img src={Gryffindor} alt="Gryffindor"/>
                </button>
                <button onClick={() => updateUrl(`${url}/house/slytherin`)}>
                    <img src={Slytherin} alt="Slytherin"/>
                </button>
                <button onClick={() => updateUrl(`${url}/house/hufflepuff`)}>
                    <img src={Hufflepuff} alt="Hufflepuff"/>
                </button>
                <button onClick={() => updateUrl(`${url}/house/ravenclaw`)}>
                    <img src={Ravenclaw} alt="Ravenclaw"/>
                </button>
            </nav>
            <div className="charContainer">
                {showChar(list)}
            </div>
        </div>
    );
}

export default CharList;