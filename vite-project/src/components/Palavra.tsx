import './Palavra.css';

interface PalavraProps {
  word: string;
}

export default function Palavra({ word }: PalavraProps) {
  return (
    <div className='linha'>
      {Array.from({ length: 5 }).map((_, i) => (
        <div className='letra' key={i}>{word[i] || ''}</div>
      ))}
    </div>
  );
}
