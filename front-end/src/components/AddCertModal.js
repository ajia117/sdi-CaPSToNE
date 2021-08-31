import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddCert from './AddCert.js';
import SendIcon from '@material-ui/icons/Send';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add 350-1 Certificate
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Add Certificate"}</DialogTitle>
        <DialogContent>
      <AddCert />
      </DialogContent>
      </Dialog>
        {/* <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SendIcon />}
      >
        Submit
      </Button> */}
         
    </div>
  );
}