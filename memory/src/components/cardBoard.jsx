import React from 'react';
import Card from './card.jsx';

export default function Memory(props){
const [images,setImages]=React.useState(props.images); 

function handleClick(id){
    const find=elm=>elm.id===id;
    let index=images.findIndex(find); 
    let newImageState=images[index];
    
    if(!newImageState.displayed){
        changeDisplay(newImageState,index);
    }
    else{
        if(!newImageState.find){
            changeDisplay(newImageState,index);
        }
    }
    
    isFound(newImageState,index);
    
    //console.log(images);
}
function changeDisplay(newImageState,index){
    newImageState.displayed=!newImageState.displayed;
    setImages([...images.slice(0,index),newImageState,...images.slice(index+1)]);
}

function isFound(newImageState,index){
     const find = elm=> elm.key === newImageState.key && elm.id !== newImageState.id;
     let index2 = images.findIndex(find);
     if(index2>=0 ){
        let newImageState2=images[index2];
        //console.log(newImageState2);
        if(newImageState2.displayed){
            newImageState2.find=true;
            newImageState.find=true;
            setImages(prev=>{
                let  newArray=prev;
                newArray[index]=newImageState;
                newArray[index2]=newImageState2;
                return newArray;
            });
        }
     }
}



const imagesElement = images.map(image=>(
    
    <Card   
            {...image}
            imageURL={image.displayed?image.url:'./images/inconnu.jpg'}
            handleClick={()=>handleClick(image.id)}
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
        this.state = {images:[]}
        this.handleClick=this.handleClick.bind(this);
        this.changeDisplay=this.changeDisplay.bind(this);
        this.isFound=this.isFound.bind(this);

    }
    handleClick(id){
        const find=elm=>elm.id===id;
        let index=this.state.images.findIndex(find);
        let newImageState=this.state.images[index];
        if(!newImageState.displayed){
            changeDisplay(newImageState,index);
        }
        else{
            if(!newImageState.find){
                changeDisplay(newImageState,index);
            }
        }
        isFound(newImageState,index);
        //console.log(images);
    }
    changeDisplay(newImageState,index){
        newImageState.displayed=!newImageState.displayed;
        this.setState(prev=>({
            images:prev.images.slice(0,index),
            images:[...prev.images.slice(index+1),newImageState]
        }));
    }
    isFound(newImageState,index){
        const find = elm=> elm.key === newImageState.key && elm.id !== newImageState.id;
        let index2 = this.state.images.findIndex(find);
        if(index2>=0 ){
            let newImageState2=this.state.images[index2];
            //console.log(newImageState2);
            if(newImageState2.displayed){
                newImageState2.find=true;
                newImageState.find=true;
                this.setState(prev=>{
                    let  newArray=prev;
                    newArray[index]=newImageState;
                    newArray[index2]=newImageState2;
                    return newArray;
                }
                );
            }
        }
    }
    componentDidMount(){
        fetch('https://picsum.photos/v2/list?limit=5')
        .then(res=>res.json())
        .then(res=>this.setState(prev=>({
            images:prev.images.push(
                ...res.map(elm=>({
                    url:elm.download_url,
                    id:elm.id ,
                    key:key,
                    diplayed:false,
                    find:false
                })
            ),
            ...res.map(elm=>({
                url:elm.download_url,
                id:elm.id++ ,
                key:key,
                diplayed:false,
                find:false
            })
            ))
        })));
        console.log(images)
    }
    render(){
        return (
            <div className="memory">
                <CardBoard images={images}/> 
            </div>
        )
    }
}
*/
