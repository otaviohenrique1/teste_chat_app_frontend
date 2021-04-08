import { useState } from "react";
import Campo from "../../components/Campo";
import Feedback from "../../components/Feedback";
import Pergunta from "../../components/Pergunta";
import { perguntas } from "../../utils/perguntas";
import './style.css';

export default function Chat() {
  const [nomeSobrenome, setNomeSobrenome] = useState('');
  const [cidadeEstado, setCidadeEstado] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  // const [respostaFeedback, setRespostaFeedback] = useState('');
  // const [proximaPergunta, setProximaPergunta] = useState(0);
  const [chamaPergunta2, setChamaPergunta2] = useState(false);
  const [chamaPergunta3, setChamaPergunta3] = useState(false);
  const [chamaPergunta4, setChamaPergunta4] = useState(false);
  const [chamaPergunta5, setChamaPergunta5] = useState(false);

  function handleNomeSobrenome() {
    setChamaPergunta2(true);
  }

  function handleCidadeEstado() {
    setChamaPergunta3(true);
  }

  function handleDataNascimento() {
    setChamaPergunta4(true);
  }

  function handleEmail() {
    setChamaPergunta5(true);
  }


  return (
    <div className='chat-container'>
      <Campo
        perguntas={perguntas.pergunta1}
        typeInput="text"
        value={nomeSobrenome}
        onChange={(event) => setNomeSobrenome(event.target.value)}
        onClick={handleNomeSobrenome}
      />
      {(chamaPergunta2) && 
        <Campo
          perguntas={`${perguntas.pergunta2.parte1} ${nomeSobrenome} ${perguntas.pergunta2.parte2}`}
          typeInput="text"
          value={cidadeEstado}
          onChange={(event) => setCidadeEstado(event.target.value)}
          onClick={handleCidadeEstado}
        />
      }
      {(chamaPergunta3) &&
        <Campo
          perguntas={perguntas.pergunta3}
          typeInput="date"
          value={dataNascimento}
          onChange={(event) => setDataNascimento(event.target.value)}
          onClick={handleDataNascimento}
        />
      }
      {(chamaPergunta4) && 
        <Campo
          perguntas={perguntas.pergunta4}
          typeInput="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onClick={handleEmail}
        />
      }
      {(chamaPergunta5) && 
        <>
          <div className='campo-container'>
            <Pergunta pergunta={perguntas.pergunta5} />
          </div>
          <Feedback />
          <div className='chat-button-container'>
            <button>Salvar</button>
          </div>
        </>
      }
    </div>
  );
}
