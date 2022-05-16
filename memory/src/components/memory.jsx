import React from   'react';
import CardBoard from './cardBoard.jsx';
import shuffle from '../scripts/shuffle.js';
/**version fonctionnelle */
export default function Memory(){
    const [images,setImages]=React.useState([]);
    let key=16;
    let key2=16;
    let id=0;

    function filled(res){
        let array= [
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
        )
        ]
        return shuffle(array);
    }
    React.useEffect(()=>{
        fetch('https://picsum.photos/v2/list?page=9&limit=8')
        .then(res=>res.json())
        .then(res=>filled(res))
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
        this.handleClick=this.handleClick.bind(this);
        this.key=16;
        this.key2=16;
        this.id=0;
        
    }
    filled(res){
        let array= [
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
            id:this.id ++,
            key:this.key2--,
            diplayed:false,
            find:false
        })
        )
        ]
        return shuffle(array);
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list?page=9&limit=8')
        .then(res=>res.json())
        .then(res=>this.filled(res))
        .then(res=>this.setState(prev=>({
            images:prev.images.push(prev.push(...res) )
        })))
        //console.log(this.state.images)

    }
    
    render(){
        return (
            <div className="memory">
                <CardBoard images={this.props.images}/> 
            </div>
        )
    }
}



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
            ).then(
        setImages(prev=>shuffle(prev))
            )
        console.log(images)

    },[])
*/