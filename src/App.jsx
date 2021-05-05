import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './Routes';

class App extends Component {
  state = {
    characters: [],
    url: 'http://hp-api.herokuapp.com/api/characters',
    filteredUrl: '',
    loading: true
  };

  getCharacters = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({characters: res, loading: false}))
  }

  componentDidMount = () => {
    const { url } = this.state;
    this.getCharacters(`${url}/students`);
  }

  handleClick = (url) => {
    this.setState({filteredUrl: url});
  }

  componentDidUpdate = (_, prevState) => {
    const { filteredUrl } = this.state;
    prevState.filteredUrl !== filteredUrl && 
    this.getCharacters(filteredUrl);
  }

  render() {
    const { characters, url, filteredUrl, loading } = this.state;
     
    return (
      <BrowserRouter>
          <Header/>
          <Menu url={url} updateUrl={this.handleClick}/>
          <Routes list={characters} url={url} filteredUrl={filteredUrl} updateUrl={this.handleClick} loading={loading}/>
      </BrowserRouter>
    );
  }
}

export default App;
