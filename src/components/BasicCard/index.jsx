import { Component } from "react";

import './style.scss';

class BasicCard extends Component {
    render() {
        const { house, image, name } = this.props.char;
        const colors = {
            Gryffindor: '#740001',
            Slytherin: '#1A472A',
            Hufflepuff: '#FFD800',
            Ravenclaw: '#0E1A40'
        };

        return(
            <div className="basicCard" style={{borderColor: colors[house]}}>
                <figure className="basicFig">
                    <img src={image} alt={name}/>
                    <figcaption>{name}</figcaption>
                </figure>
            </div>
        );
    }
}

export default BasicCard;