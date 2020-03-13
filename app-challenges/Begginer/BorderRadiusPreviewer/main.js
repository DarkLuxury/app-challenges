function changeBorder() {
    const box = document.getElementById('box')
    const topRight = `${document.getElementById('menu-top-right').value}px`
    const topLeft = `${document.getElementById('menu-top-left').value}px`
    const bottomRight = `${document.getElementById('menu-bottom-right').value}px`
    const bottomLeft = `${document.getElementById('menu-bottom-left').value}px`

    box.style.borderTopRightRadius = topRight
    box.style.borderTopLeftRadius = topLeft
    box.style.borderBottomRightRadius = bottomRight
    box.style.borderBottomLeftRadius = bottomLeft

    return true
}

function copyToClipboard() {
    const topR = box.style.borderTopRightRadius
    const topL = box.style.borderTopLeftRadius
    const botR = box.style.borderBottomRightRadius
    const botL = box.style.borderBottomLeftRadius

    if (topR && topL && botR == botL) {
        var borderRadius = `border-radius: ${botL};`
        document.getElementById('code').value = borderRadius
    } else {
        var borderTopRight = `border-top-right-radius: ${topR};`
        var borderTopLeft = `border-top-left-radius: ${topL};`
        var borderBottomRight = `border-bottom-right-radius: ${botR};`
        var borderBottomLeft = `border-bottom-left-radius: ${botL};`
        if (topR !== "" && topL !== "" && botR !== "" && botL !== "") {
            document.getElementById('code').value = `${borderTopRight}\n${borderTopLeft}\n${borderBottomRight}\n${borderBottomLeft}`
        } else {
            document.getElementById('code').value = "Bordas não possuem valores"
        }
    }

    var copyText = document.getElementById('code').select()
    document.execCommand('copy')
    return true
}