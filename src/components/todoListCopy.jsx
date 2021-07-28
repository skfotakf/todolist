import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import TodoItem from './todoItem';


const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;

    /* 사이즈 조정이 잘되는지 확인하는 스타일 */
    /*background: #CCC;*/

`;

function TodoList() {
    const [yesorno, setYes] =useState(false);
    const [localVisible, setLocalVisible] = useState(false);

    useEffect(() =>{
        if(localVisible && !yesorno){
            setYes(true);
            setTimeout(() =>setYes(false,250))
        }
        setLocalVisible(yesorno);
    }, [localVisible,yesorno])

    

    return(
        <TodoListBlock>
           <TodoItem done={!yesorno} text="테스트1" />
           <TodoItem done text="테스트2" />
           <TodoItem done text="테스트3" />
           <TodoItem done text="테스트4" />
        </TodoListBlock>
    )
}

export default TodoList;