import './Jogo.css'
import Palavra from './Palavra'
import Teclas from './Teclas'
import { useState, useEffect } from 'react';

const MAX_ATTEMPTS = 6; 
const WORD_LENGTH = 5;

function Jogo(){

    return (
        <div className='container'>
            <h1 className='titulo'>Termo</h1>
            <div className='jogo'>
                <Palavra />
            </div>
            <div className='teclado'>
                <Teclas />
            </div>
        </div>
    )
}

export default Jogo