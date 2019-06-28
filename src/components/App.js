import React from 'react';

import Main from './Main.js';
import NavBar from './NavBar.js';


class App extends React.Component{
    
    render(){
        return(
            <div>
              <NavBar/>
              <div id='page-content'>
                <Main/>
              </div>
            </div>
        );
    }
}

export default App;
