import { FormEvent, useState } from 'react';

export default function Campo2() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  function formataTexto(texto: string) {
    return texto.toLowerCase().replace(/\s+/g, '-').replace(/\.+/g, '-');
  }
  
  function onSubmitFormChange(event: FormEvent) {
    event.preventDefault();
    let textoConvertido = formataTexto(texto);
    setResultado(textoConvertido);
  }

  function limparCampos() {
    setTexto('');
    setResultado('');
  }

  return (
    <div>
      <hr/>
      <form onSubmit={onSubmitFormChange}>
        <input type="text" value={texto} onChange={event => setTexto(event.target.value)} />
        <br/><br/>
        <div>
          <button type="submit">Converter</button>
          <button type="button" onClick={limparCampos}>Limpar</button>
        </div>
      </form>
      <p>{'Resultado: '}{resultado}</p>
      <hr/>
    </div>
  );
}

// https://drawingdatabase.com/category/aircraft/page/11/