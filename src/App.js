import './App.css';
//main template --- header, main section, footer
import Root from './Root.js';
//main sections

//Home  --- About, Techstack, Certifications
import Home from './Home/Home.js';
import Projects from './Projects.js';


import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root /> }>
    <Route path='/' element={ <Home /> } />
    <Route path='/projects' element={ <Projects /> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={ appRouter } />
  );
}

export default App;

