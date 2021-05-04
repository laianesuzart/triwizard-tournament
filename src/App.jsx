import { Component } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Menu from './components/Menu';
import Participants from './components/Participants';

class App extends Component {
  state = {
    characters: [],
    url: '',
    loading: true
  };

  getCharacters = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({characters: res, loading: false}))
  }

  // componentDidMount = () => {
  //   const { url } = this.state;
  //   this.getCharacters(url);
  // }

  handleClick = (url) => {
    this.setState({url: url})
  }

  
  componentDidUpdate = (_, prevState) => {
    const { url } = this.state;
    prevState.url !== url && 
    this.getCharacters(url);
  }

  
  render() {
    return (
      <>
          <Header/>
          <Menu option={this.handleClick}/>
          <MainContainer>

        {/* <button onClick={() => this.handleClick('http://hp-api.herokuapp.com/api/characters/students')}>New Champions</button> */}
        {!this.state.loading && <Participants list={this.state.characters} newParts={this.handleClick}/>}
          </MainContainer>
      </>
    );
  }
}

export default App;
