import React from   'react';
import CardBoard from './cardBoard.jsx';
import ScoreBoard from './scoreboard.jsx';
import Control from './control.jsx';
import shuffle from '../scripts/shuffle.js';
/**version fonctionnelle */
export default function Memory(props){
    const [nbrPairsFound,setNbrPairsFound]=React.useState(0);
    const [keys,setKeys]=React.useState(props.nbrPairs);
    const [images,setImages]=React.useState(test());

    function find(){
        setNbrPairsFound(prev=>prev+1);
    }
    function changeNbrPairs(){
        console.log('test')
    }
    function test(){
        let array= props.images.data.slice();
        array=filled(array)
        return array;
    }
    function filled(data){
        let array= [
        ...data.map(elm=>({
            ...elm,
            num:elm.key,
            key:elm.key
            
        })),
        ...data.map(elm=>({
            ...elm,
            key:elm.key+12,
            num:elm.key
            
        })
        )
        ]
        array=shuffle(array);
        return array;
    }
  


    
    return (
        <div className="memory">
            <ScoreBoard nbrPairs={props.nbrPairs}/>
            {console.log(props.nbrPairs)}
            {console.log("de memory")}
            {console.log(images)}
           <CardBoard images={images} find={find} keys={keys}/>  
            <Control changeNbrPairs={changeNbrPairs}/>
        </div>
    )
}
/**version classe */