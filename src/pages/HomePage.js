import React from 'react';
// import '../css/MainPage.css';
import Section from '../components/Section.js';
import Movie from '../components/Movie.js';

String.prototype.upperCaseFirst = function(){
    let v = this.slice(0,1).toUpperCase() + this.slice(1).toLowerCase();
    return v;
};


String.prototype.titleCase = function(){
    let v = this.split(' ');
    let v2 = [];
    for (let i in v){
        v2.push(v[i].upperCaseFirst());
    }
    return v2.join(' ');
};


class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query: '',
        };
        
    }    
    
    updateQuery(event){
        let query = event.target.value.toLowerCase();
        this.setState({
            query: query,
        });
    }

    getMoviesByCategory(aCategory){
        let category = aCategory.toLowerCase();
        let movies_ = movies.slice().map((m, k) => {
            if((m.category.toLowerCase().includes(category)) &&
               (m.title.toLowerCase().includes(this.state.query) ||
                m.desc.toLowerCase().includes(this.state.query) ||
                m.category.toLowerCase().includes(this.state.query)
               )){
                m.title = m.title.titleCase();
                return (<Movie info={m} key={k}/>);
            }else{
                return null;
            }
        });        
        return movies_;
        
    }
    
    render(){
        let sections = categories.map((category, k) => {
            return (<Section category={category} movies={this.getMoviesByCategory(category)} key={k}/>);
        });
        let isAllEmpty = [];
        for(let s in sections){
            let ss = sections[s];
            isAllEmpty.push(ss.props.movies.every(e => e === null));
        }
        console.log(isAllEmpty);
        let sectionContent = (sections);
        if(isAllEmpty.every(e => e === true)){
            sectionContent = (<div id='no-movies-msg'>No results</div>);
        }
        return(
            <div>
              <input id='search-input' placeholder='Search for Title, Description, Category...' onChange={(e) => this.updateQuery(e)}/>
              {sectionContent}
            </div>
        );
    }
}

const static_movies = [
    {
        title: 'Spider Man 3',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Spider-Man_3%2C_International_Poster.jpg/220px-Spider-Man_3%2C_International_Poster.jpg',
        desc: 'Spiderman kills the monsters ',
        rating: 5,
        category: 'Action'
    },
    {
        title: 'Hulk',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4MivgWXyz1GMgMLT-_wVv8UuPEE5XLGZPDEgFpaAzFPnvTnF',
        desc: 'A great human transform to green monster',
        rating: 3,
        category: 'Action'
    },
    {
        title: 'Hulk 2',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/DVD_cover_of_the_movie_The_Death_of_the_Incredible_Hulk.jpg/250px-DVD_cover_of_the_movie_The_Death_of_the_Incredible_Hulk.jpg',
        desc: 'green monster being more strong',
        rating: 4,
        category: 'Action'
    },
    {
        title: 'Silence',
        img: 'https://cdn-blogs.tribune.com.pk/2018/07/69318-silencejpg-1536912226-884-640x480.jpg',
        desc: 'a silence place where people kileld',
        rating: 4,
        category: 'Horror'
    },
    {
        title: 'last love',
        img: 'https://pmcvariety.files.wordpress.com/2016/06/evergreen-love-japanese-movie.jpg?w=600',
        desc: 'A boy fell in girl\'s love ',
        rating: 4,
        category: 'Drama'
    },
    {
        title: 'What A Flammingo',
        img: 'https://pixel.nymag.com/imgs/daily/vulture/2018/08/09/09-birtish-comedy.w700.h700.jpg',
        desc: 'the best comedy film',
        rating: 4,
        category: 'Comedy'
    },
];

var movies;
{
    let localMovies = getMovies();
    if(localMovies != null){
        movies = static_movies.concat(localMovies);
    }else{
        movies = static_movies;
    }
}


function getMovies(){
    let movies = window.localStorage.getItem('movies');
    if(movies !== null){
        return JSON.parse(movies);
    }else{
        return [];
    }
    
}

function extractCategories(){
    let cats = [];
    for(var i in movies){
        let m = movies[i];
        if(!cats.includes(m.category.upperCaseFirst()))
            cats.push(m.category.upperCaseFirst());
    }
    return cats;
}
const categories = extractCategories();

export default HomePage;
