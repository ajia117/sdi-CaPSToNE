import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Groups from './components/Groups.js';
import Sidebar from './components/Sidebar.js';
import UsersList from './components/UsersList';
import AddCertModal from './components/AddCertModal.js';
import Clock from './components/Clock.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.searchRef = React.createRef('');
    this.state = {
      orgId:  1,
      groups: [],
      searchBar: true,
      view: 'group',
      renderUsers: undefined
    }
    this.changeView = this.changeView.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
    this.search = this.search.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleAddGroup = this.handleAddGroup.bind(this);
    this.handleDeleteGroup = this.handleDeleteGroup.bind(this);
  }

  componentDidMount(){
    // fetch(`http://localhost:8080/all`)
    // .then(res=>res.json())
    // .then(data=>{
    //   this.setState({
    //     orgId:  this.state.orgId,
    //     groups: data.groups,
    //     searchBar: this.state.searchBar,
    //     view: this.state.view,
    //     renderUsers: this.state.renderUsers
    //   })
    // })
    // .catch(err=>console.log(err))
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
    console.log(data)
    fetch('http://localhost:8080/new/user', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group_id: data[6], 
        organization_id: data[5], 
        dodid: data[4], 
        rank: data[0], 
        last_name: data[2], 
        first_name: data[1],
        email: data[3]
      })
    })
     .then(res=>res.json())
     .then(data=>{
       this.setState({
         
       })
     })
     .catch()
     
  }
  handleDeleteUser(data){
    console.log(`${data} deleted!`)
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
    console.log(data[0], 'and', data[1])
    let dataObj = {
      organization_id: data[1],
      name: data[0]
    }
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // },
    fetch('http://localhost:8080/new/group', {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(dataObj)
    })
     .then(res=>res.json())
     .then(data=>{
       console.log(data)
       return fetch('http://localhost:8080/all');
     })
     .then(res=>res.json())
     .then(data=>{
       this.setState({
        orgId:  this.state.orgId,
        groups: data,
        searchBar: this.state.searchBar,
        view: this.state.view,
        renderUsers: this.state.renderUsers
       })
     })
     .catch(err=>console.log(err))
     
  }
  handleDeleteGroup(data){
    console.log(`${data} deleted!`)
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
      orgId:  this.state.orgId,
      groups: this.state.groups,
      searchBar: this.state.searchBar,
      view: this.state.view,
      renderUsers: data
    })
  }

  changeView(data){
    if (data === 'group'){
      this.setState({
        orgId:  this.state.orgId,
        groups: this.state.groups,
        searchBar: true,
        view: 'group',
        renderUser: this.state.renderUsers
      })
    } else if (data=== 'users'){
      this.setState({
        orgId:  this.state.orgId,
        groups: this.state.groups,
        searchBar: false,
        view: 'users',
        renderUser: this.state.renderUsers
      })
      console.log('view after change:', this.state.view)
    }

  }

  render(){
    return (
      <div className="App">
        <Sidebar searchBar={this.state.searchBar}
        orgId={this.state.orgId}
        groups={this.state.groups}
        view={this.state.view}
        groupId={this.state.renderUsers}
        addGroup={this.handleAddGroup}
        deleteGroup={this.handleDeleteGroup}
        addUser={this.handleAddUser}
        deleteUser={this.handleDeleteUser}
        />
        <div className="appright">
          <div className="org-header">
         
            <h2>Organization Name</h2>
          </div>
          {/* <div id="MyClockDisplay" class="clock" onload="showTime()"></div> */}
          {/* <Clock /> */}
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
