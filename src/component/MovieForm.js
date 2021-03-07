import React, { Component } from 'react'
import Axios from 'axios';

class MovieForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
        movieName:'',
        movieUrl:'',
        language:'',
    };
  }

  handleChange = (e) => {
    const {name,value} = e.target;

    this.setState({
        [name]:value,
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      const movieData = {
          movieName:this.state.movieName,
          movieUrl:this.state.movieUrl,
          language:this.state.language,
      }
      Axios.post('https://mernbuildmine.herokuapp.com/', movieData)
      .then((res)=>{
          console.log(res);
      })
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' name='movieName' onChange={this.handleChange} />
          <input type='text' name='movieUrl' onChange={this.handleChange} />
          <input type='text' name='language' onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Add movie</button>
        </form>
      </div>
    )
  }
}

export default MovieForm
