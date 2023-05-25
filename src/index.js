import React from 'react'
import ReactDOM from 'react-dom/client'

// taskReduser возвращает обновленное состояние
function taskReduser(state, action) {
    switch (action.type) {
        case 'task/completed':
            const newArray = [...state]
            const elementIndex = newArray.findIndex(
                (el) => el.id === action.payload.id
            )
            newArray[elementIndex].completed = true
            return newArray

        default:
            break
    }
}

function createStore(reducer, initialState) {
    let state = initialState

    function getState() {
        return state
    }

    function dispatch(action) {
        state = reducer(state, action)
    }

    return { getState, dispatch }
}

const store = createStore(taskReduser, [
    { id: 1, description: 'Task 1', completed: false }
])
console.log(store)
const App = () => {
    console.log('store.getState(', store.getState())
    const completeTask = () => {
        store.dispatch({
            type: 'task/completed',
            payload: { id: 1 }
        })
        console.log(store.getState())
    }
    return (
        <>
            <h1>App</h1>
            <button onClick={completeTask}>Completed</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
