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
    else if (key === 'ENTER' || key === '☑️') {
        if (currentGuess.length === WORD_LENGTH) {
          setGuesses((prev) => {
            const newGuesses = [...prev];
            newGuesses[currentRow] = currentGuess;
            return newGuesses;
          });
          setCurrentGuess('');
          setCurrentRow((prev) => Math.min(prev + 1, MAX_ATTEMPTS - 1));
        }
      } 
      else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess((prev) => prev + key);
      }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress(event.key);
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, currentRow]);  

function Jogo(){

    return (
        <div className='container'>
          <h1 className='titulo'>Termo</h1>
          <div className='jogo'>
            {guesses.map((guess, index) => (
              <Palavra key={index} word={index === currentRow ? currentGuess : guess} />
            ))}
          </div>
          <div className='teclado'>
            <Teclas />
          </div>
        </div>
      );
      
}

export default Jogo