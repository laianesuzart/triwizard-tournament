import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  getAllCharacters,
  getStudents,
  getStaff,
  getCharactersByHouse,
  staleTime,
} from '../../services/api';
import MainContainer from '../../components/MainContainer';

import BasicCard from '../../components/BasicCard';
import Gryffindor from '../../assets/img/gryffindor.png';
import Slytherin from '../../assets/img/slytherin.png';
import Hufflepuff from '../../assets/img/hufflepuff.png';
import Ravenclaw from '../../assets/img/ravenclaw.png';

import './style.scss';

const FILTER_QUERIES = {
  all: {
    key: ['allCharacters'],
    fn: getAllCharacters,
  },
  students: {
    key: ['students'],
    fn: getStudents,
  },
  staff: {
    key: ['staff'],
    fn: getStaff,
  },
  gryffindor: {
    key: ['house', 'gryffindor'],
    fn: () => getCharactersByHouse('gryffindor'),
  },
  slytherin: {
    key: ['house', 'slytherin'],
    fn: () => getCharactersByHouse('slytherin'),
  },
  hufflepuff: {
    key: ['house', 'hufflepuff'],
    fn: () => getCharactersByHouse('hufflepuff'),
  },
  ravenclaw: {
    key: ['house', 'ravenclaw'],
    fn: () => getCharactersByHouse('ravenclaw'),
  },
};

function Members() {
  const [filter, setFilter] = useState('all');
  const { isPending, error, data } = useQuery({
    queryKey: FILTER_QUERIES[filter].key,
    queryFn: FILTER_QUERIES[filter].fn,
    staleTime,
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <MainContainer>
      <div className="membersContainer">
        <nav className="filterMenu">
          <button onClick={() => setFilter('all')}>all</button>
          <button onClick={() => setFilter('staff')}>staff</button>
          <button onClick={() => setFilter('students')}>students</button>
          <button onClick={() => setFilter('gryffindor')}>
            <img src={Gryffindor} alt="Gryffindor" />
          </button>
          <button onClick={() => setFilter('slytherin')}>
            <img src={Slytherin} alt="Slytherin" />
          </button>
          <button onClick={() => setFilter('hufflepuff')}>
            <img src={Hufflepuff} alt="Hufflepuff" />
          </button>
          <button onClick={() => setFilter('ravenclaw')}>
            <img src={Ravenclaw} alt="Ravenclaw" />
          </button>
        </nav>
        <div className="charContainer">
          {data.map((char) => (
            <BasicCard char={char} key={char.id} />
          ))}
        </div>
      </div>
    </MainContainer>
  );
}

export default Members;
