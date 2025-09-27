
const SITUACAO_CLASSES = {
  'Aprovado': 'status-aprovado',
  'Recuperação': 'status-recuperacao',
  'Reprovado': 'status-reprovado',
};

function Listagem({ alunos = [], codigoTurma, professor, onAlterarCodigo }) {
  return (
    <div className="listagem-container">
      <h3>Dados da Turma</h3>
      <p className="turma-info">Código: <strong>{codigoTurma}</strong> - Professor: <strong>{professor}</strong></p>
      
      {alunos.length > 0 ? (
        <table className="aluno-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Média</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map((aluno, index) => (
              <tr key={index}>
                <td>{aluno.nome}</td>
                <td>{aluno.media.toFixed(1)}</td>
                <td>
                  <span className={`status-badge ${SITUACAO_CLASSES[aluno.situacao]}`}>
                    {aluno.situacao}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum aluno cadastrado.</p>
      )}
      
      <button className="btn btn-secondary" onClick={onAlterarCodigo}>Alterar Código da Turma</button>
    </div>
  );
}

export default Listagem;
