import './Jogo.css'
import Palavra from './Palavra'
import Teclas from './Teclas'

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