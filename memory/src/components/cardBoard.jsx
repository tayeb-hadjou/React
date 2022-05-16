import React from 'react';
import Card from './card.jsx';

export default function Memory(props){
const [diplayed,setDisplayed]=React.useState(0);
const [images,setImages]=React.useState(props.images); 

function handleClick(id){
    const find=elm=>elm.id===id;
    let index=images.findIndex(find); 
    let newImageState=images[index];
    
    if(!newImageState.displayed ){
        if( diplayed==0){
         changeDisplay(newImageState,index);
            setDisplayed(prev=>prev+1);
            //isFound(newImageState,index);
        }
        else if(diplayed==1){
            setDisplayed(prev=>prev+1);
            changeDisplay(newImageState,index);
            let test=isFound(newImageState,index);
            if(test){
                setDisplayed(0);
            }
            else{
                console.log('wagi wite fait')
                setTimeout(()=>{goBack(newImageState,index)},2000);

            }
        }
    }
}
function goBack(newImageState,index){
    changeDisplay(newImageState,index);
    const findE = elm => (elm.displayed && !elm.find);
    let indexE=images.findIndex(findE);
    let newImageStateE=images[indexE];
    changeDisplay(newImageStateE,indexE);
    setDisplayed(0);

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
            setDisplayed(0);
            return true;
        }
     }
     return false;
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
        this.state = {images:[],diplayed:0}
        this.handleClick=this.handleClick.bind(this);
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
    goBack(newImageState,index){
        changeDisplay(newImageState,index);
        const findE = elm => (elm.displayed && !elm.find);
        let indexE=this.state.images.findIndex(findE);
        let newImageStateE=this.state.images[indexE];
        changeDisplay(newImageStateE,indexE);
        this.setState({displayed:0});
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

    render(){
        return (
            <div className="memory">
                <CardBoard images={images}/> 
            </div>
        )
    }
}
*/
