import './Teclas.css'

interface TeclasProps {
    onKeyPress: (key: string) => void;
  }

export default function Teclas({onKeyPress}: TeclasProps){
    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '🔙',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', '☑️'
      ];

    return (
        <div className='fileira'>
            {keys.map((key) => (
                <div className='teclas' key={key} onClick={() => onKeyPress(key)}>
                    {key}
                </div>
            ))}                     
        </div>
    );
}