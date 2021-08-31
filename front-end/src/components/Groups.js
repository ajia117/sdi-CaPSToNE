import {Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Groups (props){

    const [groups, setGroups] = useState([])
    
    useEffect(()=>{
        // fetch()
        // .then(res->res.json())
        // .then(data=>{
        //     setGroups(data)
        // })
        // .catch(err=>console.log(err)) 
        setGroups([{name: 'them bois'}, {name: 'chicas'}, {name: 'shquad'}, {name: 'yee yee'}])
    },[])
    // action={props.action}
    let groupRender = groups.map((each,index)=>{
        return <OneGroup group={each} key={index} view={props.view}/>
    })
    
    return (
        <div className="groups">
            {groupRender}
        </div>
    )
}

function OneGroup(props){
    let group = props.group
    return (
        <div className="onegroup" onClick={()=>{props.view()}}>
            <Link to="/Group_Users" className="link">{group.name}</Link>
        </div>
    )
}


export default Groups;