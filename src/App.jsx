import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Routes from './Routes';

class App extends Component {
  state = {
    characters: [],
    champions: [],
    url: 'https://hp-api.herokuapp.com/api/characters',
    filteredUrl: ''
  };

  componentDidMount = () => {
    const { url } = this.state;
    fetch(`${url}/students`)
    .then(res => res.json())
    .then(res => this.setState({champions: res}))
  }

  handleClick = (url) => {
    this.setState({filteredUrl: url});
  }

  componentDidUpdate = (_, prevState) => {
    const { filteredUrl } = this.state;
    prevState.filteredUrl !== filteredUrl && 
    fetch(filteredUrl)
    .then(res => res.json())
    .then(res => this.setState({characters: res}))
  }

  render() {
    const { characters, url, filteredUrl, champions} = this.state;
     
    return (
      <BrowserRouter>
          <Intro/>
          <Header/>
          <Menu/>
          <Routes list={characters} url={url} filteredUrl={filteredUrl} updateUrl={this.handleClick} champList={champions}/>
      </BrowserRouter>
    );
  }
}

export default App;
