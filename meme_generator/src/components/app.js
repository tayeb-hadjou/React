import React from 'react';
import Header from '../components/header.js';
import Form from '../components/form.js';
import Meme from '../components/meme.js';
export default function App() {
  return (
    <div className='allApp'>    
    <Header/>
    <Form/>
    <Meme/>
    </div>
  )
}