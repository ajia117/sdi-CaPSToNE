import {useState, useEffect, useRef } from 'react';
import UserModal from './UserModal.js'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import IconButton from '@material-ui/core/IconButton';



function Sidebar (props) {
    const searchRef = useRef();
    const [searchbar, setSearchbar] = useState('');

    // useEffect(()=>{
    //     if (props.searchBar){
    //         setSearchbar('group')
    //     } else if (!props.searchBar){
    //         setSearchbar('user')
    //     }
    // },[]);

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
            <button>Export All -</button>
          </div>
            <br></br>
          <div className="left-items">
            <button>Remove Group -</button>
            <br></br><br></br>
            <IconButton color='secondary' aria-label="delete">
          <GroupAddIcon />
        </IconButton>
          </div>
          <UserModal />
        </div>
    )
}

export default Sidebar;