import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PeopleIcon from '@material-ui/icons/People';
import {AssignmentIcon} from '@material-ui/icons/Assignment';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import CardIcon from '@material-ui/icons/Payment';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [text, setText] = React.useState('text');
  const [group, setGroup] = React.useState('')


  const handleChange = (event) => {
    setGroup(event.target.value)
    setText(event.target.value);
  };

  function addGroup(){
    props.addGroup([group, props.orgId])
    setTimeout(props.close, 300);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

      <p></p>
      
      <TextField
            required
            label="Group Name"
            id="standard-start-adornment"
            onChange={handleChange}
            helperText="Please input your Groups name"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <PeopleIcon /> </InputAdornment>,
            }}
            variant="outlined"

        />
          
              <p></p>

              <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SendIcon />}
        onClick={addGroup}
      >
        Submit
      </Button>
      </div>
    </form>

   
  );
}