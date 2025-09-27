import { useState } from 'react';

function CadastroTurma({ professores, onCadastrarTurma }) {
  const [disciplina, setDisciplina] = useState('');
  const [professorId, setProfessorId] = useState('');

  const handleSubmit = () => {
    if (disciplina && professorId) {
      onCadastrarTurma(disciplina, Number(professorId));
      setDisciplina('');
      setProfessorId('');
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      <h3>Cadastro de Turma</h3>
      <div className="form-group">
        <label className="form-label">Disciplina:</label>
        <input type="text" value={disciplina} onChange={(e) => setDisciplina(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label">Professor:</label>
        <select value={professorId} onChange={(e) => setProfessorId(e.target.value)}>
          <option value="">Selecione um professor</option>
          {professores.map((prof, index) => (
            <option key={index} value={index}>{prof.nome}</option>
          ))}
        </select>
      </div>
      <button className="front" onClick={handleSubmit}>Cadastrar Turma</button>
    </div>
  );
}

export default CadastroTurma;