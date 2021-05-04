import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
// import MainContainer from './components/MainContainer';
import Menu from './components/Menu';
// import Participants from './components/Participants';
import Routes from './Routes';

class App extends Component {
  state = {
    characters: [],
    url: 'http://hp-api.herokuapp.com/api/characters',
  };

  getCharacters = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({characters: res, home: false}))
  }

  componentDidMount = () => {
    const { url } = this.state;
    this.getCharacters(url);
  }

  // handleClick = (url) => {
  //   this.setState({url: url})
  // }

  // componentDidUpdate = (_, prevState) => {
  //   const { url } = this.state;
  //   prevState.url !== url && 
  //   this.getCharacters(url);
  // }

  render() {
    const { characters } = this.state;
     
    return (
      <BrowserRouter>
          <Header/>
          <Menu />
          {/* <MainContainer> */}
          <Routes list={characters} />
        {/* <button onClick={() => this.handleClick('http://hp-api.herokuapp.com/api/characters/students')}>New Champions</button> */}
        {/* {<Participants list={this.state.characters} newParts={this.handleClick}/>} */}
          {/* </MainContainer> */}
      </BrowserRouter>
    );
  }
}

export default App;
