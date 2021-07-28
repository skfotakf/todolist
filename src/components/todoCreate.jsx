import React,{useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';


const CircleButton = styled.div`
    background: #38d9a9;
    &:hover{
        background: #63e6be
    }
    &:active{
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    border-radius:50%;
    border:none;
    outline: none;
    display:flex;
    color: white;

    transition: 0.12s all ease-in;
    ${props =>
        props.done && css`
        
        &:hover{
            background: #fa5252;
        }
        &:active{
            background: #fa8787;
        }
        transform: translate(-50%,50%) rotate(45deg)
        `
            
    }
`;

const InsertForm = styled.form`
    padding: 50px;
    background: #f8f9fa;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 32px;
    padding-right: 72px;
    
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
    
    border: 1px solid #dee2e6;
`;

const FormDiv = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () =>setOpen(!open)
    return(
        <>
        
        <FormDiv>
        {open && 
            <InsertForm>
                <Input autoFocus placeholder="ToDo를 입력 후 Enter 키를 누르세요." />
            </InsertForm>
        }
        
        <CircleButton onClick={onToggle} done>
            <MdAdd />
        </CircleButton>
        </FormDiv>
        
    </>
    )
}

export default TodoCreate;