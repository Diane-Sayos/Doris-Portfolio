/** @jsxImportSource @emotion/react */

//create cards for each project ----- input image, project title as LINK && description
//use modal when clicked ---- show sample pictures of project, && project title as LINK && description

//components
import Cards from './reusable/Cards';

const Projects = () => {
    const projects = [
        {
            title: '',
            subtitle: '',
            picture: '',
            link: ''
        }
    ]
    return (
            <Cards files={projects} category={'project'} />
    )
};

export default Projects;