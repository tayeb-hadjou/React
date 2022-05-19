import React from 'react';
export default function ControlBack(props){
    return(
        <div onClick={props.handleClick} className='back '>
            <span>&lt;- back</span>
        </div>
    )
}