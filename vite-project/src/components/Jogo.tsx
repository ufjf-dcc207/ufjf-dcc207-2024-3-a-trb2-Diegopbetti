import './Jogo.css'
import Palavra from './Palavra'
import Teclas from './Teclas'
import { useState, useEffect } from 'react';

const MAX_ATTEMPTS = 6; 
const WORD_LENGTH = 5;

const [guesses, setGuesses] = useState<string[]>(Array(MAX_ATTEMPTS).fill(''));
const [currentGuess, setCurrentGuess] = useState('');
const [currentRow, setCurrentRow] = useState(0);

const handleKeyPress = (key: string) => {
    key = key.toUpperCase(); // Converte para maiúsculo
  
    if (key === 'BACKSPACE' || key === 'ESCAPE' || key === '🔙') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } 
  };
  

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