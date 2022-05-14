import React from   'react';
import CardBoard from './cardBoard.jsx';
/**version fonctionnelle */
export default function Memory(){
    const [images,setImages]=React.useState([]);
    React.useEffect(()=>{
        /*test(1);*/
        fetch('https://picsum.photos/v2/list?limit=4')
        .then(res=>res.json())
        .then(res=>setImages(prev=>prev.push(...res)))
        console.log(images)

        
    },[])

    return (
        <div className="memory">
            <CardBoard images={images}/> 
        </div>
    )
}
/**version classe */
/*
class Memory extends React.Component{
    constructor(props){
        super(props);
        this.state = {images:[]}
    }
    componentDidMount(){
        fetch('https://picsum.photos/v2/list?limit=4')
        .then(res=>res.json())
        .then(res=>this.setState({images:res}))
    }
    
    render(){
        return (
            <div className="memory">
                <CardBoard images={this.props.images}/> 
            </div>
        )
    }
}
*/