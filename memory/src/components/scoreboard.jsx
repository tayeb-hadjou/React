import React from 'react';
export default function ScoreBoard(props){

    return (
        <div className="scoreBoard">    
                <h4>pairs found: {props.nbrPairsFound}</h4> <h4>remaining pairs : {props.nbrPairs-props.nbrPairsFound}</h4>
        </div>
    )

}