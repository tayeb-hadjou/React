import { func } from 'prop-types';
import React from 'react';
import Memes from '../data/memesData.js';
export default function Form() {
    const valButton='GEt a new meme image';
    function clickEvent(e) {
        ReactDOM.render(<img src={Memes.data.memes[0].url} />, document.getElementById('meme'));
    }
    return (
        <div className='form'>
                <input type='text' placeholder='top text'></input>
                <input type='text' placeholder='bottom text'></input>
                <button className='genButton' onClick={clickEvent}>{valButton}</button>

        </div>
    )
}
