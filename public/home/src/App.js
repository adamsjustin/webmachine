////////////////////////////////////////////////////////////////////////
/////////////////      homepage and chat widget       //////////////////
/////////////////    Connecting Business to CUI     ///////////////////
//////////////////////////////////////////////////////////////////////

import React, { Component }   from 'react';
import Footer                 from './Component/Footer';
import Header                 from './Component/Header';
import Main                   from './Pages/Main';
import Testimonials           from './Component/Testimonials';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Auth from './Pages/Auth/Auth';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
//

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolioData: {}
    }
  }
   getPortfolioData(){
     //Ajax request
     fetch(origin + '/home/static/portfolioData.json')
      .then(r => r.json())
      .then(json => {
        this.db = json
        this.setState({  portfolioData: json  });
        console.log(this.state.portfolioData)
     })
   }


  componentDidMount(){
    this.getPortfolioData();
    console.log('home app')
  }



  render() {
    console.log(this.state.portfolioData);
    return (
      <div>
      <div className="App">
        <Header data={this.state.portfolioData.main} auth={auth}/>
        <Main data={this.state.portfolioData} auth={auth}/>
        
      </div>
    </div>
    );
  }
}

export default App;
