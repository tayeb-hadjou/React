import React from 'react';
export default function Form() {
    const valButton='GEt a new meme image'
    return (
        <div className='form'>
        <form>
                <input type='text' placeholder='top text'></input>
                <input type='text' placeholder='bottom text'></input>
                <button className='genButton'>{valButton}</button>

        </form>
        </div>
    )
}
