export class Aluno {
    constructor(nome, nota1, nota2) {
      this.nome = nome;
      this.nota1 = nota1;
      this.nota2 = nota2;
    }
    
    calcularMedia() {
      let m = (this.nota1 + this.nota2) / 2;
      return m;  
    }
    
    calcularSituacao() {
      let media = this.calcularMedia();
      if (media >= 7) {
        return "Aprovado";
      } else if (media >= 5) {
        return "Recuperação";
      } else {
        return "Reprovado";
      }
    }
    
    exibir() {
      let media = this.calcularMedia();
      let situacao = this.calcularSituacao();
      let resp = `Nome: ${this.nome} | Média: ${media} | Situação: ${situacao}`;
      return resp;
    }
}

