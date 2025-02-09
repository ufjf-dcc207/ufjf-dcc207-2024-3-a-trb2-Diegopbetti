import './Botao.css'

function recarrega(){
    window.location.reload()
    }

export default function Botao() {
   
    return (
        <>
            <button className='reset' onClick={recarrega}>Recomeçar Jogo</button>
        </>
    )
}
