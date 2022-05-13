import React from 'react';
export default function Footer() {
    const [mouseTraker,setMouseTraker]=React.useState(false);
    const [mouseCoordinates,setMouseCoordinates]=React.useState({
        x:0,
        y:0
    })
    React.useEffect(()=>{
        function mouseMove(event){
            setMouseCoordinates({
                x:event.clientX,
                y:event.clientY
            })
        }
        document.addEventListener('mousemove',mouseMove);
        return ()=>{
            document.removeEventListener('mousemove',mouseMove);
        }
    },[mouseTraker]);

    function handleClick(){
        setMouseTraker(prev=>!prev);
    }
    const circleStyle={
        left: mouseTraker?'20px':'8px',
        backgroundColor: mouseTraker?'#ffffff':'#000000',
    }
    const togglerStyle={
        backgroundColor: mouseTraker?'#000000':'#ffffff'
    }
    
    return (
        <div className='footer'onClick={handleClick}>
          {mouseTraker &&  <div className='coordinates'>{`x=${mouseCoordinates.x} y=${mouseCoordinates.y}`}</div>}
         <div className='mouseTraker' style={togglerStyle} ></div>
        <div className='mouseTrakerCircle' style={circleStyle}></div>
        <p>mouse Traker</p>
        </div>
    )

}