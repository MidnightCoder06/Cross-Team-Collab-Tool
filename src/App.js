import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PurposeStatement from './components/PurposeStatement';
import TaskCreationContainer from './components/TaskCreationContainer';
import BugReportForm from './components/BugReportForm';
import NotFoundPage from './components/404page';


/* using v6 of react router

“catch all” route that will be rendered if none of your other routes match -> 404 page.

Unlike previous versions of React Router, the order of the children Routes doesn’t matter since Routes is intelligent – meaning an algorithm now determines which is the best Route to render. This makes rendering a 404 component pretty simple.

All you have to do is render a Route with a path of *, and React Router will make sure to only render the element if none of the other Routes match.

*/

// v6 uses element instead of component ... the angle bracket weren't needed around the component before
const App = ()  => (
  <Routes>
    <Route path="/" element={ <LandingPage/> } />
    <Route path="/purpose-statement" element={ <PurposeStatement />} />
    <Route path="/task-creation-container" element={ <TaskCreationContainer />} />
    <Route path="/bug-report-form" element={ <BugReportForm />} />
    <Route path="*" element={ <NotFoundPage />} />
  </Routes>
);

export default App;
