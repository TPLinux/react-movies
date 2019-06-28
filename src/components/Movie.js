import React from 'react';


class Movie extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='card'>
              <span id='rating'>{this.props.info.rating}</span>
              <div id='img' style={{
                  backgroundImage: `url(${this.props.info.img})`,
                  backgroundSize: 'cover'
              }}>
                
              </div>
              <h4>{this.props.info.title}</h4>
              <h5>
                {this.props.info.desc}
              </h5>
              <br/>
            </div>
        );
    }    
}

export default Movie;
