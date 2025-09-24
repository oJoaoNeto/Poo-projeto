import { useState } from 'react';
import { Aluno } from './classes/Aluno';
import { Professor } from './classes/Professor';
import { Turma } from './classes/Turma';
import Cadastro from './components/cadastro';
import Listagem from './components/listagem';
import './index.css';

function App() {
  
  const [turma, setTurma] = useState(() => new Turma("Sistemas de Informação", new Professor("João")));
  const [abaAtiva, setAbaAtiva] = useState('cadastro');

  const handleCadastrar = (nome, nota1, nota2) => {
   
    const novoAluno = new Aluno(nome, nota1, nota2);
    turma.adicionarAluno(novoAluno);
    
    setTurma(new Turma(turma.disciplina, turma.professor, turma.alunos, turma.codigo));
    alert("Cadastrado com sucesso!");
  };

  const handleAlterarCodigo = () => {
    // Cria uma nova instância da turma, passando null como código para forçar a geração de um novo.
    setTurma(new Turma(turma.disciplina, turma.professor, turma.alunos, null));
    alert("Novo código da turma gerado com sucesso!");
  };
  return (
    <div className="container">
      <h1>Sistema Escola</h1>
      
      <div className="tab">
        <button
          className={`tablinks ${abaAtiva === 'cadastro' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('cadastro')}
        >
          Cadastro
        </button>
        <button
          className={`tablinks ${abaAtiva === 'listagem' ? 'active' : ''}`}
          onClick={() => setAbaAtiva('listagem')}
        >
          Listagem
        </button>
      </div>

      <div className="tabcontent" style={{ display: abaAtiva === 'cadastro' ? 'block' : 'none' }}>
        <Cadastro onCadastrar={handleCadastrar} />
      </div>

      <div className="tabcontent" style={{ display: abaAtiva === 'listagem' ? 'block' : 'none' }}>
        <Listagem 
          alunos={turma.alunos} 
          codigoTurma={turma.codigo} 
          professor={turma.professor.nome} 
          onAlterarCodigo={handleAlterarCodigo} 
        />
      </div>
    </div>
  );
}

export default App;