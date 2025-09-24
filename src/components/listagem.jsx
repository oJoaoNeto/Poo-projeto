function Listagem({ alunos, codigoTurma, professor, onAlterarCodigo }) {
  const alunosPorSituacao = alunos.length > 0
    ? {
        aprovados: alunos.filter(a => a.calcularSituacao() === 'Aprovado'),
        reprovados: alunos.filter(a => a.calcularSituacao() === 'Reprovado'),
        recuperacao: alunos.filter(a => a.calcularSituacao() === 'Recuperação')
      }
    : null;

  return (
    <div>
      <h3>Dados da Turma</h3>
      <p>Código: {codigoTurma} - Professor: {professor}</p>
      
      {alunos.length > 0 ? (
        <>
          <h4>Alunos Aprovados</h4>
          <ul>
            {alunosPorSituacao.aprovados.map((aluno, index) => (
              <li key={index}>{aluno.exibir()}</li>
            ))}
          </ul>
          
          <h4>Alunos em Recuperação</h4>
          <ul>
            {alunosPorSituacao.recuperacao.map((aluno, index) => (
              <li key={index}>{aluno.exibir()}</li>
            ))}
          </ul>
          
          <h4>Alunos Reprovados</h4>
          <ul>
            {alunosPorSituacao.reprovados.map((aluno, index) => (
              <li key={index}>{aluno.exibir()}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Nenhum aluno cadastrado.</p>
      )}
      
      <button className="altera" onClick={onAlterarCodigo}><b>Alterar Código</b></button>
    </div>
  );
}

export default Listagem;