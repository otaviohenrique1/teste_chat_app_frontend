import Balao from "../Balao";
import StarEmpty from "../../assets/star-empty/star-empty-128.png";
// import { RespostaProps } from "../../components/Resposta";
import './style.css';

export default function Feedback() {
  return (
    <Balao>
      <div className='feedback-container'>
        <div>
          <img src={StarEmpty} alt="Star" className='feedback-rate' />
        </div>
        <div>
          <img src={StarEmpty} alt="Star" className='feedback-rate' />
        </div>
        <div>
          <img src={StarEmpty} alt="Star" className='feedback-rate' />
        </div>
        <div>
          <img src={StarEmpty} alt="Star" className='feedback-rate' />
        </div>
        <div>
          <img src={StarEmpty} alt="Star" className='feedback-rate' />
        </div>
      </div>
    </Balao>
  );
}