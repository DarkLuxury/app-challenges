function binDec() {
    const binario = document.getElementById('bin').value
    if (binario === "") return alert("Digite valores binários")

    binario.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Digite apenas valores binários');
    });
    const decimal = parseInt(binario, 2);
    document.getElementById('dec').value = decimal;
    return true;
}