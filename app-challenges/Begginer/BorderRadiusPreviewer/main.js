function changeBorder() {
    const box = document.getElementById('box')
    const topRight = document.getElementById('menu-top-right').value + "px"
    const topLeft = document.getElementById('menu-top-left').value + "px"
    const bottomRight = document.getElementById('menu-bottom-right').value + "px"
    const bottomLeft = document.getElementById('menu-bottom-left').value + "px"



    box.style.borderTopRightRadius = topRight
    box.style.borderTopLeftRadius = topLeft
    box.style.borderBottomRightRadius = bottomRight
    box.style.borderBottomLeftRadius = bottomLeft

    return true
}