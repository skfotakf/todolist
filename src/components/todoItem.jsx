import React from 'react';
import styled from 'styled-components';

import {MdDelete} from 'react-icons/md';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
`;

const CheckCircle = styled.div`
    display: flex;    
    width: 32px;
    height: 32px;
    
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

     
`;

function TodoItem({text}) {
    return (
        <TodoItemBlock>
            <CheckCircle></CheckCircle>
            <Text>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;