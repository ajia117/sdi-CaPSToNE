import React from 'react';
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

export default function RemoveGroup(props) {
  const classes = useStyles();
  const [groups, setGroup] = React.useState('text');
  const [remove, setRemove] = React.useState(undefined);
const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

// const group = props.groups;
  const group = [{group_name: 'Paul\'s Group'},{group_name: 'Cody\'s Group'},{group_name: 'Mark\'s Group'}]

  function handleChange(data){
    setRemove(data)
  }
  function handleDelete(){
    if(remove === undefined){
      alert('please select a group first')
    } else {
      props.deleteGroup(remove)
    }
}
return (
  <form className={classes.root} noValidate autoComplete="off">
    <div>

<TextField
      required
              id="outlined-select-Group"
              select
              label="Group"
              value={groups}
              onChange={handleGroupChange}
              helperText="Please select your Group"
              variant="outlined"
            >
              {group.map((option) => (
                <MenuItem key={option.group_name} onClick={()=>handleChange(option.group_name)} value={option.group_name}>
                  {option.group_name}
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