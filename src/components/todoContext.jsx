//todoContext.js
import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
    {
        id:1,
        text: '코딩 배운거 복습하기',
        done: false
    },
    {
        id:2,
        text: '과외 알아보기',
        done: true
    },
    {
        id:3,
        text: '노래 글로 옮겨쓰기',
        done: false

    },
    {
        id:4,
        text: '영어 말하기 연습',
        done: true
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
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos)
    
    const nextId = useRef(5); //db에서는 .length를 통해 데이터 개수 구할 수 있음
    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    )
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error ('Todo프로바이더를 찾을 수 없음')
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error ('Todo프로바이더를 찾을 수 없음')
    }
    return context;
}
export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);
    if(!context) {
        throw new Error ('Todo프로바이더를 찾을 수 없음')
    }
    return context;
}