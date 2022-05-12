import React from 'react';
export default function Meme(props) { 
    return (
    <div className='memeImageContainer'>
                <h2 className='meme--text top'>{props.meme.topText}</h2>
                <img src={props.meme.randomImage} alt='meme' className='memeImage'/>
                <h2 className='meme--text bottom'>{props.meme.bottomText}</h2>
    </div>
    )
}