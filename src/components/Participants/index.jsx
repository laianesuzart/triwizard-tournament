import { useEffect, useState } from "react";
import PartCard from "../PartCard";

import './style.scss';

function Participants({ list }) {
    const [selected, setSelected] = useState([]);

    const randomIndex = (max) => {
        return Math.floor(Math.random() * max);
    }

    const getParticipants = (array) => {
        const houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
        const max = houses.length;

        let firstHouse = 0;
        let secondHouse = 0;
        let thirdHouse = 0;

        while (firstHouse === secondHouse || secondHouse === thirdHouse || firstHouse === thirdHouse) {
            firstHouse = randomIndex(max);
            secondHouse = randomIndex(max);
            thirdHouse = randomIndex(max);
        }

        const firstHouseArray = array.filter(char => char.house === houses[firstHouse]);
        const secondHouseArray = array.filter(char => char.house === houses[secondHouse]);
        const thirdHouseArray = array.filter(char => char.house === houses[thirdHouse]);

        const firstPart = firstHouseArray[randomIndex(firstHouseArray.length)];
        const secondPart = secondHouseArray[randomIndex(secondHouseArray.length)];
        const thirdPart = thirdHouseArray[randomIndex(thirdHouseArray.length)];

        return [firstPart, secondPart, thirdPart];
    }

    useEffect(() => {
        setSelected(getParticipants(list));
    }, []);

    const selectAgain = () => {
        setSelected(getParticipants(list))
    }
  
    return(
        <div className="partContainer">
            <div className="cardContainer">
                {selected.map((char, index) => <PartCard char={char} key={index}/>)}
            </div>
            <button onClick={selectAgain}>
               select again
            </button> 
        </div>
    );
} 

export default Participants;