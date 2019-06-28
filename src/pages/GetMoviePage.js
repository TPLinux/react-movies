import React from 'react';
// import { Link } from 'react-router-dom';
// import '../css/MainPage.css';

class GetMoviePage extends React.Component{
    
    render(){
        console.log(this.props.match.params.id);
        return(
            <div>
              <p>GetNote</p>
            </div>
        );
    }
}

export default GetMoviePage;
