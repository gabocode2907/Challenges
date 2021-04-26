function printSum(x) {
    var sum = 0;
    for(var i = 0 ; i <= x ; i++){
        console.log(i);
        sum = sum + i;
        console.log(sum);
    }
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el o hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640