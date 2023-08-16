import TodoFooter from "./components/todo-footer/TodoFooter";
import TodoHeader from "./components/todo-header/TodoHeader";
import TodoItems from "./components/todo-items/TodoItems";
import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch(action.type){
    case 'ADD':
      return [
        ...state,
        {
          id: uuidv4(),
          text: action.payload.text,
          isCompleted: false
        }
      ]
    case 'COMPLETED':
      return state.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted
          }
        }
        return el
      })
    case 'DELETE':
      return state.filter(el => el.id !== action.payload.id)
    case 'DELETEALLCOMPLETED':
      return state.filter(el => !el.isCompleted)
      
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer,[])
  return (
    <div className="App">
      <TodoHeader onAdd={(text) => {
        dispatch({
          type: 'ADD',
          payload: {
            text
          }
        })
      }}/>
      <TodoItems 
        todos={todos}
        onCompleted={(id) => {
          dispatch({
            type: 'COMPLETED',
            payload: {
              id
            }
          })
        }}
        onDelete={(id) => {
          dispatch({
            type: 'DELETE',
            payload: {
              id
            }
          })
        }}
      />
      <TodoFooter onCompletedDelete={() => {
        dispatch({
          type: 'DELETEALLCOMPLETED'
        })
      }}
        allLength={todos.length}
        completedLength={todos.filter(el => el.isCompleted).length}
      />
    </div>
  );
}

export default App;
