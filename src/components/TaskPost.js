import React from 'react';

// individual post component. Takes all fields as props.
    // class mapping over an array and passing the props into a component that returns individual versions
const TaskPost = () => {
    return (
        <div>
            <p> Author: <span> Team Awesome</span></p>
            <p> Description: <span> Blah Blah </span></p>
            <p> Priority Level: <span> Immediate </span></p>
            <p> Engineer Type: <span> Frontend </span></p>
            <p> Date Posted: <span> 09/25/2009 </span></p>
        </div>
    );
}

export default TaskPost;

/*
This will need a way to edit and delete your post just like the lambda school challenge.
Watch Preston's fsa videos again.
*/