function onlynumber() {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58) || tecla == 42 || tecla == 43 || tecla == 45 || tecla == 47 || tecla == 8 || tecla == 0) return true;
    else {
        return false;
    }
}

function catchNumber(input) {
    var inputValue = input.value
    var currentValue = document.getElementById('current-num')

    if (currentValue.value.length < 8) {
       currentValue.value += inputValue
    } else return false

    return valor
}