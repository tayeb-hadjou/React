import React from 'react';
export default function Card(props){
    const style=()=>{
        if(props.displayed){
            if(props.find){
            return {
                opacity:0.5,
                width:110+'%',
                height:110+'%',
                border:'3px solid   rgb(151, 255, 86)'
            }
        }
            else{
                return {
                width:110+'%',
                height:110+'%',
                border :'2px solid   rgb(204, 201, 201)'
                }}
            }
            else{
                return {border :'2px solid   rgb(204, 201, 201)'}
            }
        }
    
    return (
        <div className="card" onClick={props.handleClick}  >
            <img src={props.imageURL}  style={style()}/>

        </div>
    )
}
