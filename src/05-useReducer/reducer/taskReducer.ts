import * as z from "zod";

//Interfaces

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

//Types

    export type TaskAction = 
        |{ type: 'ADD_TODO', payload: string}
        |{ type: 'TOGGLE_TODO', payload: number}
        |{ type: 'DELETE_TODO', payload: number}

//Definir esquema de validación ZOD

    const TodoSchema = z.object(
        {
            id:z.number(),
            text: z.string(),
            completed: z.boolean()
        }
    )

    const TaskStateSchema = z.object(
        {
            todo: z.array(TodoSchema),
            length: z.number(),
            completed: z.number(),
            pending: z.number()
        }
    )

//Estado inicial

    export const getTasksInitialState = ():TaskState=>{

        //Traer listado de tareas de local storage:

            const localStorageState = localStorage.getItem("tasks-state")

            // Si está vacío:

                if (!localStorageState) {
                    return {
                        todo: [],
                        length:0,
                        completed:0,
                        pending:0
                    }
                }

            //Si hay data: Validar mediante ZOD

                const result = TaskStateSchema.safeParse(JSON.parse(localStorageState))

                if(result.error){
                    console.log(result.error)

                    return {
                        todo: [],
                        length:0,
                        completed:0,
                        pending:0
                    }
                }

                return result.data

    }


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
                length: state.todo.length+1,
                pending: state.pending +1,
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
                todo:updatedArray,
                completed: (updatedArray.filter((tarea)=>tarea.completed===true)).length,
                pending: (updatedArray.filter((tarea)=>tarea.completed===false)).length
            }
        } 

        case 'DELETE_TODO':{
            const updatedArray  = state.todo.filter((tarea)=> tarea.id !== action.payload)

            return {
                todo:updatedArray,
                length: updatedArray.length,
                completed: (updatedArray.filter((tarea)=>tarea.completed===true)).length,
                pending: (updatedArray.filter((tarea)=>tarea.completed===false)).length
            } 
        }
        default:
            return state 
    }
}

