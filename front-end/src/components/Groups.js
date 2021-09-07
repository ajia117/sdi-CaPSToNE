import {Link, useHistory} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Groups (props){

    const [groups, setGroups] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:8080/all')
        .then(res=>res.json())
        .then(data=>{
            setGroups(data.groups)
        })
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
        props.renderUsers([props.group.id, props.group.name])
    }
    return (
        <Link to={`/Group_Users/${props.group.name}`} className="link">
            <div className="onegroup" onClick={handleClick}>
                {props.group.name}
            </div>
        </Link>
    )
}


export default Groups;
