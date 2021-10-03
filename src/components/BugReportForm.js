import React from 'react'

// read some articles & watch some videos on how to make a great form
const BugReportForm = () => {

    const handleSubmit = () => {
        console.log('render thank you page')
    }

    return (
        <>
        <div> Report a bug </div>

        <div> Describe the bug </div>
        <button onClick={handleSubmit}> Submit </button>
        </>
    );
}

export default BugReportForm;