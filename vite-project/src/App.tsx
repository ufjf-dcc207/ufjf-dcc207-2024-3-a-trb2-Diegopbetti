import './App.css';
import Jogo from './components/Jogo';
import { palavraCorreta } from './PalavrasInfo';

function App() {
  return (
    <>
      <div className='termo'>
        <Jogo palavraSecreta={palavraCorreta} />
      </div>
    </>
  );
}

export default App;
