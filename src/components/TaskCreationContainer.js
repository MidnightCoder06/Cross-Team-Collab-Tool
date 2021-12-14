import React, { useState, useEffect } from 'react'
import TaskCreationForm from './TaskCreationForm';

const tasksURL = 'http://localhost:5000/api/tasks'

const initialFormState = {
  id: '',
  description: '',
  author: '',
  priorityLevel: '',
  engineerType: ''
}

export default function Container() {

  ////////////// SLICES OF STATE //////////////

  const [tasks, setTasks] = useState([])
  const [formValues, setFormValues] = useState(initialFormState)

  ////////////// NETWORK HELPERS //////////////

  const getTasks = async () => {
      try {
        const resp = await fetch(tasksURL);
        const data = await resp.json();
        setTasks(data);
      } catch(err) {
        handleError(err);
      } 
  }

  const postTask = async ({ author, description, priorityLevel, engineerType }) => {
    try {
      const response = await fetch(tasksURL, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          author,
          description,
          priorityLevel, 
          engineerType
        })
      });
      const data = await response.json();
      setTasks([data, ...tasks]);
    } catch (err) {
        handleError(err);
    } finally {
      setFormValues(initialFormState);
    }
  }

  const putTask = async ({ id, author, description, priorityLevel, engineerType }) => {
    try {
      const response = await fetch(tasksURL + `/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          id,
          author,
          description,
          priorityLevel, 
          engineerType
        })
      });
      const data = await response.json();
      if (data) {
        const newTasks = tasks.map(task => {
          if(task.id === id) {
            return data;
          } else {
            return task;
          }
        });
        setTasks(newTasks);
      }
    } catch(err) {
        handleError(err);
    } finally {
      setFormValues(initialFormState);
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await fetch(tasksURL + `/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
      }
    } catch(err) {
        handleError(err);
    } finally {
        setFormValues(initialFormState);
    } 
  }

  ////////////// OTHER HELPERS //////////////

  const editTask = (id) => {
    const queriedTask = tasks.filter(task => task.id === id);
    setFormValues(queriedTask[0]);
  }

  const handleError = err => { console.error(err) } // eslint-disable-line

  const resetForm = () => setFormValues(initialFormState)

  ////////////// SIDE EFFECTS //////////////

  useEffect(() => getTasks(), [])

  return (
    <div className='container'>
      <h3> Create Task </h3>
      <ul>
        {
          tasks.map((q, i) => (
            <li key={q.id}>
              <div>
                  {' ' + q.description} 
                  {' ' + q.author}
                  {' ' + q.priorityLevel}
                  {' ' + q.engineerType}
                </div>
              <button onClick={() => editTask(q.id)}>Edit</button>
              <button onClick={() => deleteTask(q.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
      <TaskCreationForm
        values={formValues}
        setValues={setFormValues}
        postTask={postTask}
        putTask={putTask}
        reset={resetForm}
      />
    </div>
  )
}

