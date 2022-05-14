import React from 'react';
import Card from './card.jsx';
export default function Memory(props){
const [images,setImages]=React.useState(props.images); 
let count = 0;
const imagesElement = images.map(image=>(
    <Card 
            key={image.id}
            imageURL={image.download_url}
            id={image.id}
    />
));

return (

    <div className="cardBoard">
        {imagesElement}
    </div>
)
}
/*
class Memory extends React.Component{
    constructor(props){
        super(props);
        this.state = {images:props.images}
    }
    render(){
        return (
            <div className="cardBoard">
                {this.props.images.map(image=>(
                    <Card
                        key={image.id}
                        imageURL={image.download_url}
                        id={image.id}
                    />
                ))}
            </div>
        )
    }
}
*/