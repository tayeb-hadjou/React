import React from 'react';
import MemesData from '../data/memesData.js';
export default function Meme() { 

    const [allMemeImages,setAllMemeImages]=React.useState(MemesData);
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:'http://i.imgflip.com/1bij.jpg'

    });

    function clickGetImage(e) {
        const memeURL = MemesData.data.memes[Math.floor(Math.random() * MemesData.data.memes.length)].url;
        setMeme(prev=>{
            return{
                ...prev,
                randomImage:memeURL,
        }

        });
    }
    const valButton='GEt a new meme image';
    return (
    <div id='meme'>
        <div className='form'>
            <input type='text' placeholder='top text'></input>
            <input type='text' placeholder='bottom text'></input>
            <button className='genButton' onClick={clickGetImage}>{valButton}</button>
        </div>
             <img src={meme.randomImage} alt='meme' className='memeImage'/>
        
        
    </div>
    )
}