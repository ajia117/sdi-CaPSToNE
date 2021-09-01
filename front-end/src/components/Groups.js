import {Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Groups (props){

    const [groups, setGroups] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:8080/all')
        .then(res=>res.json())
        .then(data=>{
            setGroups(data)
        })
        .catch(err=>console.log(err)) 
        
        props.view('group')
    },[])
    let groupRender = groups.map((each,index)=>{
        return <OneGroup group={each} key={index} renderUsers={props.renderUsers} view={props.view}/>
    })
    
    return (
        <div className="groups">
            {groupRender}
        </div>
    )
}

function OneGroup(props){

    function handleClick(){
        props.renderUsers(props.group.group_id)
    }
    return (
        <Link to={`/Group_Users/${props.group.group_id}`} className="link">
            <div className="onegroup" onClick={handleClick}>
                {props.group.group_id}
            </div>
        </Link>
    )
}


export default Groups;