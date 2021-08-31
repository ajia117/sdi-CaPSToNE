import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import {AssignmentIcon} from '@material-ui/icons/Assignment';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';


const rank = [
  {
    value: 'Enlisted',
    label: 'Enlisted',
  },
  {
    value: 'Officer',
    label: 'Officer',
  },
  {
    value: 'Warrant Officer',
    label: 'Warrant Officer',
  },
];

const grade = [
  {
    value: 'Private',
    label: 'Private',
  },
  {
    value: 'Private Second Class',
    label: 'Private Second Class',
  },
  {
    value: 'Private First Class',
    label: 'Private First Class',
  },
  {
    value: 'Specialist/Corporal',
    label: 'Specialist/Corporal',
  },
  {
    value: 'Sergeant',
    label: 'Sergeant',
  },
  {
    value: 'Staff Sergeant',
    label: 'Staff Sergeant',
  },
  {
    value: 'Sergeant First Class',
    label: 'Sergeant First Class',
  },
  {
    value: 'Master Sergeant',
    label: 'Master Sergeant',
  },
  {
    value: 'Sargeant Major/Command Sergeant Major',
    label: 'Sargeant Major/Command Sergeant Major',
  },
  {
    value: '2nd Lieutenant',
    label: '2nd Lieutenant',
  },
  {
    value: '1st Lieutenant',
    label: '1st Lieutenant',
  },
  {
    value: 'Captain',
    label: 'Captain',
  },
  {
    value: 'Major',
    label: 'Major',
  },
  {
    value: 'Lieutenant Colonel',
    label: 'Lieutenant Colonel',
  },
  {
    value: 'Colonel',
    label: 'Colonel',
  },
  {
    value: 'Brigadier General',
    label: 'Brigadier General',
  },
  {
    value: 'Major General',
    label: 'Major General',
  },
  {
    value: 'Lieutenant General',
    label: 'Lieutenant General',
  },
  {
    value: 'General',
    label: 'General',
  },
  {
    value: 'Warrant Officer 1',
    label: 'Warrant Officer 1',
  },
  {
    value: 'Chief Warrant Officer 2',
    label: 'Chief Warrant Officer 2',
  },
  {
    value: 'Chief Warrant Officer 3',
    label: 'Chief Warrant Officer 3',
  },
  {
    value: 'Chief Warrant Officer 4',
    label: 'Chief Warrant Officer 4',
  },
  {
    value: 'Chief Warrant Officer 5',
    label: 'Chief Warrant Officer 5',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [text, setText] = React.useState('text');
  const [ranks, setRank] = React.useState('text');
  const [grades, setGrade] = React.useState('text');
  const [catagory, setCatagory] = React.useState('text');


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleRankChange = (event) => {
    setRank(event.target.value);
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

      <p></p>
      <TextField
      required
              id="outlined-select-rank"
              select
              label="Rank"
              value={ranks}
              onChange={handleRankChange}
              helperText="Please select your Rank"
              variant="outlined"
            >
              {rank.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
            required
              id="outlined-select-grade"
              select
              label="Grade"
              value={grades}
              onChange={handleGradeChange}
              helperText="Please select your Rank"
              variant="outlined"
            >
              {grade.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <p></p>
      <TextField
            required
            label="First Name"
            id="standard-start-adornment"
            onChange={handleChange}
            helperText="Please input your First name"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <PersonIcon /> </InputAdornment>,
            }}
            variant="outlined"

        />
          <TextField
          required
          label="Last Name"
          id="standard-start-adornment"
          onChange={handleChange}
          helperText="Please input your Last Name"
          InputProps={{
            startAdornment: <InputAdornment position="start"> <PersonIcon /> </InputAdornment>,
          }}
          variant="outlined"
        /> 
      

          <TextField
            required
            label="Email"
            id="standard-start-adornment"
            onChange={handleChange}
            helperText="Please input your Email"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <EmailIcon /> </InputAdornment>,
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
      >
        Submit
      </Button>
      </div>
    </form>

   
  );
}