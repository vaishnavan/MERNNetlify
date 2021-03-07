import React, { Component } from 'react'
import Axios from 'axios';

class MovieDisplay extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movieArr: []
    }
  }

  componentDidMount(){
      Axios.get("https://mernbuildmine.herokuapp.com/allmovie")
      .then((res)=>{
          this.setState({
              movieArr:res.data,
          });
      })
  }


  render () 
  {
      const {movieArr} = this.state;
    return <div>

        {movieArr.map((data)=> {
            return(
                <div key={data._id}>
                    <h1>{data.movieName}</h1>
                </div>
            )
        })}

    </div>
  }
}

export default MovieDisplay
