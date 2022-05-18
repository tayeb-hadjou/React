import React from 'react';
import Card from './card.jsx';
export default function Memory(props){
const [diplayed,setDisplayed]=React.useState(0);
const [images,setImages]=React.useState(props.images);
const [nums,setnums]=React.useState(props.nums);

function handleClick(key){
    const find=elm=>elm.key===key;
    let index=images.findIndex(find); 
    let newImageState=images[index];
    
    if(!newImageState.displayed ){
        if( diplayed==0){
         changeDisplay(newImageState,index);
            setDisplayed(prev=>prev+1);
        }
        else if(diplayed==1){
            setDisplayed(prev=>prev+1);
            changeDisplay(newImageState,index);
            let test=isFound(newImageState,index);
            if(test){
                setDisplayed(0);
                props.find()
            }
            else{
                setTimeout(()=>{goBack(newImageState,index)},1000);

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
     const find = elm=> elm.num === newImageState.num && elm.key !== newImageState.key;
     let index2 = images.findIndex(find);
     if(index2>=0 ){
        let newImageState2=images[index2];
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
const elements=images.map(image=>(
    <Card   
            {...image}
            imageURL={image.displayed?image.url:'./images/inconnu.jpg'}     
            handleClick={()=>handleClick(image.key)}
            
    />
))

return (
    <div className="cardBoard">
        {elements}
        
    </div>
)
}

