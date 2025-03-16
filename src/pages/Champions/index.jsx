import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LuRefreshCcw } from 'react-icons/lu';

import Gryffindor from '../../assets/img/gryffindor.svg?react';
import Slytherin from '../../assets/img/slytherin.svg?react';
import Hufflepuff from '../../assets/img/hufflepuff.svg?react';
import Ravenclaw from '../../assets/img/ravenclaw.svg?react';

import { getStudents, staleTime } from '../../services/api';
import { useLoading, useModal } from '../../store';
import Card3d from '../../components/Card3d';
import './style.css';

const crests = {
  gryffindor: <Gryffindor />,
  slytherin: <Slytherin />,
  hufflepuff: <Hufflepuff />,
  ravenclaw: <Ravenclaw />,
};

function Champions() {
  const {
    isPending,
    error,
    data = [],
  } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
    staleTime,
  });

  const [selected, setSelected] = useState([]);
  const [highlightedCard, setHighlightedCard] = useState(null);
  const setLoading = useLoading((state) => state.setLoading);
  const openModal = useModal((state) => state.openModal);

  const randomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getParticipants = (array = []) => {
    if (!array.length) return [];
    const max = array.length;
    const keys = {};
    while (Object.keys(keys).length < 3) {
      const index = randomIndex(max);
      if (!keys[index]) keys[index] = index;
    }
    return Object.keys(keys).map((i) => array[i]);
  };

  const selectAgain = () => {
    setSelected(getParticipants(data));
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setLoading(isPending);
  }, [isPending]);

  useEffect(() => {
    if (error) openModal({ title: 'An error has occurred', description: error.message });
  }, [error]);

  useEffect(() => {
    if (data.length) setSelected(getParticipants(data));
  }, [data]);

  return (
    <>
      {highlightedCard ? (
        <div className="clip-wrapper">
          <div className="overlay">
            {crests[highlightedCard.house?.toLowerCase()]}
            <div className="info-card">
              <figure>
                <img src={highlightedCard.image} alt={highlightedCard.name} />
                <figcaption>{highlightedCard.name}</figcaption>
              </figure>
              <div>
                <p>Birth: {highlightedCard.dateOfBirth || '-'}</p>
                <p>Species: {highlightedCard.species || '-'}</p>
                <p>Patronus: {highlightedCard.patronus || '-'}</p>
              </div>
              <button
                onClick={() => setHighlightedCard(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setHighlightedCard(null);
                  }
                }}
              >
                close
              </button>
            </div>
          </div>
        </div>
      ) : (
        <main className="container-flex">
          <h2>Choose your champion</h2>
          <div>
            <div className="card-container">
              {selected.map((char) => (
                <Card3d char={char} key={char.id} onClick={() => setHighlightedCard(char)} />
              ))}
            </div>
            {data.length ? (
              <button onClick={selectAgain} className="btn--refresh" title="Refresh options">
                <LuRefreshCcw />
              </button>
            ) : null}
          </div>
        </main>
      )}
    </>
  );
}

export default Champions;
