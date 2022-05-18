
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Memory from './memory.jsx';
import Control2 from './control2.jsx';


/*version  fonctionnelle*/

export default function App(){
    let key=0;
    const [nbrPairs,setNbrPairs]=React.useState(0);
    const [allImages,setAllImages]=React.useState({
        data:[]
    });
    const [images,setImages]=React.useState({
        data:[]
    });

    function changeNbrPairs(nbrPairs){
        setNbrPairs(nbrPairs);
        setImages(prev=>{
            let array=allImages.data.slice(0,nbrPairs);
            prev.data.push(...array);
            return prev;
        })
    }
    React.useEffect(()=>{
        fetch(`https://picsum.photos/v2/list?page=9&limit=12`)
        .then(res=>res.json())
        .then(data=>fillAllImages(data))
        console.log("de app")
            console.log(images);
    },[])


    function fillAllImages(data){
        let array= filled(data);
        setAllImages(prev=>{
            prev.data.splice(0,prev.data.length);
            prev.data.push(...array);
            return prev;

        })    
        
    }
    function filled(data){
        let array=[
            ...data.map(elm=>({
                url:elm.download_url,
                key:key++ ,
                diplayed:false,
                find:false
            }))
        ]
        return array;
    }
    
    
    
    /*
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
    */
       

return (
    <div className='app'>
        <Header/>
        {console.log(images)}
        {nbrPairs ==0 ?<Control2 changeNbrPairs={changeNbrPairs}/>:<Memory nbrPairs={nbrPairs} images={images} />}
        
        <Footer/>
    </div>

)    
}


