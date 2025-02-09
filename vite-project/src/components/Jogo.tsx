import { useState, useEffect } from "react";
import "./Jogo.css";
import Palavra from "./Palavra";
import Teclas from "./Teclas";
import Botao from "./Botao";
import { palavrasValidas } from "../PalavrasInfo";

const MAX_ATTEMPTS = 6;
const WORD_LENGTH = 5;

interface JogoProps {
  palavraSecreta: string;
}

function Jogo({ palavraSecreta }: JogoProps) {
  const [guesses, setGuesses] = useState<string[]>(
    Array(MAX_ATTEMPTS).fill("")
  );
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentRow, setCurrentRow] = useState(0);
  const [confirmedGuesses, setConfirmedGuesses] = useState<boolean[]>(
    Array(MAX_ATTEMPTS).fill(false)
  );
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState("");
  const [lost, setLost] = useState(false);

  const handleKeyPress = (key: string) => {
    if (gameOver) return;
    key = key.toUpperCase();

    if (key === "BACKSPACE" || key === "ESCAPE" || key === "🔙") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (key === "ENTER" || key === "☑️") {
      if (currentGuess.length === WORD_LENGTH) {
        if (!palavrasValidas.includes(currentGuess)) {
          alert("Palavra inválida!");
          return;
        }

        setGuesses((prev) => {
          const newGuesses = [...prev];
          newGuesses[currentRow] = currentGuess;
          return newGuesses;
        });

        setConfirmedGuesses((prev) => {
          const newConfirmed = [...prev];
          newConfirmed[currentRow] = true;
          return newConfirmed;
        });

        if (currentGuess === palavraSecreta) {
          setGameOver(true);
          setMessage("Parabéns! Você acertou! 🎉🎉🎉🎉🎉");
        } else if (currentRow + 1 === MAX_ATTEMPTS) {
          setGameOver(true);
          setLost(true);
          setMessage(`Fim de jogo! A palavra era:`);
        }

        setCurrentGuess("");
        setCurrentRow((prev) => prev + 1);
      }
    } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyPress(event.key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, currentRow, gameOver]);

  return (
    <div className="container">
      <h1 className="titulo">Termo</h1>
      <div className="jogo">
        <div>
          {guesses.map((guess, index) => (
            <Palavra
              key={index}
              word={index === currentRow ? currentGuess : guess}
              secretWord={palavraSecreta}
              revealed={confirmedGuesses[index]}
            />
          ))}
        </div>
        <div className="game-info">
          {message && (
            <p className="mensagem">
              {message}{" "}
              {lost && <p className="palavra-secreta">{palavraSecreta}</p>}
            </p>
          )}
          <Botao />
        </div>
      </div>
      <div className="teclado">
        <Teclas onKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default Jogo;
