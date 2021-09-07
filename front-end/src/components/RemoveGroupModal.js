import GroupAddIcon from '@material-ui/icons/GroupAdd';
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RemoveGroup from './RemoveGroup.js'
import SendIcon from '@material-ui/icons/Send';
import { InputAdornment } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const classes = useStyles();


  return (
    <div>
      <IconButton color="secondary" aria-label="delete" className="deletebutton" onClick={handleClickOpen}>
              <RemoveCircleOutlineIcon fontSize="large" />
            </IconButton>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add User Info
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle id="alert-dialog-slide-title">{"Add Group Info"}</DialogTitle> */}
        <DialogContent>
      <RemoveGroup deleteGroup={props.deleteGroup} groups={props.groups}/>
      </DialogContent>
      </Dialog>
      
         
    </div>
  );
}



