/** @jsxImportSource @emotion/react */

//dependencies
import React, { useState } from 'react';

//components


//material ui --
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import ImageListItem from '@mui/material/ImageListItem';

//files

//styling
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

const CertModal = ({certificate}) => {
    const [openCertModal, setOpenCertModal] = useState(false);

    const openCertModalHandler = () => {
        setOpenCertModal(true);
    };

    const closeCertModalHandler = () => {
        setOpenCertModal(false);
    };

    return (
        <React.Fragment>
            <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`Info about ${certificate.title}.`}
                onClick={openCertModalHandler}
            >
                <InfoIcon />
            </IconButton>
            <BootstrapDialog
                onClose={closeCertModalHandler}
                aria-labelledby="customized-dialog-title"
                open={openCertModal}
                maxWidth='xl'
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {certificate.title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={closeCertModalHandler}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <ImageListItem key={certificate.title}>
                        <img
                            srcSet={`${certificate.picture}?auto=format&dpr=2 2x`}
                            src={`${certificate.picture}?auto=format`}
                            alt={certificate.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
};

export default CertModal;