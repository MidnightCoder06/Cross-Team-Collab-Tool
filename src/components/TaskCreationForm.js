import React from 'react'

const initialFormState = {
  id: '',
  author: '',
  description: '',
}

export default function TaskCreationForm(props) {
  const {
    values,
    setValues,
    postTask, 
    putTask
  } = props

  ////////////// EVENT HANDLERS //////////////

  const onCancel = evt => {
    evt.preventDefault();
    setValues(initialFormState);
  }

  const onSubmit = async (evt) => {
    evt.preventDefault();
    if(values.id === '') {
      postTask(values);
    } else {
      putTask(values);
    }
  }

  const onChange = evt => {
    if (evt.target.name === 'description') {
        let currState = {...values}
        currState.description = evt.target.value
        setValues(currState)
        
    } else if (evt.target.name === 'author') {
        let currState = {...values}
        currState.author = evt.target.value
        setValues(currState)
    }
  }

  ////////////// HELPER FUNCTIONS //////////////
  const isDisabled = () => {
    return !values.description.trim() || !values.author.trim()
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{values.id ? 'Edit' : 'Add New'} Task</h3>
      <input
        name='description'
        type='description'
        value={values.description}
        onChange={onChange}
        placeholder='Enter description'
      />
      <input
        name='author'
        type='description'
        value={values.author}
        onChange={onChange}
        placeholder='Enter author'
      />
      <button id='submitBtn' disabled={isDisabled()}>
        Submit {values.id ? 'Changes' : 'Task'}
      </button>
      <button id='cancelBtn' onClick={onCancel}>Cancel</button>
    </form>
  )
}

