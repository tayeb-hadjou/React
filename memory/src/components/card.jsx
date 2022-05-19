import React from 'react';
export default function Card(props){
    return (
        <div className="card" onClick={props.handleClick}  >
            <img src={props.imageURL}  style={
                props.find ?
                {opacity:0.5,width:110+'%',height:110+'%',border:'2px solid   rgb(151, 255, 86)'}
                :{border :'2px solid   rgb(204, 201, 201)',}}/>

        </div>
    )
}
