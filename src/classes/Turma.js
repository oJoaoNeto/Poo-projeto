export class Turma {
  #codigo;
  disciplina;
  professor;
  alunos;

  constructor(disciplina, professor, alunos = []) {
    this.#codigo = this.#gerarCodigo();
    this.disciplina = disciplina;
    this.professor = professor;
    this.alunos = alunos;
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  consultarAluno(nome) {
    return this.alunos.find(aluno => aluno.nome === nome);
  }

  get codigo() {
    return this.#codigo;
  }

  set codigo(novoCodigo) {
    this.#codigo = novoCodigo;
  }

  listarAlunosPorSituacao() {
    const aprovados = this.alunos.filter(aluno => aluno.calcularSituacao() === 'Aprovado');
    const reprovados = this.alunos.filter(aluno => aluno.calcularSituacao() === 'Reprovado');
    const recuperacao = this.alunos.filter(aluno => aluno.calcularSituacao() === 'Recuperação');

    return {
      aprovados,
      reprovados,
      recuperacao
    };
  }

  #gerarCodigo() {
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let parte1 = Math.floor(Math.random() * 90) + 10;
    let parte2 = letras.charAt(this.#getRndInteger(0, letras.length));
    return parte1 + parte2;
  }

  #getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}