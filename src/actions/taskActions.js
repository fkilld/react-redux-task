import { v4 as uuidv4 } from 'uuid'

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
// Action to add a new task
export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    title,
  },
})

// Action to delete a task
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
})

// Action to update a task
export const updateTask = (id, title) => ({
  type: UPDATE_TASK,
  payload: {
    id,
    title,
  },
})
