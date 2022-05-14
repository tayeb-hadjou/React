import React from   'react';
/**version fonctionnelle */

export default function Header(){
    return (
        <div className="header">
            <h2>Memory Game</h2>
            <h3>Test your memory !</h3>
        </div>
    )
}

/**version classe */
/*
export default class Header extends React.Component{
       constructor(props){
        super(props);
        this.state = {}
       }
       render(){
           return (
            <div className="header">
              <p>header here</p>    
            </div>
         )
        }
    }
*/