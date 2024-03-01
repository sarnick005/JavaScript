document.addEventListener('DOMContentLoaded', function () {
    let inputTemperature = document.getElementById("input-temperature");
    let selectTemperature = document.getElementById("temperature-type");
    let outputTemperature= document.getElementById("output-temperature");
    let outputElement = document.getElementById("output");

    document.getElementById("convert-btn").addEventListener("click", function () {
        let selectedValue = selectTemperature.value;
        console.log(selectedValue);
        console.log(outputTemperature.value);
        console.log(inputTemperature.value);
        let convertedTemp = 0;
        if(selectedValue === 'celsius' && outputTemperature.value === 'fahrenheit' ){
            convertedTemp = (9*inputTemperature.value + 160)/5;
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} °F`;
        }else if(selectedValue === 'celsius' && outputTemperature.value === 'kelvin'){
            convertedTemp = inputTemperature.value*1 + 273.15;
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} K`;
        }else if(selectedValue === 'fahrenheit' && outputTemperature.value === 'celsius'){
            convertedTemp = (5*inputTemperature.value - 160)/9;
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} °C`;
        }else if(selectedValue === 'fahrenheit' && outputTemperature.value === 'kelvin'){
            convertedTemp = ((5*inputTemperature.value - 160)/9) + 273.15;
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} K`;
        }else if(selectedValue === 'kelvin' && outputTemperature.value === 'celsius'){
            convertedTemp = inputTemperature.value - 273.15;
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} K`;
        }else if(selectedValue === 'kelvin' && outputTemperature.value === 'fahrenheit'){
            convertedTemp = ((5*(inputTemperature.value*1 - 273.15)- 160)/9);
            outputElement.textContent = `Converted Temperature is : ${convertedTemp} K`;
        }else{
            outputElement.textContent = `Please choose proper temperature`;
        }
        
    });
});
