
import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from '../actions/taskActions'

const initialState = {
  tasks: [
    {id:1,title:'idk azad'}
  ],
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      }
    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }
    case UPDATE_TASK:
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      }
    default:
      return state
  }
}

export default taskReducer
