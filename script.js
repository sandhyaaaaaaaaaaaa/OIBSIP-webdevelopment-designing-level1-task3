document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultArea = document.getElementById('resultArea');

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput === '') {
        resultArea.innerHTML = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let unit;

    // Conversion logic
    if (unitSelect === 'Celsius') {
        convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        unit = 'Fahrenheit';
    } else if (unitSelect === 'Fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
        unit = 'Celsius';
    } else if (unitSelect === 'Kelvin') {
        // Convert Kelvin to Celsius and Fahrenheit
        convertedTemperatureC = temperature - 273.15; // Kelvin to Celsius
        convertedTemperatureF = (convertedTemperatureC * 9/5) + 32; // Celsius to Fahrenheit
        resultArea.innerHTML = `${temperature} K = ${convertedTemperatureC.toFixed(2)} °C = ${convertedTemperatureF.toFixed(2)} °F`;
        return;
    }

    resultArea.innerHTML = `${temperature} ${unitSelect} = ${convertedTemperature.toFixed(2)} ${unit}`;
});
