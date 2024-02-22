//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate

//components
import Cards from '../../reusable/cards';

const Techstack = () => {
    const techstacks = [
        {
            title: '',
            subtitle: '',
            picture: '',
            link: ''
        }
    ]
    return (
            <Cards files={techstacks} category={'techstack'} />
    )
};

export default Techstack;