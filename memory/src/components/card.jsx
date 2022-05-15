import React from 'react';
export default function Card(props){
    const style=props.find ?
    {
        border:'2px solid   rgb(151, 255, 86)'
        
    }:{
        border :'2px solid   rgb(204, 201, 201)',  
    }

    return (
        <div className="card" onClick={props.handleClick} find={props.find} style={style}>
            <img src={props.imageURL} id={props.id} className='imageToFind' style={props.find?{opacity:0.5}:{}}/>

        </div>
    )
}
/**version classe */
/*
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageURL:props.imageURL,id:props.id}
        this.handleClick=this.handleClick.bind(this);
        this.style=props.find ?
        {
            border:'2px solid   rgb(151, 255, 86)'
        }:{
            border :'2px solid   rgb(204, 201, 201)',
        }
    }
    render(){
        return (
            <div    className="card" onClick={props.handleClick}>
                <img src={this.props.imageURL} id={this.props.id} className='imageToFind' />
            </div>
        )
    }
}
*/