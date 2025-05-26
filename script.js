// set o idioma base como pt.
let idiomaAtual = "pt"

function languageMode() {
  //Recupera todos os textos a serem traduzidos.
  const textos = document.querySelectorAll(".texto")
  // Recupera o elemento html onde vamos adiconar e tirar a class frenchStyle.
  const html = document.documentElement

  if (idiomaAtual === "pt") {
    // Mudança de idioma
    idiomaAtual = "fr"
    //Para cada texto, vamos mudar a data a ser exibida na pagina.
    textos.forEach(function (el) {
      //muda a "data" com a concatenação "pt" ou "fr".
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
    // Adiciona a class frenchStyle, que muda o estilo do botão.
    html.classList.add("frenchStyle")

    //Nos permite voltar ao pt.
  } else {
    idiomaAtual = "pt"
    textos.forEach(function (el) {
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
    html.classList.remove("frenchStyle")
  }
}
