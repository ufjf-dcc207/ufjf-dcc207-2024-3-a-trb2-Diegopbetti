import './Palavra.css';

interface PalavraProps {
  word: string;
  secretWord: string;
  revealed: boolean;
}

export default function Palavra({ word, secretWord, revealed }: PalavraProps) {
  const getLetterStyle = (letter: string, index: number) => {
    if (!revealed) return 'letra';

    if (letter === secretWord[index]) {
      return 'letra correta';
    } else if (secretWord.includes(letter)) {
      return 'letra parcial'; 
    } else {
      return 'letra errada';
    }
  };

  return (
    <div className='linha'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className={getLetterStyle(word[i] || '', i)} key={i}>
          {word[i] || ''}
        </div>
      ))}
    </div>
  );
}
