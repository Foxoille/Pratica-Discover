let idiomaAtual = "pt"

function languageMode() {
  const textos = document.querySelectorAll(".texto")

  if (idiomaAtual === "pt") {
    idiomaAtual = "fr"
    textos.forEach((el) => {
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
  } else {
    idiomaAtual = "pt"
    textos.forEach((el) => {
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
  }
}
