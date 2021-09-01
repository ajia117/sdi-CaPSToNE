import {useState, useEffect, useRef} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from 'react-select';
import AddCertModal from './AddCertModal.js';
import { useHistory } from 'react-router-dom';

function UsersList (props) {
    
    const [users, setUsers] = useState([])
    const [filtered, setFiltered] = useState([])
    useEffect(()=>{
        /*fetch()
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
        .catch() */
        setUsers([{rank: 'SSG', first_name: 'Cody', last_name: 'Raymond', cyber_awareness: true, sere_100_2: false, accident_avoidance: true}, {rank: 'SSG', first_name: 'Paul', last_name: 'Dykes', cyber_awareness: true, sere_100_2: true, accident_avoidance: false}, {rank: 'COL?', first_name: 'Andre', last_name: 'Jia', cyber_awareness: true, sere_100_2: true, accident_avoidance: true},{rank: 'SGT', first_name: 'Cherokee', last_name: 'Walters', cyber_awareness: true, sere_100_2: false, accident_avoidance: false},{rank: 'SGT', first_name: 'Mark', last_name: 'Arbuckle', cyber_awareness: false, sere_100_2: true, accident_avoidance: true}])
        setFiltered([{rank: 'SSG', first_name: 'Cody', last_name: 'Raymond', cyber_awareness: true, sere_100_2: false, accident_avoidance: true}, {rank: 'SSG', first_name: 'Paul', last_name: 'Dykes', cyber_awareness: true, sere_100_2: true, accident_avoidance: false}, {rank: 'COL', first_name: 'Andre', last_name: 'Jia', cyber_awareness: true, sere_100_2: true, accident_avoidance: true},{rank: 'SGT', first_name: 'Cherokee', last_name: 'Walters', cyber_awareness: true, sere_100_2: false, accident_avoidance: false},{rank: 'SGT', first_name: 'Mark', last_name: 'Arbuckle', cyber_awareness: false, sere_100_2: true, accident_avoidance: true}])
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
                <h4 className="groupname">Group Name</h4>
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