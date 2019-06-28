import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{

    delMovies = () => {
        window.localStorage.removeItem('movies');
        alert('All movies deleted!');
        window.location.href = '/';
    }
    
    render(){
        return (
            <div className='nav-bar'>
              <div id='links-cont'>
                <Link to='/'>Home</Link>
                <span />
                <Link to='/add'> Add New Movie</Link>
                <span />
                <Link to='#' onClick={this.delMovies}>Delete All Added Movies</Link>
              </div>
            </div>
        );
    }
};

export default NavBar;
