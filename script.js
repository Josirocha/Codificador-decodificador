var select = document.querySelector('#selection')

select.addEventListener('change', function () {
    if (select.value == "cesar") {
        steps.style.display = 'flex'
    } else {
        steps.style.display = 'none'
    }
})

function criptografia() {
    const text = document.getElementById('textToDecode')
    const method = document.getElementById('selection')
    const steps = document.getElementById('passos')
    if (method.value === "cesar") {
        toCesar(text, steps)
    } else {
        toB64(text)
    }
}

function toCesar(text, steps) {

}

function toB64(text) {
    const code = document.querySelector('input[name="code"]:checked').value
    if (code === "codificar") {
        document.getElementById("decodedText").value = btoa(text.value)
    } else if (code === "decodificar") {
        document.getElementById("decodedText").value = atob(text.value)
    } else {
        alert("selecione codificar ou decodificar")
    }
}