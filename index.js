const textBox = document.getElementById("textBox");
const toCelcius = document.getElementById("toCelcius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let nothingChecked = true;

function convert(event){
    event.preventDefault(); // Prevent form submission

    let temp = Number(textBox.value);
    let convertedTemp;

    if(toCelcius.checked){
        convertedTemp = Math.round((temp - 32) * 5/9);
        nothingChecked = false;
    }
    else if(toFahrenheit.checked){
        convertedTemp = Math.round((temp * 9/5) + 32);
        nothingChecked = false;
    }
    if(!nothingChecked){
        result.textContent = `La temperaratura convertita è: ${convertedTemp}`;
    }
}



