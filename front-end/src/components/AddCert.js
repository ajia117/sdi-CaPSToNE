import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';



const certs = [
  {
    value: 'SERE 100.2',
    label: 'SERE 100.2',
  },
  {
    value: 'Cyber Awareness',
    label: 'Cyber Awareness',
  },
  {
    value: 'OPSEC',
    label: 'OPSEC',
  },
  {
    value: 'Accident Avoidance',
    label: 'Accident Avoidance',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
      width: '25ch',
    },
  },
}));

export default function AddCert() {
  const classes = useStyles();
  const [text, setText] = React.useState('text');
  const [cert, setCerts] = React.useState('text');
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCertChange = (event) => {
    setCerts(event.target.value);
  };

    return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>

      <p></p>

      <TextField
      
        id="outlined-select-cert"
        select
        label= "350-1 Certs"
        value={cert}
        onChange={handleCertChange}
        variant="outlined"
      >
        {certs.map((option) => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </TextField>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          label="Completion Date"
          variant="dialog"
          format="MMM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
        />
        
      </MuiPickersUtilsProvider>

      
      <label htmlFor="contained-button-file">
        {/* <Button variant="contained" color="primary" component="span" accept="image/*"
          className={classes.input}
          id="contained-button-file"
          type="file">
          Upload
        </Button> */}
      </label>
      <input
          accept=".pdf"
          className={classes.input}
          id="contained-button-file"
          type="file"
        /> 

      <br></br><br></br>
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