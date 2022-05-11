import React from 'react';
export default function Form(props){
    const valButton='GEt a new meme image';
    return (
    <div className='form'>
            <input type='text' placeholder='top text'></input>
            <input type='text' placeholder='bottom text'></input>
            <button className='genButton' onClick={props.handleClick}>{valButton}</button>
        </div>
    )
}