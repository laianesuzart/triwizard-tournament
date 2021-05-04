import { Component } from "react";
import { Link } from 'react-router-dom';
import PartCard from "../PartCard";

import './style.scss';

class Participants extends Component {

    randomIndex = (max) => {
        return Math.floor(Math.random() * max);
    }

    getParticipants = (array) => {
        const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
        const max = houses.length;

        const students = array.filter(char => char.hogwartsStudent === true);

        let firstHouse = 0;
        let secondHouse = 0;
        let thirdHouse = 0;

        while (firstHouse === secondHouse || secondHouse === thirdHouse || firstHouse === thirdHouse) {
            firstHouse = this.randomIndex(max);
            secondHouse = this.randomIndex(max);
            thirdHouse = this.randomIndex(max);
        }

        const firstHouseArray = students.filter(char => char.house === houses[firstHouse]);
        const secondHouseArray = students.filter(char => char.house === houses[secondHouse]);
        const thirdHouseArray = students.filter(char => char.house === houses[thirdHouse]);

        const firstPart = firstHouseArray[this.randomIndex(firstHouseArray.length)];
        const secondPart = secondHouseArray[this.randomIndex(secondHouseArray.length)];
        const thirdPart = thirdHouseArray[this.randomIndex(thirdHouseArray.length)];

        return [firstPart, secondPart, thirdPart];
    }

    render() {
        const { list } = this.props;
  
        return(
            <div className="partContainer">
                <div className="cardContainer">
                    {this.getParticipants(list).map((char, index) => <PartCard char={char} key={index}/>)}
                </div>
                <button>
                    <Link to="/champions">select again</Link>
                </button> 
            </div>
        );
    }
} 

export default Participants;