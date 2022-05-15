import React from   'react';
import CardBoard from './cardBoard.jsx';
/**version fonctionnelle */
export default function Memory(){
    const [images,setImages]=React.useState([]);
    let key=5;
    let key2=5;
    let id=0;
    React.useEffect(()=>{
        fetch('https://picsum.photos/v2/list?page=9&limit=8')
        .then(res=>res.json())
        .then(res=>setImages(prev=>prev.push(
            ...res.map(elm=>({
                    url:elm.download_url,
                    id:id++ ,
                    key:key--,
                    diplayed:false,
                    find:false
                })
            ),
            ...res.map(elm=>({
                url:elm.download_url,
                id:id ++,
                key:key2--,
                diplayed:false,
                find:false

            })
            )))
            );
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
        this.key=5;
        this.key2=5;
        this.id=0;            
        
    }
    componentDidMount(){
        fetch('https://picsum.photos/v2/list?limit=5')
        .then(res=>res.json())
        .then(res=>this.setState(prev=>({
            images:prev.images.push(
                ...res.map(elm=>({
                    url:elm.download_url,
                    id:this.id++ ,
                    key:this.key--,
                    diplayed:false,
                    find:false
                })
            ),
            ...res.map(elm=>({
                url:elm.download_url,
                id:this.id++ ,
                key:this.key--,
                diplayed:false,
                find:false

            })
            ))
        })))

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