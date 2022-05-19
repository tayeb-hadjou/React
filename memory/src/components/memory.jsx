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
    const [nbrTries,setNbrTires]=React.useState(0);
    function changeNbrTries(){
        setNbrTires(prev=>prev+1);
    }

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
            <ScoreBoard nbrPairs={props.nbrPairs} nbrPairsFound={nbrPairsFound} nbrTries={nbrTries}/>
           {nbrPairsFound===keys ?
           <div >
               <h1>GG you succeeded after :{Math.floor(nbrTries/2)}</h1>
               <h1>click to try again</h1>
               <ControlBack handleClick={back}/>
            </div>:
           <CardBoard images={images} find={find} keys={keys} cheat={cheat} changeNbrTries={changeNbrTries}/>  }
           <div className='bottonControl'>
           {nbrPairsFound<keys ?<ControlBack handleClick={back}/>:null}
           {nbrPairsFound<keys?<button onClick={()=>setCheat(prev=>!prev)} className='cheat'>cheat</button>:null}
           </div>
        
        </div>
    )
}
/**version classe */