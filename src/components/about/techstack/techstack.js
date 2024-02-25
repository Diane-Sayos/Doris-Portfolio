//create cards for certifications --- input image && Cert Title && School
//create modal when clicked --- input bigger picture of the certificate

//components
import Cards from '../../reusable/Cards';

//files
import cat from '../../header/catpic.jpeg';

const Techstack = () => {
    const techstacks = [
        {
            title: 'Python',
            subtitle: '',
            picture: cat,
            link: ''
        },
        {
            title: 'Javascript',
            subtitle: '',
            picture: cat,
            link: ''
        },
        {
            title: 'C++',
            subtitle: '',
            picture: cat,
            link: ''
        },
        {
            title: 'Github',
            subtitle: '',
            picture: cat,
            link: ''
        },
        {
            title: 'Visual Code',
            subtitle: '',
            picture: cat,
            link: ''
        },
    ]
    return (
            <Cards files={techstacks} category={'techstack'} />
    )
};

export default Techstack;