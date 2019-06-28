import React from 'react';
// import '../css/MainPage.css';


class AddMoviePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            newMovie: {
                title: '',
                desc: '',
                category: '',
                img: '',
                rating: null,
            },
            msg: ''
        };
    }

    handleInputChange = (e) => {
        let inputName =  e.target.name;
        let inputValue =  e.target.value;
        this.setState(prevState => {
            let newMovie = Object.assign({}, prevState.newMovie);;
            newMovie[inputName] = inputValue;
            return { newMovie };
        });
    }
    
    addNew = (e) => {
        e.preventDefault();
        let localMovies = window.localStorage.getItem('movies');
        if(localMovies === null){
            localMovies = [this.state.newMovie];
        }else{
            localMovies = JSON.parse(localMovies);
            localMovies.push(this.state.newMovie);
        }
        window.localStorage.setItem('movies', JSON.stringify(localMovies));
        alert('successfully Added');
        window.location.href = '/';
    }
    
    render(){
        return(
            <div>
              <center>
                <form id='new-form' onSubmit={this.addNew}>
                  <h1>Add New Movie</h1>
                <p>
                  <input onChange={this.handleInputChange} name="title" placeholder="Movie Title"/>
                </p>
                <p>
                  <textarea onChange={this.handleInputChange} name="desc" placeholder="Movie description"/>
                </p>
                <p>
                  <input onChange={this.handleInputChange} name="category" placeholder="Movie category"/>
                </p>
                <p>
                  <input onChange={this.handleInputChange} name="img" placeholder="Movie Image URL"/>
                </p>
                <p>
                  <input onChange={this.handleInputChange} name="rating" type="number" min='0' max='5' placeholder="Movie rating"/>
                </p>
                <button>Add</button>
              </form>
              </center>
            </div>
        );
    }
}

export default AddMoviePage;
