import React, {useState, useEffect, useRef} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from 'react-select';
import AddCertModal from './AddCertModal.js';
import { useHistory } from 'react-router-dom';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';


function UsersList (props) {
    
    const [users, setUsers] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8080/group/${props.users[0]}`)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
            setFiltered(data)
        })
        .catch() 
        props.view('users')
    },[]);

    function handleChange(option){
        if (option.value === 'no_filter'){
            setFiltered(users)
        } else {
            let certFilter = users.filter(each=>{
                return each[option.value] === false;
            })
            setFiltered(certFilter)
        }
    }

    let userList = filtered.map((each,index)=>{
        return <MakeUser user={each} key={index}/>
    })
    const history = useHistory();

    function groupView(){
        history.push('/Groups');
    }
    const options = [
        {value: 'no_filter', label: 'No filter'},
        {value: 'cyber_awareness', label: 'Cyber Awareness'},
        {value: 'sere_100_2', label: 'SERE 100.2'},
        {value: 'accident_avoidance', label: 'Accident Avoidance'},
        {value: 'opsec', label: 'OPSEC'}
    ]
    return (
        <div>
            <div>
                <button onClick={groupView}>{`< Group View`}</button>
                <h4 className="groupname">{props.users[1]}</h4>
            </div><br></br>
            <div>   
                <Select options={options} onChange={handleChange} className="selectbar" placeholder="Filter by Certification..."/>
            </div>
            <div>
                {userList}
            </div>
        </div>
    )
}

function MakeUser (props) {
    let userData = props.user;
    const [userInfo, setUserInfo] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8080/user/${userData.id}/trackers`)
        .then(res=>res.json())
        .then(data=>{
            setUserInfo(data)
        })
        .catch()
    },[]);

    return (
        <div className="accordion">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>{`${userData.rank} ${userData.last_name}, ${userData.first_name}`}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                        {userInfo.map((each,index)=>{
                            return <li key={index}>{`${each.sub_categories_title} - Due: ${each.due_date}`}</li>
                        })}
                        </ul>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                            <AddCertModal style={{width: '70%'}}/>
                            <IconButton color="secondary" aria-label="delete" className="deletebutton" style={{width: '20%'}}>
                                <RemoveCircleOutlineIcon fontSize="large" />
                            </IconButton>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default UsersList;
