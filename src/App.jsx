import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Routes from './Routes';

function App() {
  const [characters, setCharacters] = useState([]);
  const [champions, setChampions] = useState([]);
  const [filteredUrl, setFilteredUrl] = useState('');
  const baseUrl = 'https://hp-api.herokuapp.com/api/characters';

  useEffect(() => {
    fetch(`${baseUrl}/students`)
    .then(res => res.json())
    .then(res => setChampions(res))
    .catch(err => console.error(err))
  }, []);

  const handleClick = (url) => {
    setFilteredUrl(url);
  }

  useEffect(() => {
    if (filteredUrl !== '') {
      fetch(filteredUrl)
      .then(res => res.json())
      .then(res => setCharacters(res))
      .catch(err => console.error(err))
    }
  }, [filteredUrl]);

  return (
    <BrowserRouter>
        <Intro/>
        <Header/>
        <Menu/>
        <Routes list={characters} url={baseUrl} filteredUrl={filteredUrl} updateUrl={handleClick} champList={champions}/>
    </BrowserRouter>
  );
}

export default App;
