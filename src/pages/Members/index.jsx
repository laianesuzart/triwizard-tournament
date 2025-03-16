import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  getAllCharacters,
  getStudents,
  getStaff,
  getCharactersByHouse,
  staleTime,
} from '../../services/api';
import { useLoading, useModal } from '../../store';
import BasicCard from '../../components/BasicCard';
import './style.css';

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

const filterOptions = Object.keys(FILTER_QUERIES);

function Members() {
  const [filter, setFilter] = useState('all');
  const [btnIndex, setBtnIndex] = useState(0);
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: FILTER_QUERIES[filter].key,
    queryFn: FILTER_QUERIES[filter].fn,
    staleTime,
  });

  const setLoading = useLoading((state) => state.setLoading);
  const openModal = useModal((state) => state.openModal);

  const handleClick = (option, index) => {
    setFilter(option);
    setBtnIndex(index);
  };

  useEffect(() => {
    setLoading(isPending);
  }, [isPending]);

  useEffect(() => {
    if (error) openModal({ title: 'An error has occurred', description: error.message });
  }, [error]);

  return (
    <main className="container-flex">
      <h2>Members of Hogwarts</h2>
      <nav className="filter-menu">
        {filterOptions.map((opt, index) => (
          <button key={opt} onClick={() => handleClick(opt, index)} disabled={index === btnIndex}>
            {opt}
          </button>
        ))}
      </nav>
      <div className="char-grid">
        {data.map((char) => (
          <BasicCard char={char} key={char.id} />
        ))}
      </div>
    </main>
  );
}

export default Members;
