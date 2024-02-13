import React, { useState, Fragment } from 'react';
import emailjs from '@emailjs/browser';

import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 'bolder',
    padding: '5px',
    color: '#7f5539',
    alignSelf: 'center',
    lineHeight: 1.5,
    backgroundColor: 'white',
    borderColor: 'white',
    fontFamily: "Abel",
});

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [openSuccessNotif, setOpenSuccessNotif] = useState(false);

    const [openForm, setOpenForm] = useState(false);

    const openFormModalHandler = () => {
      setOpenForm(true);
    };
  
    const closeFormModalHandler = () => {
      setOpenForm(false);
    };

    const serviceId = "service_pbtbshk";
    const templateId = "template_b4b4ly7";
    const publicKey = "JxcTAhgwPAFVho8mf";

    const openSuccessNotifHandler = () => setOpenSuccessNotif(true);
    const closeSuccessNotifHandler = () => {
        setOpenSuccessNotif(false);
        setOpenForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        let templateParams = {
            from_name: name,
            from_phone: phone,
            from_email: email,
            message: message
          };
          emailjs.send(serviceId, templateId, templateParams, publicKey) //use your Service ID and Template ID
            .then(function (response) {
                setLoading(false);
                setName('');
                setEmail('');
                setMessage('');
                setPhone('');
                openSuccessNotifHandler();
            }, function (error) {
              console.log('FAILED...', error);
            });
    }
    return (
        <section className="contact">
            <article className='modal-container'>
                <Modal
                    open={ openSuccessNotif }
                    onClose={ closeSuccessNotifHandler }
                    aria-labelledby="Message Status"
                    aria-describedby="Message sent successfully."
                >
                    <Box sx={ style }>
                        <Typography id="message-status" variant="h6" component="h2">
                            Message Sent Successfully!
                        </Typography>
                    </Box>
                </Modal>
            </article>
            <article>
                <Fragment>
                    <BootstrapButton onClick={openFormModalHandler} className="navbar-link">
                        CONTACT
                    </BootstrapButton>
                    <Dialog
                        open={openForm}
                        onClose={closeFormModalHandler}
                    >
                        <DialogTitle>CONTACT</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            Please fill out the form below with your information.
                        </DialogContentText>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                label="Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                label="Email Address"
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                type="tel"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone"
                                label="Phone Number"
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                autoFocus
                                required
                                multiline
                                margin="dense"
                                cols="20"
                                rows="9"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                label="Message"
                                fullWidth
                                variant="outlined"
                            />
                        </DialogContent>
                        <DialogActions>
                            <BootstrapButton onClick={closeFormModalHandler}>Cancel</BootstrapButton>
                            <LoadingButton sx={{color: '#7f5539', borderColor: '#7f5539'}} onClick={(e) => handleSubmit(e)} loading={loading} loadingPosition="center" startIcon={<SendIcon />} variant="outlined">Send Message</LoadingButton>
                        </DialogActions>
                    </Dialog>
                </Fragment>
            </article>
        </section>
    )
};

export default Contact;