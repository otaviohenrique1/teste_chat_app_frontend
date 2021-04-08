import Balao from "../Balao";
import ArrowCircleRight from "../../assets/arrow-circle-right/arrow-circle-right-128.png";
import './style.css';
import { ChangeEvent } from "react";

export interface RespostaProps {
  value?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  typeInput?: string;
}

export default function Resposta({typeInput, value, onChange, onClick}: RespostaProps) {
  return (
    <Balao>
      <div className='resposta-container'>
        <input
          type={typeInput}
          value={value}
          onChange={onChange}
        />
        <button type="button" className='btn'>
          <img src={ArrowCircleRight} alt="ArrowCircleRight" className='img-btn' onClick={onClick} />
        </button>
      </div>
    </Balao>
  );
}