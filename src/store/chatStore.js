import React from 'react'

const CTX = React.createContext();


const initState = {
    general: [
        {from: "boonee", msg: 'hello'},
        {from: "boonee", msg: 'hello'},
        {from: "boonee", msg: 'hello'},
    ]
}

function reducer(state, action){
    const {from, msg, task} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [task]:[
                    ...state[task],
                    {from,msg}
                ]
            }
            default:
                return state
    }
}

export default function chatStore(props){

// eslint-disable-next-line react-hooks/rules-of-hooks
const reducerHook = React.useReducer(reducer, initState );


    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}