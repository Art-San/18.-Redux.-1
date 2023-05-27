import { createStore } from 'redux'
import { taskReducer } from './taskReducer'

const initialState = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false }
]

// const store = createStore(taskReducer, initialState) // можно так, а можно через экспрорт функции

export function initiateStore(params) {
  return createStore(taskReducer, initialState)
}