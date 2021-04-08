import { ReactNode } from "react";
import './style.css'

interface BalaoProps {
  children: ReactNode
}

export default function Resposta(props: BalaoProps) {
  return (
    <div className='balao'>
      { props.children }
    </div>
  );
}