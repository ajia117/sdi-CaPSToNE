import logo from './logo.svg';
import './App.css';
import UserModal from './components/UserModal.js'
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Groups from './components/Groups.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRef = React.createRef('');
    this.state = {
      groups: []
    }
  }

  componentDidMount(){
    /*fetch()
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        groups: data
      })
    })
    .catch() */
  }

  render(){
    return (
      <div className="App">
        <div className="appleft">
          <div className="search" className="left-items">
            <br></br>
            <input placeholder="Find a group..." ref={this.searchRef} className="searchbar"></input><br></br>
            <br></br>
            <button>Search</button>
          </div><br></br><br></br>
          <div className="left-items">
            <button>Export All -</button>
          </div><br></br>
          <div className="left-items">
            <button>Add Group +</button><br></br><br></br>
            <button>Remove Group -</button>
          </div>
        </div>
        <div className="appright">
          <div className="org-header">
            <h2>Organization Name</h2>
          </div>
          {/* <UserModal /> */}
          <div className="main-body">
            <Router>
              <Route path="/login" render={props=><p>hello world from login</p>}/>
              <Route exact path="/Groups" render={props=><Groups/>}/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
