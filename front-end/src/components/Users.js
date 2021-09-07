import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
// import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
// import {AssignmentIcon} from '@material-ui/icons/Assignment';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import CardIcon from '@material-ui/icons/Payment';


// const catagory = [
//   {
//     value: 'Enlisted',
//     label: 'Enlisted',
//   },
//   {
//     value: 'Officer',
//     label: 'Officer',
//   },
//   {
//     value: 'Warrant Officer',
//     label: 'Warrant Officer',
//   },
// ];

const rank = [
  {
    value: 'E-1',
    label: 'Private',
  },
  {
    value: 'E-2',
    label: 'Private Second Class',
  },
  {
    value: 'E-3',
    label: 'Private First Class',
  },
  {
    value: 'E-4',
    label: 'Specialist/Corporal',
  },
  {
    value: 'E-5',
    label: 'Sergeant',
  },
  {
    value: 'E-6',
    label: 'Staff Sergeant',
  },
  {
    value: 'E-7',
    label: 'Sergeant First Class',
  },
  {
    value: 'E-8',
    label: 'Master Sergeant',
  },
  {
    value: 'E-9',
    label: 'Sargeant Major/Command Sergeant Major',
  },
  {
    value: 'O-1',
    label: '2nd Lieutenant',
  },
  {
    value: 'O-2',
    label: '1st Lieutenant',
  },
  {
    value: 'O-3',
    label: 'Captain',
  },
  {
    value: 'O-4',
    label: 'Major',
  },
  {
    value: 'O-5',
    label: 'Lieutenant Colonel',
  },
  {
    value: 'O-6',
    label: 'Colonel',
  },
  {
    value: 'O-7',
    label: 'Brigadier General',
  },
  {
    value: 'O-8',
    label: 'Major General',
  },
  {
    value: 'O-9',
    label: 'Lieutenant General',
  },
  {
    value: 'O-10',
    label: 'General',
  },
  {
    value: 'WO-1',
    label: 'Warrant Officer 1',
  },
  {
    value: 'WO-2',
    label: 'Chief Warrant Officer 2',
  },
  {
    value: 'WO-3',
    label: 'Chief Warrant Officer 3',
  },
  {
    value: 'WO-4',
    label: 'Chief Warrant Officer 4',
  },
  {
    value: 'WO-5',
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

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [text, setText] = React.useState('text');
  // const [catagories, setCatagory] = React.useState('');
  const [ranks, setRank] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dod, setDod] = React.useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // const handleCatagoryChange = (event) => {
  //   console.log(event.target.value)
  //   setCatagory(event.target.value);
  // };

  const handleRankChange = (event) => {
    console.log(event.target.value)
    setRank(event.target.value);
  };

  function handleFirstName(event){
    console.log(event.target.value)
    setFirstName(event.target.value)
  }

  function handleLastName(event){
    console.log(event.target.value)
    setLastName(event.target.value)
  }

  function handleEmail(event){
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  function handleDod(event){
    console.log(event.target.value)
    setDod(event.target.value)
  }

  // function handleSubmit(){
  //   props.addUser([catagories, ranks, firstName, lastName, email, dod, props.orgId, props.groupId[0]])
  //   setTimeout(props.close,300);
  // }

  function handleSubmit(){
    props.addUser([ranks, firstName, lastName, email, dod, props.orgId, props.groupId[0]])
    setTimeout(props.close,300);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

      <p></p>
      {/* <TextField
      required
              id="outlined-select-Catagory"
              select
              label="Catagory"
              value={catagories}
              onChange={handleCatagoryChange}
              helperText="Please select your Catagory"
              variant="outlined"
            >
              {catagory.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
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

            <p></p>
      <TextField
            required
            label="First Name"
            id="standard-start-adornment"
            onChange={handleFirstName}
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
          onChange={handleLastName}
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
            onChange={handleEmail}
            helperText="Please input your Email"
            InputProps={{
              startAdornment: <InputAdornment position="start"> <EmailIcon /> </InputAdornment>,
            }}
            variant="outlined"
            />

      <TextField
          required
          label="DODID"
          id="standard-start-adornment"
          onChange={handleDod}
          helperText="Please input your DODID #"
          InputProps={{
            startAdornment: <InputAdornment position="start"> <CardIcon /> </InputAdornment>,
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
        onClick={handleSubmit}
      >
        Submit
      </Button>
      </div>
    </form>

   
  );
}