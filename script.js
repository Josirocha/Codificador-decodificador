var select = document.querySelector('#selection')

select.addEventListener('change', function () {
    if (select.value == "cesar") {
        steps.style.display = 'flex'
    } else {
        steps.style.display = 'none'
    }
})