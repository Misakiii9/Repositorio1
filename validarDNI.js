function validar(formulario) {
    var numeroDNI = document.getElementById("introDNI").value;
    var letraDNI = document.getElementById("edad").value;

    // Array de letras con 24 elementos
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    // Validar que el número esté dentro del rango válido
    if (numeroDNI < 0 || numeroDNI > 99999999) {
        alert("El número no es válido. Debe estar entre 0 y 99.999.999.");
        return false;
    }

    // Validar que la letra no esté vacía y sea un único carácter
    if (letraDNI === "" || letraDNI.length !== 1) {
        alert("Por favor, introduce una sola letra.");
        return false;
    }

    // Validar que la letra esté en mayúsculas
    if (letraDNI !== letraDNI.toUpperCase()) {
        alert("La letra es prefwirble que este en mayúsculas :).");
        return false;
    }

    // Cálculo de la letra correcta para el DNI usando división manual
    var cociente = Math.floor(numeroDNI / 23);  // División Cmpleta
    var residuo = numeroDNI - (cociente * 23);    // Ressiduo

    var letraCorrecta = letras[residuo];  
    // Comparar la letra ingresada con la letra correcta
    if (letraDNI.toUpperCase() !== letraCorrecta) {
        alert("La letra proporcionada no es correcta. La letra correcta es: " + letraCorrecta);
        return false;
    }

  
    alert("El número y la letra del DNI son correctos.");
    return true;
}


