let steps = 0;
function collatzFunc(n) {
  if (n == 1) {
    return;
  } else if (n % 2 == 0) {
    n /= 2;
    console.log(n);
    steps++;
  } else {
    n = 3 * n + 1;
    console.log(n);
    steps++;
  }

  collatzFunc(n);
}

collatzFunc(17);
console.log("The number of steps it took are: " + steps);
