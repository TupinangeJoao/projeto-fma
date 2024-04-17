
const botoes = document.querySelectorAll('.botao');
const homuns = document.querySelectorAll(".homun")
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desSelecionarbotao();

    botao.classList.add("selecionado");


        desSelecionarHomun();

    homuns[indice].classList.add("selecionado");
    });
}
)

function desSelecionarHomun() {
    const homunSelecionado = document.querySelector(".homun.selecionado");
    homunSelecionado.classList.remove("selecionado");
}

function desSelecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
