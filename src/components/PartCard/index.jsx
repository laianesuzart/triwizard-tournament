import { Component } from 'react';

import './style.module.scss';

class PartCard extends Component {
    render() {
        const { char } = this.props;

        return(
            <div className="card">
                <figure className="houseBox">
                    <img src="" alt=""/>
                    <figcaption>{char.house}</figcaption>
                </figure>
                
                <figure className="charBox">
                    <img src={char.image} alt={char.name}/>
                    <figcaption>{char.name}</figcaption>
                </figure>

                <div className="bottomBox">
                    <img src="" alt={char.wand.wood}/> 
                    <img src="" alt={char.patronus}/>
                </div>

            </div>
        );
    }
}

export default PartCard;