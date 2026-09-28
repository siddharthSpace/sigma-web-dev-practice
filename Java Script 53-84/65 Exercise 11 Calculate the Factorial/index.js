function factorialUsingReduce(n) {
    if (n === 0 || n === 1) return 1;

    return Array.from({ length: n }, (_, i) => i + 1)
                .reduce((acc, val) => acc * val, 1);
}

console.log(factorialUsingReduce(5)); // Output: 120
