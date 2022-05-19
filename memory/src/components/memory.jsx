import React from   'react';
import CardBoard from './cardBoard.jsx';
import ScoreBoard from './scoreboard.jsx';
import shuffle from '../scripts/shuffle.js';
import ControlBack from './controlBack.jsx';
/**version fonctionnelle */
export default function Memory(props){
    const [nbrPairsFound,setNbrPairsFound]=React.useState(0);
    const [keys,setKeys]=React.useState(props.nbrPairs);
    const [images,setImages]=React.useState(test());
    const [cheat,setCheat]=React.useState(false);

    function find(){
        setNbrPairsFound(prev=>prev+1);
    }
    function back(){
        props.handleClick();
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
            key:elm.key+17,
            num:elm.key
            
        })
        )
        ]
        array=shuffle(array);
        return array;
    }


    
    return (
        <div className="memory">
            <ScoreBoard nbrPairs={props.nbrPairs} nbrPairsFound={nbrPairsFound}/>
           {nbrPairsFound===keys ?
           <div >
               <h1>GG click to start a new game</h1>
               <ControlBack handleClick={back}/>
            </div>:
           <CardBoard images={images} find={find} keys={keys} cheat={cheat}/>  }
           {nbrPairsFound<keys ?<ControlBack handleClick={back}/>:null}
           {nbrPairsFound<keys?<button onClick={()=>setCheat(prev=>!prev)}>cheat</button>:null}

        </div>
    )
}
/**version classe */