import {useState, useEffect, useRef } from 'react';
import UserModal from './UserModal.js'
import AddGroupModal from './AddGroupModal.js'
// import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import green from '@material-ui/core/colors';
import PublishIcon from '@material-ui/icons/Publish';

function Sidebar (props) {
    const searchRef = useRef();
    const [searchbar, setSearchbar] = useState('');
    const [style, setStyle] = useState({});
    
    useEffect(()=>{
        
    },[]);

    function handleSearch(){
        if (props.searchBar === true){
            console.log(props.searchBar)
            //props. filter groups
        } else if (props.searchBar === false){
            //props. filter users
            console.log(props.searchBar)
        }
    }

    return (
        <div className="appleft">
          <div className="left-items" >
            <br></br>
            <input placeholder={`Find a ${props.searchBar === true ? 'group' : 'user'}...`} ref={searchRef} className="searchbar"></input><br></br>
            <br></br>
            <button onClick={handleSearch}>Search</button>
          </div>
            <br></br><br></br><br></br>
          <div className="left-items">
            <p style={{color: '#c4d3e4', fontSize: '1.2em', margin: 0}}>Export All</p>
            <IconButton style={{color: '#c4d3e4', backgroundColor: 'transparent', padding: '0', marginTop: '0'}} size="large" aria-label="delete">
              <PublishIcon />
            </IconButton>
          </div>
            <br></br><br></br>
          <div className="left-items" style={props.view === 'group' ? { display: 'initial' } : {display: 'none'}}>
            <AddGroupModal addGroup={props.addGroup} />
            <IconButton color="secondary" aria-label="delete" className="deletebutton">
              <RemoveCircleOutlineIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="left-items" style={props.view === 'users' ? { display: 'initial' } : {display: 'none'}}>
            <UserModal />
            <IconButton color="secondary" aria-label="delete" className="deletebutton">
              <RemoveCircleOutlineIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
    )
}

export default Sidebar;