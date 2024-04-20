class estudante {
    constructor( nome,email,ra,curso,lista){
    this.nome = nome;
    this.email = email;
    this.ra = ra;
    this.curso = curso;
    this.lista = lista;

    }
    primeiraDisciplina(){
        return this.lista.length>0?this.lista[0]:null;
    }
    ultimaDisciplina(){
        return this.lista.length>0?this.lista[this.lista.length-1]:null;
    }
}
    const aluno1 = new estudante ("Adriana Dias de Araujo", "adriana.araujo6@fatec.sp.gov.br", 105048, "Analise e Desenvolvimento de Sistemas", ["Logica de programação","Calculo","Engenharia de software"]);
    const aluno2 = new estudante ("João Gomide", "joao.gomide@fatec.sp.gov.br",102002, "Analise e Desenvolvimento de Sistemas", ["Sistemas de informação","Inglês","Contabilidade"]);
    
    
    console.log(`A primeira disciplina do aluno 1 ${aluno1.nome} é ${aluno1.primeiraDisciplina()} e a ultima é ${aluno1.ultimaDisciplina()}`);

    console.log(`A primeira disciplina do aluno 2 ${aluno2.nome} é ${aluno2.primeiraDisciplina()} e a ultima é ${aluno2.ultimaDisciplina()}`);

