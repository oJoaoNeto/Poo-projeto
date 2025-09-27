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
      <div className="form-group">
        <label className="form-label" htmlFor="nome-professor">Nome do Professor:</label>
        <input id="nome-professor" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <button className="front" onClick={handleSubmit}>Cadastrar Professor</button>
    </div>
  );
}

export default CadastroProfessor;