import React from 'react';
export default function Control2(props){
    


    return (<div className='nbrPairsChooseBoard'>
                       <h3>choose nbrPairs</h3> 
                    <div className='nbrPairsChoose'>
                       <div>
                           <div onClick={()=>props.changeNbrPairs(5)} value='5' className='nbrPairs--easy'><span>5</span></div>
                           
                           </div>
                       <div>
                           <div onClick={()=>props.changeNbrPairs(7)} value='7' className='nbrPairs--medium'><span>7</span></div>
                           
                       </div>
                      <div>
                          <div onClick={()=>props.changeNbrPairs(12)} value='12'className='nbrPairs--hard'><span>12</span></div>
                          
                      </div>
                    </div>
                    <div className='test'><span>easy</span><span>medium</span><span>hard</span></div>
            </div>)
}