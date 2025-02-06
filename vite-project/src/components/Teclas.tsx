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
                <div className='teclas'>Q</div>
                <div className='teclas'>W</div>
                <div className='teclas'>E</div>
                <div className='teclas'>R</div>
                <div className='teclas'>T</div>        
                <div className='teclas'>Y</div>
                <div className='teclas'>U</div>
                <div className='teclas'>I</div>
                <div className='teclas'>O</div>
                <div className='teclas'>P</div>
           
                <div className='teclas'>A</div>
                <div className='teclas'>S</div>
                <div className='teclas'>D</div>
                <div className='teclas'>F</div>
                <div className='teclas'>G</div>
                <div className='teclas'>H</div>
                <div className='teclas'>J</div>
                <div className='teclas'>K</div>
                <div className='teclas'>L</div>
                <div className='teclas'>🔙</div>

                <div className='teclas'>Z</div>        
                <div className='teclas'>X</div>
                <div className='teclas'>C</div>
                <div className='teclas'>V</div>
                <div className='teclas'>B</div>
                <div className='teclas'>N</div>      
                <div className='teclas'>M</div>
                <div className='teclas'>☑️</div>         
        </div>
    )
}