import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    //Fetch request
    this._fetchCharacters();
  }

  _fetchCharacters = async () => {
    const url = `https://swapi.dev/api/people/`;
    const response = await fetch(url)
      .then(response => response.json());
    this.setState({
      characters: response.results
    })
  }


  render() {
    return (
      <Router>
        <nav>

        </nav>
        <Switch>
          <Route exact path='/'>
            <CharacterList 
              characters={this.state.characters} />
          </Route>
          <Route path='/character/:index'>
            <CharacterProfile 
              characters={this.state.characters}/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
