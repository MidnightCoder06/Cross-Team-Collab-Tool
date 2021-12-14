import React from 'react'

// read some articles & watch some videos on how to make a great form
const BugReportForm = () => {

    const handleOnChange = () => {

    }

    const handleSubmit = () => {
        console.log('render thank you page') // prop -> title: filing a bug
    }

    return (
        <>
            <h2> Report a bug </h2>

            <div> Describe the bug </div>
            <input placeholder="insert description here" onChange={handleOnChange}> </input>
            
            <button onClick={handleSubmit}> Submit </button>
        </>
    );
}

export default BugReportForm;