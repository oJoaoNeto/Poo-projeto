import { useState } from 'react';
import { Aluno } from './classes/Aluno';
import { Professor } from './classes/Professor';
import { Turma } from './classes/Turma';
import Navigation from './components/Navigation';
import CadastroAluno from './components/CadastroAluno';
import CadastroProfessor from './components/CadastroProfessor';
import CadastroTurma from './components/CadastroTurma';
import Listagem from './components/Listagem'; 
import './index.css';

function App() {
  const [professores, setProfessores] = useState([]);
  const [turmas, setTurmas] = useState([]);
  const [turmaAtual, setTurmaAtual] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState('cadastroProfessor');

  const handleCadastrarProfessor = (nome) => {
    const novoProfessor = new Professor(nome);
    setProfessores([...professores, novoProfessor]);
    alert("Professor cadastrado com sucesso!");
    setAbaAtiva('cadastroTurma'); 
  };

  const handleCadastrarTurma = (disciplina, professorId) => {
    const professorSelecionado = professores[professorId];
    const novaTurma = new Turma(disciplina, professorSelecionado);
    const novasTurmas = [...turmas, novaTurma];
    setTurmas(novasTurmas);
    setTurmaAtual(novaTurma); 
    alert("Turma cadastrada com sucesso!");
    setAbaAtiva('cadastroAluno'); 
  };

  const handleCadastrarAluno = (nome, nota1, nota2) => {
    if (!turmaAtual) {
      alert("Por favor, selecione uma turma primeiro na aba de Listagem.");
      return;
    }
    const novoAluno = new Aluno(nome, nota1, nota2);

    // Crie um objeto simples com os dados calculados
    const alunoParaListagem = {
      nome: novoAluno.nome,
      nota1: novoAluno.nota1,
      nota2: novoAluno.nota2,
      media: novoAluno.calcularMedia(), // Adiciona a propriedade 'media'
      situacao: novoAluno.calcularSituacao() // Adiciona a propriedade 'situacao'
    };

    // Atualize o estado das turmas
    const novasTurmas = turmas.map(t => {
      if (t.codigo === turmaAtual.codigo) {
        // Adicione o objeto simples ao array de alunos da turma
        const alunosAtualizados = [...t.alunos, alunoParaListagem];
        const turmaAtualizada = new Turma(t.disciplina, t.professor, alunosAtualizados);
        turmaAtualizada.codigo = t.codigo;
        setTurmaAtual(turmaAtualizada);
        return turmaAtualizada;
      }
      return t;
    });

    setTurmas(novasTurmas);
    alert("Aluno cadastrado com sucesso!");
  };

  const handleAlterarCodigo = () => {
    if (!turmaAtual) return;
    const turmaModificada = new Turma(turmaAtual.disciplina, turmaAtual.professor, turmaAtual.alunos, null);
    const index = turmas.findIndex(t => t.codigo === turmaAtual.codigo);
    const novasTurmas = [...turmas];
    novasTurmas[index] = turmaModificada;
    setTurmas(novasTurmas);
    setTurmaAtual(turmaModificada);
    alert("Novo código da turma gerado com sucesso!");
  };

  const handleSelectTurma = (codigoTurma) => {
    const turmaSelecionada = turmas.find(t => t.codigo === codigoTurma);
    setTurmaAtual(turmaSelecionada);
  };

  return (
    <div className="container">
      
      <h1>Sistema Escola</h1>
      
      <Navigation abaAtiva={abaAtiva} onTabChange={setAbaAtiva} />

      <div className="tabcontent" style={{ display: abaAtiva === 'cadastroProfessor' ? 'block' : 'none' }}>
        <CadastroProfessor onCadastrarProfessor={handleCadastrarProfessor} />
      </div>

      <div className="tabcontent" style={{ display: abaAtiva === 'cadastroTurma' ? 'block' : 'none' }}>
        <CadastroTurma professores={professores} onCadastrarTurma={handleCadastrarTurma} />
      </div>

      <div className="tabcontent" style={{ display: abaAtiva === 'cadastroAluno' ? 'block' : 'none' }}>
        <CadastroAluno
          turmas={turmas}
          turmaAtual={turmaAtual}
          onSelectTurma={handleSelectTurma}
          onCadastrar={handleCadastrarAluno}
        />
      </div>

      <div className="tabcontent" style={{ display: abaAtiva === 'listagem' ? 'block' : 'none' }}>
        {turmas.length > 0 ? (
          <>
            <div className="seletor-turma">
              <label htmlFor="turma-select" className="form-label">Selecione a Turma:</label>
              <select id="turma-select" value={turmaAtual?.codigo || ''} onChange={(e) => handleSelectTurma(e.target.value)}>
                {turmas.map(t => (
                  <option key={t.codigo} value={t.codigo}>
                    {t.disciplina} - Prof. {t.professor.nome} ({t.codigo})
                  </option>
                ))}
              </select>
            </div>
            {turmaAtual && (
              <Listagem 
                alunos={turmaAtual.alunos} 
                codigoTurma={turmaAtual.codigo} 
                professor={turmaAtual.professor.nome} 
                onAlterarCodigo={handleAlterarCodigo} 
              />
            )}
          </>
        ) : (
          <p>Nenhuma turma cadastrada ainda.</p>
        )}
      </div>
    </div>
  );
}

export default App;