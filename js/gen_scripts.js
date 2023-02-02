
var link = document.getElementById('RihterL')
var element = document.getElementById('Rihter')
var isHelpShow = true;
link.onclick = function () {
    if (isHelpShow) {
        element.textContent = "Чарльз Рихтер – крупнейший американский сейсмолог";
        isHelpShow = false;
    } else {
        element.textContent = "";
        isHelpShow = true;
    }
}





