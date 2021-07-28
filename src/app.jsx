import React from 'react'
import TodoTemplate from './components/todoTemplate';
import TodoHead from './components/todoHead'
import TodoList from './components/todoList';


import TodoCreate from './components/todoCreate';
import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
