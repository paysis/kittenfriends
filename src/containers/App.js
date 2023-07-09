import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      kittens: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(kittens => {this.setState({ kittens})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { kittens, searchfield } = this.state;
    const filteredKittens = kittens.filter(kitten =>{
      return kitten.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !kittens.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>KittenFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll height="800px">
            <CardList kittens={filteredKittens} />
          </Scroll>
        </div>
      );
  }
}

export default App;