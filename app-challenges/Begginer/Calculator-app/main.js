function onlynumber() {
    var tecla = (window.event) ? event.keyCode : e.which;
    if ((tecla > 47 && tecla < 58) || tecla == 42 || tecla == 43 || tecla == 45 || tecla == 47 || tecla == 8 || tecla == 0) return true;
    else {
        return false;
    }
}

function catchNumber(input) { //coleta o valor do input dos numeros
    var inputValue = input.value
    var currentNum = document.getElementById('current-num')

    if (currentNum.value.length < 8) {
        currentNum.value += inputValue
    } else return false

}

function catchOperation(input) { //coleta o valor do input das operações de limpar e limpar tudo e executa
    var inputValue = input.value
    var matSymbol = document.getElementById('mat-symbol')
    var currentNum = document.getElementById('current-num')
    var lastNum = document.getElementById('last-num')
    var matResult = document.getElementById('mat-result')

    var operation = inputValue

    switch (operation) {
        case "CE":
            clear()
            break
        case "C":
            clearAll()
            break
    }

    function clear() {
        currentNum.value = ""
    }
    function clearAll() {
        currentNum.value = ""
        lastNum.value = ""
        matSymbol.value = ""
        matResult.value = ""
    }
}

function catchMatSymbol(input) { //coleta o valor do input dos simbolos aritméticos
    var inputValue = input.value
    var matSymbol = document.getElementById('mat-symbol')
    var currentNum = document.getElementById('current-num')
    var lastNum = document.getElementById('last-num')
    var matResult = document.getElementById('mat-result')

    op()
    matSymbol.value = inputValue

    function op() { //executa a operação aritmética de acordo com o valor do simbolo coletado

        if(currentNum.value == ""){
            currentNum.value = 0
        }
        else if (lastNum.value == "") {
            lastNum.value = `${currentNum.value}${matSymbol.value}`
            matResult.value = currentNum.value
            currentNum.value = ""
        } else {
            switch (matSymbol.value) {
                case "+":
                    sum()
                    calcHist()
                    break
                case "-":
                    sub()
                    calcHist()
                    break
                case "*":
                    plus()
                    calcHist()
                    break
                case "/":
                    split()
                    calcHist()
                    break
                case "=":
                    equal()
                    break
            }
        }

        function equal() { // realiza a ultima operação digitada
            switch (matSymbol.value) {
                case "+":
                    sum()
                    break
                case "-":
                    sub()
                    break
                case "*":
                    plus()
                    break
                case "/":
                    split()
                    break
            }
        }

        function calcHist() { //adiciona o simbolo aritmético + o valor digitado no historico
            lastNum.value += `${matSymbol.value}${currentNum.value}`
            currentNum.value = ""
        }
        function sum() {

            var firstNum = parseInt(matResult.value, 10)
            var secondNum = parseInt(currentNum.value, 10)
            matResult.value = firstNum + secondNum
        }

        function sub() {

            var firstNum = parseInt(matResult.value, 10)
            var secondNum = parseInt(currentNum.value, 10)
            matResult.value = firstNum - secondNum
        }

        function plus() {

            var firstNum = parseInt(matResult.value, 10)
            var secondNum = parseInt(currentNum.value, 10)
            matResult.value = firstNum * secondNum
        }
        function split() {

            var firstNum = parseInt(matResult.value, 10)
            var secondNum = parseInt(currentNum.value, 10)
            matResult.value = firstNum / secondNum
        }
    }
}