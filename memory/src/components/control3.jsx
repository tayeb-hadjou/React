import React from 'react';
export default function Control(props){
    const [control,setControl]=React.useState({
        nbrPairs:props.nbrPairs,

    });
    function handleChange(event){
        setControl({
            ...control,
            [event.target.name]:event.target.value
        });
        console.log(control);

    }
    return (
        <div className="control">
                <label forhtml="nbr_pairs">choose the number of pairs(below 16)</label>
                <input type="number" id="nbr_pairs" name="nbrPairs"  max="2" onChange={handleChange}/>
                <button onClick={()=>props.changeNbrPairs(control.nbrPairs)}>start</button>
                <button onClick={()=>console.log('test')}>TEST</button>

        </div>
    )
}