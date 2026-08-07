interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState{
    todo: Todo[],
    length: number,
    completed: number,
    pending: number
}

export type TaskAction = 
    |{ type: 'ADD_TODO', payload: string}
    |{ type: 'TOGGLE_TODO', payload: number}
    |{ type: 'DELETE_TODO', payload: number}

export const taskReducer = (state:TaskState, action:TaskAction):TaskState=>{

    switch (action.type) {
        case 'ADD_TODO':{
            const newTodo:Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false
            }
            return {
                ...state,
                todo: [...state.todo, newTodo],
            }
        }
        case 'TOGGLE_TODO':{

         const updatedArray = state.todo.map((tarea)=>{
            if (tarea.id === action.payload) {
                return{
                    ...tarea,
                    completed: !tarea.completed
                }
                } else{
                    return tarea
                }
             })  

            return {
                ...state,
                todo:updatedArray
            }
        } 
        case 'DELETE_TODO':{

            const updatedArray  = state.todo.filter((tarea)=> tarea.id !== action.payload)

            return {
                ...state,
                todo:updatedArray
            } 
        }
        default:
            return state 
    }
}

