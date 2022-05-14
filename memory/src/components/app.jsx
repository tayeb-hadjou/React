
import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Memory from './memory.jsx';
/*version  fonctionnelle*/

export default function App(){
return (
    <div className='app'>
        <Header/>
        <Memory/>
        <Footer/>
    </div>

)    
}
/*app version classe */
/*
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div>
                <Header/>
                <Memory/>
                <Footer/>
            </div>
        )
    }
}
*/

