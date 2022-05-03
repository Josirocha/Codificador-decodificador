const select = document.getElementById('selection')

select.addEventListener('change', function () {
  if (select.value == 'cesar') {
    steps.style.display = 'flex'
  } else {
    steps.style.display = 'none'
  }
})
// mudar mensagem do botão
const radioCodificar = document.getElementById('radiocodificar')
const radioDecodificar = document.getElementById('radiodecodificar')
const criptografarBtn = document.getElementById('criptografarbtn')

radioCodificar.addEventListener('change', function () {
  criptografarBtn.innerHTML = 'Codificar Mensagem'
})
radioDecodificar.addEventListener('change', function () {
  criptografarBtn.innerHTML = 'Decodificar Mensagem'
})

function criptografia() {
  const text = document.getElementById('textToDecode')
  const method = document.getElementById('selection')
  if (method.value === 'cesar') {
    toCesar(text)
  } else {
    toB64(text)
  }
}

function toCesar(text) {
  const steps = document.getElementById('passos')
}
//base 64
function toB64(text) {
  const code = document.querySelector('input[name="code"]:checked').value
  if (code === 'codificar') {
    document.getElementById('decodedText').value = btoa(text.value)
  } else if (code === 'decodificar') {
    document.getElementById('decodedText').value = atob(text.value)
  } else {
    alert('selecione codificar ou decodificar')
  }
}
