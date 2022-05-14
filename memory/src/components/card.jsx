import React from 'react';
export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageURL} id={props.id} className='imageToFind' />
        </div>
    )
}
/**version classe */
/*
class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageURL:props.imageURL,id:props.id}
    }
    render(){
        return (
            <div className="card">
                <img src={this.props.imageURL} id={this.props.id} className='imageToFind' />
            </div>
        )
    }
}
*/