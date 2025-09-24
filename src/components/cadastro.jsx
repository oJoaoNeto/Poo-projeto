import { useState } from 'react';

function Cadastro({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const handleSubmit = () => {
    if (nome && nota1 && nota2) {
      onCadastrar(nome, Number(nota1), Number(nota2));
      setNome('');
      setNota1('');
      setNota2('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      <h3>Cadastro</h3>
      <div className="cadastro">
        <b>Sistema Escola</b> <br />
        Nome <input id="nome" type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> <br />
        Nota 1 <input id="n1" type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} /> <br />
        Nota 2 <input id="n2" type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} /> <br />
        <button className="front" onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default Cadastro;