import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Groups from './components/Groups.js';
import Sidebar from './components/Sidebar.js';
import UsersList from './components/UsersList';
import AddCertModal from './components/AddCertModal.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRef = React.createRef('');
    this.state = {
      groups: [],
      searchBar: true,
      view: 'group'
    }
    this.changeView = this.changeView.bind(this);
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

  handleSearch(data){
    /*this.state.groups.filter(each=>{
      return each.contains(data);
    }) 
    this.setState({
      groups: data,
      searchBar: this.searchBar,
      view: this.view
    })
    */

  }

  changeView(){
    if (this.state.view === 'group'){
      this.setState({
        groups: this.state.groups,
        searchBar: false,
        view: 'user'
      })
    } else if (this.state.view === 'users'){
      this.setState({
        groups: this.state.groups,
        searchBar: true,
        view: 'group'
      })
      console.log('view after change:', this.state.view)
    }

  }

  render(){
    return (
      <div className="App">
        <Sidebar searchBar={this.state.searchBar}/>
        <div className="appright">
          <div className="org-header">
            <h2>Organization Name</h2>
          </div>
          <div className="main-body">
            <Router>
              <Route path="/login" render={props=><p>hello world from login</p>}/>
              <Route exact path="/Groups" render={props=><Groups view={this.changeView}/>}/>
              <Route exact path="/Group_Users" render={props=><UsersList />}/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
