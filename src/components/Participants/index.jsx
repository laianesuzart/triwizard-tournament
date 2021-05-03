import { Component } from "react";
import PartCard from "../PartCard";

import './style.scss';

class Participants extends Component {

    randomIndex = (max) => {
        return Math.floor(Math.random() * max);
    }

    getParticipants = (array) => {
        const max = array.length;

        let firstPart = 0;
        let secondPart = 0;
        let thirdPart = 0;

        while (firstPart === secondPart || secondPart === thirdPart || firstPart === thirdPart) {
            firstPart = this.randomIndex(max);
            secondPart = this.randomIndex(max);
            thirdPart = this.randomIndex(max);
        }

        const participants = [array[firstPart], array[secondPart], array[thirdPart]];

        return participants;
    }

    render() {
        const { list } = this.props;
  
        return(
            <div className="container">
                {this.getParticipants(list).map((char, index) => <PartCard char={char} key={index}/>)}
            </div>
        );
    }
} 

export default Participants;