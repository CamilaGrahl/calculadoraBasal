const BOTON = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('fluidoPorHora');
const MAN = document.getElementById('mantenimiento');
//boton.addEventListener('click', () => { console.log('se presionó el boton'); });
BOTON.addEventListener('click', () => {
    const PESO = document.getElementById('peso').valueAsNumber;
    if (PESO> 0 ) {
        ERROR.style.display = 'none';
        definirMetodo(PESO);
    }else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
});

function definirMetodo(peso){
    let fluido;
    if (peso <= 30){
        console.log("holliday");
        fluido = calcularMetodoHolliday(peso);
        FLU.innerHTML = Math.floor(fluido/24) + 'cc/h';
        MAN.innerHTML = Math.floor((fluido/24)*1.5) + 'cc/h' ;
    }else{
        fluido = calcularMetodoDeSuperficieCorporal(peso);
        FLU.innerHTML = valor + 'cc';
        MAN.innerHTML = Math.floor((fluido/1500)*2000 ) + ' cc';
    }
    FLU.style.display = 'block';
    MAN.style.display = 'block';
}

function calcularMetodoHolliday(peso) {
    let fluido;
    if (peso <= 10){
        fluido = peso*100;
    } else if (peso<=20){
        fluido = (peso - 10)*50 + 1000;
    } else{
        fluido = (peso - 20)*20 + 1500; 
    }
    return fluido;
}

function calcularMetodoDeSuperficieCorporal(peso){
    return valor = Math.floor((((peso * 4) + 7) / (peso + 90))*1500);
}
