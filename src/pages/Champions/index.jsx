import { useQuery } from '@tanstack/react-query';

import { getStudents, staleTime } from '../../services/api';
import MainContainer from '../../components/MainContainer';
import Participants from '../../components/Participants';

function Champions() {
  const { isPending, error, data } = useQuery({
    queryKey: ['students'],
    queryFn: getStudents,
    staleTime,
  });

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <MainContainer>
      <Participants list={data} />
    </MainContainer>
  );
}

export default Champions;
