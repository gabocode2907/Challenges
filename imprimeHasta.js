function imprimeHasta(x) {
    if(x<1){
        return false;
    }
    for(var i = 0 ; i <= x ; i++){
        console.log(i);
    }
}
imprimeHasta(100); // debe imprimir todos los enteros desde el 1 hasta el 1000000
var y = imprimeHasta(-10); 
console.log(y); // debe imprimir 'false'just a test testing a lot
