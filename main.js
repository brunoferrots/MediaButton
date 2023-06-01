function executeSound(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const buttonList = document.querySelectorAll('.tecla');

buttonList.forEach((button) => button.onclick = function () {
    executeSound('#som_tecla_pom');
});

let name = buttonList[0].getAttributeNames();

console.log(name);

