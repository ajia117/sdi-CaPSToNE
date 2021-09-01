import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Groups from './components/Groups.js';
import Sidebar from './components/Sidebar.js';
import UsersList from './components/UsersList';
import AddCertModal from './components/AddCertModal.js';
// import Clock from './Clock.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRef = React.createRef('');
    this.state = {
      groups: [],
      searchBar: true,
      view: 'group',
      renderUsers: undefined
    }
    this.changeView = this.changeView.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentDidMount(){
    /*fetch(allgroups)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        groups: data,
        searchBar: this.state.searchBar,
        view: this.state.view
      })
    })
    .catch() */
  }
  search(data){
    /*
    if (!data){
    fetch(allgroups)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        groups: data,
        searchBar: this.state.searchBar,
        view: this.state.view
      })
    })
    .catch()
    } else {
      let filtered = this.state.groups.filter(group=>{
        return group.name.includes(data);
      })
      this.setState({
        groups: filtered,
        searchBar: this.state.searchBar,
        view: this.state.view
      })
    }
     */
  }
  handleAddUser(data){
    /**fetch()
     .then(res=>res.json())
     .then(data=>{
       this.setState({
         
       })
     })
     .catch()
     */
  }
  handleDeleteUser(data){
    /**fetch()
     .then(res=>res.json())
     .then(data=>{
       this.setState({
         
       })
     })
     .catch()
     */
  }
  handleAddGroup(data){
    /**fetch()
     .then(res=>res.json())
     .then(data=>{
       this.setState({
         
       })
     })
     .catch()
     */
  }
  handleDeleteGroup(data){
    /**fetch()
     .then(res=>res.json())
     .then(data=>{
       this.setState({
         
       })
     })
     .catch()
     */
  }
  renderUsers(data){
    this.setState({
      groups: this.state.groups,
      searchBar: this.state.searchBar,
      view: this.state.view,
      renderUsers: data
    })
  }

  changeView(data){
    if (data === 'group'){
      this.setState({
        groups: this.state.groups,
        searchBar: true,
        view: 'group'
      })
    } else if (data=== 'users'){
      this.setState({
        groups: this.state.groups,
        searchBar: false,
        view: 'users'
      })
      console.log('view after change:', this.state.view)
    }

  }

  render(){
    return (
      <div className="App">
        <Sidebar searchBar={this.state.searchBar} view={this.state.view} addGroup={this.handleAddGroup}/>
        <div className="appright">
          <div className="org-header">
          {/* <Clock /> */}
            <h2>Organization Name</h2>
          </div>
          <div className="main-body">
            <Router>
              <Route path="/login" render={props=><p>hello world from login</p>}/>
              <Route exact path="/Groups" render={props=><Groups renderUsers={this.renderUsers} view={this.changeView}/>}/>
              <Route path="/Group_Users" render={props=><UsersList users={this.state.renderUsers} view={this.changeView}/>}/>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
