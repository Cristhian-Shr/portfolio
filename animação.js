const blink = document.querySelector('.blink')

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador)
      contador++
      digitacao(texto, contador)
    }, 110)
  }
}

digitacao('Cristhian Sander Schröer', 0)
