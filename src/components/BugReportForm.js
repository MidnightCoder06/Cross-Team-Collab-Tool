import React from 'react'
import '../styles/BugReportForm.css';
import { useNavigate } from 'react-router-dom';


const BugReportForm = () => {

    const navigate = useNavigate();

    const handleOnChange = () => {
        // TODO: make the entire form controlled 
    }

    const handleSubmit = () => {
        // TODO: add this and the metadata to the database
        navigate('/')
    }

    return (
        <>
        <h2 className='form-title'> Report a bug </h2>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h3> What type of engineer are you looking for?</h3>
                <select> 
                    <option value="Frontend"> Frontend </option>
                    <option value="Backend"> Backend </option>
                    <option value="Infrastructure"> Infrastructure </option>
                    <option value="DevOps"> DevOps </option>
                    <option value="Security"> Security </option>
                </select>

                <h3> What is the priority for this task? </h3>
                <select> 
                    <option value="Urgent"> Urgent (2 weeks) </option>
                    <option value="Upcoming"> Upcoming (4 weeks) </option>
                    <option value="Not-Urgent"> Not Urgent (8 weeks) </option>
                </select>

                <h3> Describe the bug </h3>
                <input 
                    name="description"
                    type="text"
                    placeholder="insert description here" 
                    onChange={handleOnChange} 
                />

                <div className='form-submit'>
                    <button> Submit </button>
                </div>
            </form>
        </div>
        </>
    );
}

export default BugReportForm;