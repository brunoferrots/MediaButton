function executeSoundPom() {
    document.querySelector('#som_tecla_pom').play();
}

const buttonList = document.querySelectorAll('.tecla');

let name = buttonList[0].getAttributeNames();

console.log(name);

