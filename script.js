let idiomaAtual = "pt"

function languageMode() {
  const textos = document.querySelectorAll(".texto")
  const html = document.documentElement

  if (idiomaAtual === "pt") {
    idiomaAtual = "fr"
    textos.forEach((el) => {
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
    html.classList.add("frenchStyle")
  } else {
    idiomaAtual = "pt"
    textos.forEach((el) => {
      el.textContent = el.getAttribute("data-" + idiomaAtual)
    })
    html.classList.remove("frenchStyle")
  }
}
