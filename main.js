const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="Emoji Triste" />';
const atividade = [];
const nota = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota miníma: "));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
});

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividade.push(inputNomeAtividade.value);
        nota.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculandoMediaFinal()

    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculandoMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0; i < nota.length; i++){
        somaDasNotas += nota[i]
    }

    return somaDasNotas / nota.length;
}

// colocamos a constante de atividade e nota de atividade dentro do form.addeventlistener.//
// Utilizamos o .value no final da constante para ele pegar o valor que vai está lá no id.//
// Utilizamos a linhas(tr) e as colunas (td) para preencher as linhas e colunas na nossa tabela na página web//
// O linha += é a mesma coisa da concatenação de linha = linha + ("outro conteúdo"). Dessa forma utilizamos o += para facilitar//
// Na linha 21 utilizamos os ternarios: o ? significa o if e o : significa o else.
// Então na linha 21 poderiamos dizer: if >= 'Aprovado' else 'Reprovado'.
// No caso na linha 31 e 32, estamos selecionando a tabela através da tag tbody e adicionando o conteúdo da linha através do .innerHTML.
// Criamos um let linhas = '' para cada vez que adicionarmos uma atividade ela adicionar mais uma linha.
// Para ela criar mais uma linha e não submeter a cada vez que pressionamos adicionar, colocamos nossa tag no escopo global.
// Na linha 26 e 27 fizemos isso para cada vez que submeter o formulario esses campos ficarem em branco.
// Criamos duas constantes para colocar as imagens dos emojis feliz e triste e colocamos no if e no else, em caso de Aprovado ou Reprovado.
// Criamos duas funções apenas para "melhorar o visual do código" e essas duas funções são chamadas lá no form.addEventListener.
// Ou seja, após pressionarmos o adicionar o nosso contéudo vai chamar duas funções.
// Criamos dois array (atividade e nota) e na função "adicionaLinha" criamos um push para esses array puxarem os valores que desejamos.
// Após isso criamos a função "atualizaMedia".
// Adicionamos um parsefloat no push de notas, pois não estava nos retornando um valor e sim uma string.
// Na função adiciona linha adicionamos um if para impedir do úsuario colocar uma atividad já existente.
// para impedir que o úsuario faça isso adicionamos uma tag chamada : includes.