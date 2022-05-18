
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Memory from './memory.jsx';
import Control2 from './control2.jsx';
import shuffle from '../scripts/shuffle.js';

/*version  fonctionnelle*/

export default function App(){
    const [nbrPairs,setNbrPairs]=React.useState(0);
    const [images,setImages]=React.useState({
        data:[]
    });
    let id=nbrPairs;
    let key1=nbrPairs;
    let key2=nbrPairs;

    function changeNbrPairs(nbrPairs){
        setNbrPairs(nbrPairs);
    }
    React.useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=9&limit=12`)
        .then(res=>res.json())
        .then(data=> test(data))
        console.log("de app")
            console.log(images);
    },[nbrPairs])
    function test(data){
        let array= filled(data);
        setImages(prev=>{
            prev.data.splice(0,prev.data.length);
            prev.data.push(...array);
            return prev;

        })    
        
    }
    function filled(res){
        let array= [
            ...res.map(elm=>({
                url:elm.download_url,
                id:id++ ,
                key:key1--,
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
        array=shuffle(array);
        return array;
    }
       

return (
    <div className='app'>
        <Header/>
        {nbrPairs ==0 ?<Control2 changeNbrPairs={changeNbrPairs}/>:<Memory nbrPairs={nbrPairs} images={images} />}
        <Footer/>
    </div>

)    
}


