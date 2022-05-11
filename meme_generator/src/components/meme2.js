import React from 'react';
import MemesData from '../data/memesData.js';
export default function Meme2(props) { 
    

    return (

             <img src={props.meme.randomImage} alt='meme' className='memeImage'/>
    )
}