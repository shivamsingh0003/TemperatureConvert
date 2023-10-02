
function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputScale = document.getElementById("inputScale").value;
    const outputScale = document.getElementById("outputScale").value;
    let outputTemp;

    if (inputScale === outputScale) {
        outputTemp = inputTemp;
    } else if (inputScale === "celsius") {
        if (outputScale === "fahrenheit") {
            outputTemp = (inputTemp * 9/5) + 32;
        } else if (outputScale === "kelvin") {
            outputTemp = inputTemp + 273.15;
        }
    } else if (inputScale === "fahrenheit") {
        if (outputScale === "celsius") {
            outputTemp = (inputTemp - 32) * 5/9;
        } else if (outputScale === "kelvin") {
            outputTemp = ((inputTemp - 32) * 5/9) + 273.15;
        }
    } else if (inputScale === "kelvin") {
        if (outputScale === "celsius") {
            outputTemp = inputTemp - 273.15;
        } else if (outputScale === "fahrenheit") {
            outputTemp = ((inputTemp - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById("outputTemp").innerText = `${outputTemp.toFixed(2)} ${outputScale}`;
}
