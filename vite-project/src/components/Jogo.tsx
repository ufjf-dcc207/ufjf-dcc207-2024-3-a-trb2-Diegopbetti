import './Jogo.css'
import Palavra from './Palavra'

function Jogo(){

    return (
        <div className='container'>
            <h1 className='titulo'>Termo</h1>
            <div className='jogo'>
                <Palavra />
            </div>
            <div className='teclado'></div>
        </div>
    )
}

export default Jogo