const containerRanting = document.querySelector('[data-ranting]');
const containerThanks = document.querySelector("[data-thanks]");
const botaoEnviar = document.querySelector("[data-botaoEnviar]");

const spanRanting = document.querySelector("[data-selecao]");

const botoesRating = document.querySelectorAll('[data-avaliacao]');

/* acções --------------------------------------------------------------------- */

// percorre os botoes ranting e adiciona classe para eles quando clicado
botoesRating.forEach((botao) => {
    spanRanting.innerText = "0"

    botao.addEventListener("click", (e) => {
        tirarAtivo()
        e.target.classList.toggle("ativo");

        insereTexto(e);
    })
})

botaoEnviar.addEventListener('click', () => {
    verificaAvaliacaoFeita();
})

/* Funções ---------------------------------------------------------------------- */

//faz a classe ativa ser unica aos botoes quando clicado
function tirarAtivo() {
    const botaoAtivo = [...document.querySelectorAll(".ativo")];
    botaoAtivo.map((e) => {
        e.classList.remove("ativo");
    })
}

//verifica se algum botao foi selecionado e caso for ele direciona para a proxima pagina
//caso nao foi selecionado nenhuma nota ele faz um alerta ao usuario
function verificaAvaliacaoFeita() {
    if (spanRanting.textContent !== '0') {
        containerRanting.style.display = 'none';
        containerThanks.style.display = 'flex';
    } else {
        const elementoErro = document.getElementById('erro');
        if (!elementoErro) {
            let paragrafoErro = document.createElement('p');
            containerRanting.appendChild(paragrafoErro);

            paragrafoErro.setAttribute("id", "erro");
            paragrafoErro.classList.add('texto__erro');

            let textoErro = document.createTextNode("Por favor, avalie com uma nota para prosseguir");
            paragrafoErro.appendChild(textoErro);
        }
    }
}

//adiciona o valor da nota na tela de agradecimento
function insereTexto(evento) {
    const botaoSelecionado = evento.target.dataset.avaliacao;

    spanRanting.innerText = botaoSelecionado;
}
