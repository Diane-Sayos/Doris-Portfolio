//create cards for certifications --- input image && Cert Title && subtitle
//create modal when clicked --- input bigger picture of the certificate

//components
import Cards from '../../reusable/cards';

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


const Certifications = () => {
    const certificates = [
        {
            picture: one,
            title: "Introduction to Data visualization with ggplot2",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/5a6aa9025de3a317c495f202d1168fd805e6feb3'
        },
        {
            picture: two,
            title: "Feature Engineering with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/1efe5bad5b77337e1f5dc8412d53dd81b5fb782b'
        },
        {
            picture: three,
            title: "Introduction in Text Analysis with R",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/14f75311d7673ac510917ed3997b503fefd4b872'
        },
        {
            picture: four,
            title: "Introduction to the Tidyverse",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/b2aba09722c203041528ad0a8aadaf3f2f677b58'
        },
        {
            picture: five,
            title: "Machine Learning with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/080e71927b97ba2d4b1fdee5e77d291a16d4a495'
        },
        {
            picture: six,
            title: "Big Data Fundamentals with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/045683971c4710f99712ba6ba1fc9440b2adbedb'
        },
        {
            picture: seven,
            title: "Introduction to R",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/5dbb9c24ff3eab0502303cce5d97d41be8adc8e4'
        },
        {
            picture: eight,
            title: "Introduction to PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/bd0ebcd75a0e7a7a239dc7b0281b3c71ad21063c'
        },
        {
            picture: nine,
            title: "Big Data with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/track/466e68b93bce65c473551a6aa3dc441d0c0f76f5'
        },
        {
            picture: ten,
            title: "Building Recommendation Engines with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/8792d2401ac30a1b1c56e774f6f9f225f5b1aefb'
        },
        {
            picture: eleven,
            title: "NoSQL Concepts",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/f65bb7b367d341732434adc7194285eddb5a5024'
        },
        {
            picture: twelve,
            title: "Cleaning Data with PySpark",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/ffc019d7d438631b42cf1b7b374024e131ba58cd'
        },
        {
            picture: thirteen,
            title: "Intermediate R",
            subtitle: "datacamp",
            link: 'https://www.datacamp.com/statement-of-accomplishment/course/1a707d98a63d334ab75db7c7dab44982c76ff928'
        },
        {
            picture: fourteen,
            title: "MongoDB Basics",
            subtitle: "MongoDB University",
            link: 'https://university.mongodb.com/course_completion/a77a3d41-36c7-4161-9af4-acecc6ba09f7'
        }
    ];

    return (
        <Cards files={certificates} category={'certifications'} />
    )
};

export default Certifications;