import React from 'react';
export default function Control2(props){
    const hard=16;
    const medium=10;
    const easy=6;


    return (<div className='nbrPairsChooseBoard'>
                       <h3>choose number of pairs</h3> 
                    <div className='nbrPairsChoose'>
                       <div>
                           <div onClick={()=>props.changeNbrPairs(easy)} value={easy} className='nbrPairs--easy'><span>{easy}</span></div>
                           
                           </div>
                       <div>
                           <div onClick={()=>props.changeNbrPairs(medium)} value={medium} className='nbrPairs--medium'><span>{medium}</span></div>
                           
                       </div>
                      <div>
                          <div onClick={()=>props.changeNbrPairs(hard)} value={hard} className='nbrPairs--hard'><span>{hard}</span></div>
                          
                      </div>
                    </div>
                    <div className='test'><span>easy</span><span>medium</span><span>hard</span></div>
            </div>)
}