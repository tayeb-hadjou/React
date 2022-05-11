import React from 'react';
export default function Form(props){
    const valButton='GEt a new meme image';
    return (
    <div className='form'>
            <input 
                type='text' 
                placeholder='top text' 
                onChange={props.handleChangeForm} 
                name="topText" 
                value={props.meme.topText}>

            </input>
            <input 
                type='text' 
                placeholder='bottom text' 
                onChange={props.handleChangeForm} 
                name="bottomText" 
                value={props.meme.bottomText}>

            </input>
            <button className='genButton' onClick={props.handleClick}>{valButton}</button>
        </div>
    )
}