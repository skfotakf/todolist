import React from 'react'
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead'
import TodoList from './components/todoList';


import TodoCreate from './components/todoCreate';
import {createGlobalStyle} from 'styled-components';
import { TodoProvider } from './components/todoContext';


const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;
