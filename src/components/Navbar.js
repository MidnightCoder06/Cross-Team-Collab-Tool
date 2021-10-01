import '../styles/Navbar.css'
import { useHistory } from 'react-router-dom';

/* create dropdown menu next
    https://www.youtube.com/watch?v=IF6k0uZuypA&t=110s
    https://www.youtube.com/watch?v=mN3P_rv8ad4
    https://www.youtube.com/watch?v=t8JK5bVoVBw

*/

const Navbar = () => {
    const history = useHistory();

    const handlePurposeStatementClick = () => {
        history.push('./purpose-statement');
    }

    const handleCreateTaskClick = () => {
        history.push('/task-creation-form');
    }

    const handleFileBugClick = () => {
        history.push('/bug-report-form');
    }

    return (
        <div id="parent">
            <button className="child" id="button" onClick={handlePurposeStatementClick}> Purpose </button>
            <select name="Sort" className="child"> 
                <option value="Priority"> Priority </option>
                <option value="Date Posted"> Date Posted </option>
            </select>
            <button className="child" id="button" onClick={handleCreateTaskClick}> Create a task </button>
            <a href="https://github.com/MidnightCoder06/Cross-Team-Collab-Tool"><div className="child"> Contribute </div></a>
            <button className="child" id="button" onClick={handleFileBugClick}> File a bug </button>
        </div>
    );
}

export default Navbar;