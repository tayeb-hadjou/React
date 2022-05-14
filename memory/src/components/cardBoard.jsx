import React from 'react';
import Card from './card.jsx';
export default function Memory(props){
const [images,setImages]=React.useState(props.images); 
function changeDisplay(id){
    setImages(prev => prev.map(elm=> elm.id === id && !elm.find ? {...elm,displayed:!elm.displayed} : elm))
}
const imagesElement = images.map(image=>(
    
    <Card   {...image}
            imageURL={image.displayed?image.url:'./images/inconnu.jpg'}
            handleClick={()=>changeDisplay(image.id)}
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
    displayImage(id){
        this.setState(prev=>prev.images.map(elm=> elm.id === id && !elm.find ? {...elm,displayed:!elm.displayed} : elm))
    }
    
    render(){
        return (
            <div className="cardBoard">
                {this.props.images.map(image=>(
                    <Card   {...image}
                            imageURL={image.displayed?image.url:'./images/inconnu.jpg'}
                            handleClick={()=>this.changeDisplay(image.id)}
                    />
                ))}
            </div>
        )


}
*/