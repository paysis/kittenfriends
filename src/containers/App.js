import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { requestKittens, setSearchField } from "../actions"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        searchField: state.searchKittens.searchField,
        kittens: state.requestKittens.kittens,
        isPending: state.requestKittens.isPending,
        error: state.requestKittens.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestKittens: () => dispatch(requestKittens()) // thunk
    }
  }

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.onRequestKittens();
  }

  render() {
    const { searchField, onSearchChange, kittens, isPending } = this.props;
    const filteredKittens = kittens.filter(kitten =>{
      return kitten.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>KittenFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll height="800px">
            <CardList kittens={filteredKittens} />
          </Scroll>
        </div>
      );
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);