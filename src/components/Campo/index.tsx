import Pergunta from "../../components/Pergunta";
import Resposta, { RespostaProps } from "../../components/Resposta";
import './style.css';

interface CampoProps extends RespostaProps {
  perguntas: string;
}

export default function Campo({ perguntas, typeInput, value, onChange, onClick }: CampoProps) {
  return (
    <div className='campo-container'>
      <Pergunta pergunta={perguntas} />
      <Resposta typeInput={typeInput} value={value} onChange={onChange} onClick={onClick} />
    </div>
  );
}