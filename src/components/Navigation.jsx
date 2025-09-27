const TABS = [
  { id: 'cadastroProfessor', label: '1. Cadastrar Professor' },
  { id: 'cadastroTurma', label: '2. Cadastrar Turma' },
  { id: 'cadastroAluno', label: '3. Cadastrar Aluno' },
  { id: 'listagem', label: '4. Listagem de Turmas' },
];

function Navigation({ abaAtiva, onTabChange }) {
  return (
    <div className="tab">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`tablinks ${abaAtiva === tab.id ? 'active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Navigation;