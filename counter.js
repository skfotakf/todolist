import React, {useReducer} from 'react';

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () =>{
        dispatch({type:'INCREMENT'})
    }

    return (
        <button onClick={onIncrease}>+1</button>
    )
}