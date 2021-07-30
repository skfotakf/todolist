//todoContext.js
import React, { createContext, useContext, useReducer } from 'react';

const initialTodos = [
    {
        id:1,
        text: '코딩 배운거 복습하기',
        done: false
    },
    {
        id:2,
        text: '과외 알아보기'
    },
    {
        id:3,
        text: '노래 글로 옮겨쓰기'
    },
    {
        id:4,
        text: '영어 말하기 연습'
    }
];

function todoReducer(state,action) {
    switch(action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo =>todo.id !==action.id);
        default:
            throw new Error(`action 핸들러가 없음: ${action.type}`)
    }
}


const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos)
    
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    return useContext(TodoStateContext)
}

export function useTodoDispatch(){
    return useContext(TodoDispatchContext)
}