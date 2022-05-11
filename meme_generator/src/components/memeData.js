import React from 'react';
import Form from './form.js';
import Meme2 from './meme2.js';
import MemesData from '../data/memesData.js';
export default function MemeData() { 

    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:'http://i.imgflip.com/1bij.jpg'

    });
    function formClick(){
        const memeURL = MemesData.data.memes[Math.floor(Math.random() * MemesData.data.memes.length)].url;
        setMeme(prev=>({           
                ...prev,
                randomImage:memeURL,
        }));
        
    }

    return (
    <div className='memeData'>
        <Form handleClick={formClick}/>  
        <Meme2 meme={meme} />      
    </div>
    )
}