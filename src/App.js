import React, { Component } from 'react';
import MovieDisplay from './component/MovieDisplay';
import MovieForm from './component/MovieForm';


class App extends Component {
  render() {
    return (
      <div>
        <MovieForm />
        <MovieDisplay />
      </div>
    );
  }
}

export default App;
