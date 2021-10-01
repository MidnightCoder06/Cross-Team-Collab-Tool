import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PurposeStatement from './components/PurposeStatement';
import TaskCreationForm from './components/TaskCreationForm';
import BugReportForm from './components/BugReportForm';

const App = ()  => (
  <Router>
    <Route exact path="/" component={LandingPage} />
    <Route path="/purpose-statement" component={PurposeStatement} />
    <Route path="/task-creation-form" component={TaskCreationForm} />
    <Route path="/bug-report-form" component={BugReportForm} />
  </Router>
);

export default App;
