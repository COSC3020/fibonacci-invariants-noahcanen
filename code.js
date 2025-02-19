function fib(n) {

    var fibo = [0,1];
    if (n == 0) {
        fibo.pop();

        return fibo;
    }

    var fibe = fibre(n,fibo);
    return fibe;

}
function fibre(n, Fibonacci) {
    if (n == Fibonacci.length-1) {
        return Fibonacci;
    }

    Fibonacci[Fibonacci.length] = Fibonacci[Fibonacci.length-2]+Fibonacci[Fibonacci.length-1];

    fibre(n, Fibonacci);
    return Fibonacci;
}
