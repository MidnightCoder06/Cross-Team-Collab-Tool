import React from 'react';

// read some articles & watch some videos on how to make a great form
const TaskCreationForm = () => {

    const handleSubmit = () => {
        console.log('render thank you page') // prop -> title: creating a task
        // post request to the backend
    }
    return (
        <>
        <h2> Create Task </h2>
        <div>
            <p> Author: </p>
            <p> Description </p>
            <p> Priority Level </p>
            <p> Engineer Type </p>
            <p> Date Posted </p>
            <button onClick={handleSubmit}> Submit </button>
        </div>
        </>
    ) 
}

export default TaskCreationForm;

/*
-task description
    -team that needs the help
    -type of engineer they need
    -date posted
    -urgency level
*/