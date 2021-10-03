import React from 'react';

// individual post component. Takes all fields as props.
const TaskPost = () => {
    return (
        <div>
            <p> Author: <span> Team Awesome</span></p>
            <p> Description: <span> Blah Blah </span></p>
            <p> Priority Level: <span> High </span></p>
            <p> Engineer Type: <span> Frontend </span></p>
            <p> Date Posted: <span> 09/25/2009 </span></p>
        </div>
    );
}

export default TaskPost;