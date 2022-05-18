import React from   'react';
import CardBoard from './cardBoard.jsx';
import ScoreBoard from './scoreboard.jsx';
import Control from './control.jsx';
import shuffle from '../scripts/shuffle.js';
/**version fonctionnelle */
export default function Memory(props){
    const [nbrPairsFound,setNbrPairsFound]=React.useState(0);
    const [keys,setKeys]=React.useState(props.nbrPairs);
    const [images,setImages]=React.useState(props.images);
    function find(){
        setNbrPairsFound(prev=>prev+1);
    }
    function changeNbrPairs(){
        console.log('test')
    }
    let id=props.nbrPairs;
    let key1=props.nbrPairs;
    let key2=props.nbrPairs;
  


    
    return (
        <div className="memory">
            <ScoreBoard nbrPairs={props.nbrPairs}/>
            {console.log(props.nbrPairs)}
           <CardBoard images={images.data} find={find} keys={keys}/>  
            <Control changeNbrPairs={changeNbrPairs}/>
        </div>
    )
}
/**version classe */