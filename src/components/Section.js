import React from 'react';

class Section extends React.Component{

    render(){
        let movies = this.props.movies.filter((m) => {
            return m != null;
        });
        let section = '';
        if(movies.length > 0){
            section = (
                <div>
                  <div className='section-title-cont'>
                    <h3 className='section-title'>{this.props.category} Movies</h3>
                  </div>
                  <br />
                  <div className='cards-cont'>
                    {movies}
                  </div>
                  <br/><br/><br/>
                </div>
            );
        }
        return (section);
    }
}

export default Section;
