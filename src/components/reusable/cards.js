/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';

//components
import CertCard from './certcard';

//material ui --- 
import ImageList from '@mui/material/ImageList';

//styling
const styles = {
    '.certification-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },
    '.techstack-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },
    '.projects-section': {
        textAlign: 'center',
        padding: '1rem 1rem 3rem 1rem'
    },

};
//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate


const Cards = ({files, category}) => {
    return (
            <section css={[styles?.[`.${category}-section`], styles]} className={`${category}-section`}>
                <ImageList sx={{ width: '100%', height: '80vh' }} gap={10}>
                    {files.map((file) => (
                        <CertCard file={file} category={category}/>
                    ))}
                </ImageList>
            </section>
    )
};

export default Cards;