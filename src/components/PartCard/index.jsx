import { Component } from 'react';

import './style.scss';

class PartCard extends Component {
    render() {
        const { house, image, name, wand, patronus} = this.props.char;

        return(
            <div className="card" style={{borderColor: 
            (house === 'Gryffindor') ? '#740001'
            : (house === 'Slytherin') ? '#1A472A'
            : (house === 'Hufflepuff') ? '#FFD800'
            : '#0E1A40'}}>
                <figure className="houseBox">
                    <img src="" alt=""/>
                    <figcaption style={{color: 
                    (house === 'Gryffindor') ? '#740001'
                    : (house === 'Slytherin') ? '#1A472A'
                    : (house === 'Hufflepuff') ? '#FFD800'
                    : '#0E1A40'}}>
                        {house}
                    </figcaption>
                </figure>
                
                <figure className="charBox">
                    <img src={image} alt={name}/>
                    <figcaption>{name}</figcaption>
                </figure>

                <div className="bottomBox">
                    <img src="" alt={wand.wood}/> 
                    <img src="" alt={patronus}/>
                </div>

            </div>
        );
    }
}

export default PartCard;