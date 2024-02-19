/** @jsxImportSource @emotion/react */

//create cards for each project ----- input image, project title as LINK && description
//use modal when clicked ---- show sample pictures of project, && project title as LINK && description

const styles = {
    '.main-section': {
        margin: '1rem auto',
        display: 'flex',
        flexDirection: 'row wrap',
        border: '1px solid black',
        padding: 10,
    },
    '.projects-section': {

    },
};


const Projects = () => {
    return (
        <section css={[styles?.['.main-section'], styles]} className='projects-section'>
            <h2>PROJECTS</h2>
            

        </section>
    )
};

export default Projects;