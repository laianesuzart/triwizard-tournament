import { Link } from 'react-router-dom';

import './style.css';

function Home() {
  return (
    <main className="container">
      <div className="card">
        <div className="card__wrapper">
          <img src="/trophy.jpg" className="card__cover" alt="" />
        </div>
        <Link to="/champions" className="card__link">
          Join the Tournament
        </Link>
        <img src="/mashle.webp" className="card__character" alt="" />
      </div>
    </main>
  );
}

export default Home;
