import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LuRefreshCcw } from 'react-icons/lu';

import { getStudents, staleTime } from '../../services/api';
import { useLoading, useModal } from '../../store';
import Card3d from '../../components/Card3d';
import './style.css';

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
    <main className="container-flex">
      <h2>Choose your champion</h2>
      <div>
        <div className="card-container">
          {selected.map((char) => (
            <Card3d char={char} key={char.id} />
          ))}
        </div>
        {data.length ? (
          <button onClick={selectAgain} className="btn--refresh" title="Refresh options">
            <LuRefreshCcw />
          </button>
        ) : null}
      </div>
    </main>
  );
}

export default Champions;
