import React from 'react';
import Form from './form.js';
import Meme from './meme.js';
import MemesData from '../data/memesData.js';
export default function MemeData() { 

    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:'http://i.imgflip.com/1bij.jpg'

    });
    function handleChangeForm(event){
        setMeme(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function formClick(){
        const memeURL = MemesData.data.memes[Math.floor(Math.random() * MemesData.data.memes.length)].url;
        setMeme(prev=>({           
                ...prev,
                randomImage:memeURL,
        }));
        
    }

    return (
    <div className='memeData'>
        <Form handleClick={formClick} handleChangeForm={handleChangeForm} meme={meme}/>  
        <Meme meme={meme} />      
    </div>
    )
}