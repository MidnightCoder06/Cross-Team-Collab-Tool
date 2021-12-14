import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PurposeStatement from './components/PurposeStatement';
import TaskCreationContainer from './components/TaskCreationContainer';
import BugReportForm from './components/BugReportForm';

const App = ()  => (
  <Router>
    <Route exact path="/" component={LandingPage} />
    <Route path="/purpose-statement" component={PurposeStatement} />
    <Route path="/task-creation-container" component={TaskCreationContainer} />
    <Route path="/bug-report-form" component={BugReportForm} />
  </Router>
);

export default App;
