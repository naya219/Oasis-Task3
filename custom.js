


const conFah = () =>{
    var celsius = parseFloat(document.querySelector("#celsius").value);

    var fahResult = (1.8 * celsius)+32;
    var a = fahResult.toFixed(2);

    document.querySelector("#celsius").value = celsius;
    document.querySelector("#fahrenheit").value = a;
}

const conCel = () =>{
    var fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    var celResult = (fahrenheit - 32)/1.8;
    var b = celResult.toFixed(2);

    document.querySelector("#celsius").value = b;
    document.querySelector("#fahrenheit").value = fahrenheit;
    
}

const reset = () =>{
    document.querySelector("#celsius").value = " ";
    document.querySelector("#fahreheit").value = " ";
}