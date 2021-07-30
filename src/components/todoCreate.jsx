import React,{useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './todoContext';

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
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () =>setOpen(!open);
    const onChange =  e =>setValue(e.target.value);
    const onSubmit = e =>{
        e.preventDefault(); //새로고침방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current +=1;
    }
    return(
        <>
        
        <FormDiv>
        {open && 
            <InsertForm onSubmit={onSubmit}>
                <Input autoFocus placeholder="ToDo를 입력 후 Enter 키를 누르세요." value={value} onChange={onChange}/>
            </InsertForm>
        }
        
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
        </FormDiv>
        
    </>
    )
}

export default React.memo(TodoCreate);