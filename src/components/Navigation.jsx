
import React from 'react';

function Navigation({ abaAtiva, onTabChange }) {
  return (
    <nav className="tab-nav">
      <button
        className={`tab-button ${abaAtiva === 'cadastroProfessor' ? 'active' : ''}`}
        onClick={() => onTabChange('cadastroProfessor')}
      >
        Cadastrar Professor
      </button>
      <button
        className={`tab-button ${abaAtiva === 'cadastroTurma' ? 'active' : ''}`}
        onClick={() => onTabChange('cadastroTurma')}
      >
        Cadastrar Turma
      </button>
      <button
        className={`tab-button ${abaAtiva === 'cadastroAluno' ? 'active' : ''}`}
        onClick={() => onTabChange('cadastroAluno')}
      >
        Cadastrar Aluno
      </button>
      <button
        className={`tab-button ${abaAtiva === 'listagem' ? 'active' : ''}`}
        onClick={() => onTabChange('listagem')}
      >
        Listagem
      </button>
    </nav>
  );
}

export default Navigation;
