import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { LuRefreshCcw } from 'react-icons/lu';

import { getStudents, staleTime } from '../../services/api';
import Card3d from '../../components/Card3d';
import './style.css';

function Champions() {
  const { isPending, error, data } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
    staleTime,
  });

  const [selected, setSelected] = useState([]);

  const randomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getParticipants = (array) => {
    const max = array.length;
    const keys = {};
    while (Object.keys(keys).length < 3) {
      const index = randomIndex(max);
      if (!keys[index]) keys[index] = index;
    }
    return Object.keys(keys).map((i) => array[i]);
  };

  useEffect(() => {
    if (data) setSelected(getParticipants(data));
  }, [data]);

  const selectAgain = () => {
    setSelected(getParticipants(data));
  };

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <main className="container-flex">
      <h2>Choose your champion</h2>
      <div>
        <div className="card-container">
          {selected.map((char, index) => (
            <Card3d char={char} key={char.id} />
          ))}
        </div>
        <button onClick={selectAgain} className="btn--refresh" title="Refresh options">
          <LuRefreshCcw />
        </button>
      </div>
    </main>
  );
}

export default Champions;
