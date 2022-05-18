import React from 'react';
export default function Card(props){
    const style=props.find ?{border:'2px solid   rgb(151, 255, 86)'}:{border :'2px solid   rgb(204, 201, 201)',}

    return (
        <div className="card" onClick={props.handleClick}  style={style}>
            <img src={props.imageURL}  style={props.find?{opacity:0.5}:{}}/>

        </div>
    )
}
