import {Link, useHistory} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Groups (){

    const [groups, setGroups] = useState([])
    
    useEffect(()=>{
        // fetch()
        // .then(res->res.json())
        // .then(data=>{
        //     setGroups(data)
        // })
        // .catch(err=>console.log(err)) 
        setGroups([{name: 'test group 1'}, {name: 'test group 2'}, {name: 'test group 3'}, {name: 'test group 4'}])
    },[])
    let groupRender = groups.map((each,index)=>{
        return <OneGroup group={each} key={index}/>
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
        <div className="onegroup">
            <Link to="/Group_Users" className="link">{group.name}</Link>
        </div>
    )
}


export default Groups;