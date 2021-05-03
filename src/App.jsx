import { Component } from 'react';
import Participants from './components/Participants';

import './styles/App.scss';

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
      <div className="App">
        <header className="App-header">
        <button onClick={() => this.handleClick('http://hp-api.herokuapp.com/api/characters/students')}>Click</button>
        {!this.state.loading && <Participants list={this.state.characters}/>}
        </header>
      </div>
    );
  }
}

export default App;
