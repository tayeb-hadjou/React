import React from 'react';
import Memes from '../data/memesData.js';
export default function Meme() {
    const [memImage,setMemeImage]=React.useState('');
    function clickEvent(e) {
        const meme = Memes.data.memes[Math.floor(Math.random() * Memes.data.memes.length)];
        setMemeImage(meme);
    }
    const valButton='GEt a new meme image';
    return (
    <div id='meme'>
        <div className='form'>
            <input type='text' placeholder='top text'></input>
            <input type='text' placeholder='bottom text'></input>
            <button className='genButton' onClick={clickEvent}>{valButton}</button>
        </div>
            {memImage && <img src={memImage.url} alt='meme' className='memeImage'/>}
        
        
    </div>
    )
}