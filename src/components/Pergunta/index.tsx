import Balao from "../Balao";
import Avatar from "../../assets/happy_face/happy_face_128.png";
import './style.css';

interface PerguntaProps {
  pergunta: string;
}

export default function Pergunta({ pergunta }: PerguntaProps) {
  return (
    <div className='pergunta-container'>
      <img src={Avatar} alt="Avatar" className='img-avatar' />
      <Balao>
        {pergunta}
      </Balao>
    </div>
  );
}