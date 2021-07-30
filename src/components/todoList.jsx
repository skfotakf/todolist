import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './todoContext';
import TodoItem from './todoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

    /* 사이즈 조정이 잘되는지 확인하는 스타일 */
    /* background: #CCC; */

`;

function TodoList() {
    const todos = useTodoState();
    return(
        <TodoListBlock>
            {todos.map(todo =>(
                <TodoItem id={todo.id} done={todo.done} text={todo.text}/>
            ))}
           
        </TodoListBlock>
    )
}

export default TodoList