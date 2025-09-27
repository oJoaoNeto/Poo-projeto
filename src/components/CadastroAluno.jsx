import { useState } from 'react';

function CadastroAluno({ turmas, turmaAtual, onSelectTurma, onCadastrar }) {
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
      <h3>Cadastro de Aluno na Turma</h3>
      {turmas.length > 0 ? (
        <>
          <div className="seletor-turma">
            <label htmlFor="turma-select-cadastro" className="form-label">Selecione a Turma:</label>
            <select id="turma-select-cadastro" value={turmaAtual?.codigo || ''} onChange={(e) => onSelectTurma(e.target.value)}>
              {turmas.map(t => (
                <option key={t.codigo} value={t.codigo}>
                  {t.disciplina} - Prof. {t.professor.nome} ({t.codigo})
                </option>
              ))}
            </select>
          </div>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="nome-aluno">Nome:</label>
              <input id="nome-aluno" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="n1">Nota 1:</label>
              <input id="n1" type="text" value={nota1} onChange={(e) => setNota1(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="n2">Nota 2:</label>
              <input id="n2" type="text" value={nota2} onChange={(e) => setNota2(e.target.value)} />
            </div>
          </div>
          <button className="front" onClick={handleSubmit}>Cadastrar Aluno</button>
        </>
      ) : (
        <p>Cadastre uma turma primeiro para poder adicionar alunos.</p>
      )}
    </div>
  );
}

export default CadastroAluno;
