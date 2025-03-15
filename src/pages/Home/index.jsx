import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer';

import './style.scss';

function Home() {
  return (
    <MainContainer>
      <Link to="/champions">select the champions</Link>
    </MainContainer>
  );
}

export default Home;
