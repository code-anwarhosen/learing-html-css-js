const inputElm = document.querySelector('#input-el');
const convertBtn = document.querySelector('#convert-btn');

const lengthElm = document.querySelector('#length p');
const volumeElm = document.querySelector('#volume p');
const massElm = document.querySelector('#mass p');

function convertAndRender(num) {
    const unit = Number(num);

    const meterToFeet = (unit * 3.281).toFixed(3);
    const fettToMeter = (unit / 3.281).toFixed(3);
    lengthElm.textContent = `${unit} meters = ${meterToFeet} feets | ${unit} feets = ${fettToMeter} meters`;

    const literToGallon = (unit / 3.785).toFixed(3);
    const galllonToLiter = (unit * 3.785).toFixed(3);
    volumeElm.textContent = `${unit} liters = ${literToGallon} gallons | ${unit} gallons = ${galllonToLiter} liters`;
    
    const kgToPound = (unit * 2.205).toFixed(3);
    const poundToKg = (unit / 2.205).toFixed(3);
    massElm.textContent = `${unit} kgs = ${kgToPound} pounds | ${unit} pounds = ${poundToKg} kgs`;
}

convertBtn.addEventListener('click', () => {
    const inputVal = inputElm.value;
    setTimeout(convertAndRender, 200, inputVal);
});
