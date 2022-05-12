import React from 'react';
import Form from './form.js';
import Meme from './meme.js';
export default function MemeData() { 
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:'http://i.imgflip.com/1bij.jpg'

    });
    const [allMemes,setAllMemes]=React.useState([]);

    function handleChangeForm(event){
        setMeme(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
    }
    function formClick(){
        const memeURL = allMemes[Math.floor(Math.random() * allMemes.length)].url;
        setMeme(prev=>({           
                ...prev,
                randomImage:memeURL,
        }));
        
    }
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())    
        .then(data=>setAllMemes(data.data.memes))
    },[]);


    return (
    <div className='memeData'>
        <Form handleClick={formClick} handleChangeForm={handleChangeForm} meme={meme}/>  
        <Meme meme={meme} />      
    </div>
    )
}