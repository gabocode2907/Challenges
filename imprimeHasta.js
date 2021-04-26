function imprimeHasta(x) {
    for(var i = 0 ; i <= x ; i++){
        console.log(i);
    }
}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(-10); 
console.log(y); // debe imprimir 'false'