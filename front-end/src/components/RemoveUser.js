import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';// import { InputAdornment } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RemoveUser(props) {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState('');
  const [remove, setRemove] = React.useState(undefined);

    useEffect(()=>{
        /*
        fetch(*users*)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
        .catch()
        */
    },[]);

const handleUserChange = (event) => {
    setUser(event.target.value);
  };

// const user = props.users;
  const dummyusers = [{user_name: 'Paul'},{user_name: 'Cody'},{user_name: 'Mark'}]

  function handleChange(data){
    setRemove(data)
  }
  function handleDelete(){
    if(remove === undefined){
      alert('please select a user first')
    } else {
      props.deleteUser(remove)
    }
}
return (
  <form className={classes.root} noValidate autoComplete="off">
    <div>

<TextField
      required
              id="outlined-select-User"
              select
              label="User"
              value={user}
              onChange={handleUserChange}
              helperText="Please select your User"
              variant="outlined"
            >
              {dummyusers.map((option) => (
                <MenuItem key={option.user_name} onClick={()=>handleChange(option.user_name)} value={option.user_name}>
                  {option.user_name}
                </MenuItem>
              ))}
            </TextField>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<DeleteForeverIcon />}
        onClick={handleDelete}
      >
        Remove
      </Button>
        </div>
    </form>
    )
}