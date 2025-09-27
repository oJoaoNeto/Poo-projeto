import { useState } from 'react';

function CadastroProfessor({ onCadastrarProfessor }) {
  const [nome, setNome] = useState('');

  const handleSubmit = () => {
    if (nome) {
      onCadastrarProfessor(nome);
      setNome('');
    } else {
      alert("Por favor, digite o nome do professor.");
    }
  };

  return (
    <div>
      <h3>Cadastro de Professor</h3>
      Nome do Professor <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> <br />
      <button className="front" onClick={handleSubmit}>Cadastrar Professor</button>
    </div>
  );
}

export default CadastroProfessor;