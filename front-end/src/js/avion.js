const btnPedir = document.querySelector('#btnPedir');
 let getData = () => {
    let name1 = document.getElementById("name1").value;
    let age1 = document.getElementById("age1").value;
    if (name1 == "" || age1 == "" ) {
        window.alert('falta completar ');
    } else {
        console.log (name1 + "   " + age1);
        clearData();
    } 
}
let clearData = () => {
    document.getElementById("name1").value = " ";
    document.getElementById("age1").value= " ";
   };

  let asientos = [
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true]
];
let countAvailable = () => {
    let contador = 0;
    for (let i = 0; i < asientos.length; i++) {
        let fila = asientos[i];
        for (let j = 0; j < fila.length; j++) {
            let asiento = fila[j];
            if (asiento === true) {
                contador = contador + 1;
            }
        }
    }
    return contador;
}

let isFullOfCapacity = () => {
    if (countAvailable() === 0) {
        window.alert('no hay mas asientos ');
        btnPedir.disabled = true;
        return true;
    } else {
        return false;
    }
}
let nextAvailable = () => {
    if (isFullOfCapacity() === true) {
        return 'no existe asiento disponible bro'
    } else {
        for (let i = 0; i < asientos.length; i++) {
            let fila = asientos[i];
            for (let j = 0; j < fila.length; j++) {
                let asiento = fila[j];
                if (asiento === true) {
                    let filaSeleccionada = document.getElementsByClassName('row')[i];
                    let asientoSeleccionado = filaSeleccionada.getElementsByClassName('col-auto')[j];
                    asientoSeleccionado.className = 'col-auto mx-2 fila__asiento--ocupado';
                    asientos[i][j] = false;
                    return 'reservado el asiento de la fila: ' + (i + 1) + ' columna: ' + (j + 1);
                }
            }
        }
    }
}