/** @jsxImportSource @emotion/react */

//dependencies
// import { css } from '@emotion/react';

//components
import CertCard from './certcard';

//material ui --- 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

//files
import one from './1.jpeg';
import two from './2.jpeg';
import three from './3.jpeg';
import four from './4.jpeg';
import five from './5.jpeg';
import six from './6.jpeg';
import seven from './7.jpeg';
import eight from './8.jpeg';
import nine from './9.jpeg';
import ten from './10.jpeg';
import eleven from './11.jpeg';
import twelve from './12.jpeg';
import thirteen from './13.jpeg';
import fourteen from './14.jpeg';


//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate


const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    },
    '.certification-section': {

    },
};


const Certifications = () => {
    const certificates = [
        {
            picture: one,
            title: "Introduction to Data visualization with ggplot2",
            school: "datacamp"
        },
        {
            picture: two,
            title: "MongoDB Basics",
            school: "MongoDB University"
        },
        {
            picture: three,
            title: "Introduction in Text Analysis with R",
            school: "datacamp"
        },
        {
            picture: four,
            title: "Introduction to the Tidyverse",
            school: "datacamp"
        },
        {
            picture: five,
            title: "Machine Learning with PySpark",
            school: "datacamp"
        },
        {
            picture: six,
            title: "Big Data Fundamentals with PySpark",
            school: "datacamp"
        },
        {
            picture: seven,
            title: "Introduction to R",
            school: "datacamp"
        },
        {
            picture: eight,
            title: "Introduction to PySpark",
            school: "datacamp"
        },
        {
            picture: nine,
            title: "Big Data with PySpark",
            school: "datacamp"
        },
        {
            picture: ten,
            title: "Building Recommendation Engines with PySpark",
            school: "datacamp"
        },
        {
            picture: eleven,
            title: "NoSQL Concepts",
            school: "datacamp"
        },
        {
            picture: twelve,
            title: "Cleaning Data with PySpark",
            school: "datacamp"
        },
        {
            picture: thirteen,
            title: "Intermediate R",
            school: "datacamp"
        },
        {
            picture: fourteen,
            title: "Feature Engineering with PySpark",
            school: "datacamp"
        }
    ];

    return (
        <section css={[styles?.['.main-section'], styles]} className='certification-section'>
            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">CERTIFICATIONS</ListSubheader>
                </ImageListItem>
                {certificates.map((certificate) => (
                    <CertCard certificate={certificate} />
                ))}
            </ImageList>
        </section>
    )
};

export default Certifications;