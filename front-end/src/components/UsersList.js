import {useState, useEffect, useRef} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from 'react-select';
import AddCertModal from './AddCertModal.js';

function UsersList (props) {

    const [users, setUsers] = useState([])
    useEffect(()=>{
        /*fetch()
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
        .catch() */
        setUsers([{rank: 'SSG', first_name: 'Cody', last_name: 'Raymond'}, {rank: 'SSG', first_name: 'Paul', last_name: 'Dykes'}, {rank: 'SSG?', first_name: 'Andre', last_name: 'Jia'}])
    },[]);

    let userList = users.map((each,index)=>{
        return <MakeUser user={each} key={index}/>
    })
    const options = [
        {value: 'some training', label: 'Cyber Awareness'},
        {value: 'some more training', label: 'SERE 100.2'},
        {value: 'more training...', label: 'Accident Avoidance'},
        {value: 'last training...', label: 'OPSEC'}
    ]
    return (
        <div>
            <div>
                <h4 className="groupname">Group Name</h4>
            </div><br></br>
            <div>   
                <Select options={options} className="selectbar" placeholder="Filter by Certification..."/>
            </div>
            <div>
                {userList}
            </div>
        </div>
    )
}

function MakeUser (props) {
    let userData = props.user;

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
                        {`The rest of ${userData.rank} ${userData.last_name}, ${userData.first_name}'s data`}
                        <AddCertModal />
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default UsersList;