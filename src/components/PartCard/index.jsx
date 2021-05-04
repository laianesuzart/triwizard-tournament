import { Component } from 'react';

import Gryffindor from '../../assets/img/gryffindor.png';
import Slytherin from '../../assets/img/slytherin.png';
import Hufflepuff from '../../assets/img/hufflepuff.png';
import Ravenclaw from '../../assets/img/ravenclaw.png';

import './style.scss';

class PartCard extends Component {
    render() {
        const { house, image, name } = this.props.char;
        const colors = {
            Gryffindor: '#740001',
            Slytherin: '#1A472A',
            Hufflepuff: '#FFD800',
            Ravenclaw: '#0E1A40'
        };
        const crests = {
            Gryffindor: Gryffindor,
            Slytherin: Slytherin,
            Hufflepuff: Hufflepuff,
            Ravenclaw: Ravenclaw
        };

        return(
            <div className="card" style={{borderColor: colors[house]}}>

                <figure className="houseBox">
                    <img src={crests[house]} alt={house}/>
                    <figcaption style={{color: colors[house]}}>
                        {house}
                    </figcaption>
                </figure>
                
                <figure className="charBox">
                    <img src={image} alt={name}/>
                    <figcaption>{name}</figcaption>
                </figure>
                
            </div>
        );
    }
}

export default PartCard;