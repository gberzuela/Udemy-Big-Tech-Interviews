/*
Time:  O(n)
Space: O(n) b/c of the callstack
*/
const factorial = (x) => {
  if (x <= 1) return 1;
  return x * factorial(x - 1);
};

console.log(factorial(4));

/*
https://2ality.com/2015/06/tail-call-optimization.html#normal-execution

By removing the additional computation from the original recursive call, we can bring the space complexity down to O(1). Certain languages are smart enough to remove function calls from the call stack if they aren't "waiting" for something. In the example above, each recursive call would have to wait in the call stack before they can compute the multiplication operation. 

Tail recursion drawbacks:
- Limited language support. JavaScript, Scala, and Haskell to name a few.
- Limited engine support. 
- Difficult to identify when to use.
*/

/*
Time:  O(n)
Space: O(1) constant in SOME engines
*/
const tailFactorial = (x, totalSoFar = 1) => {
  debugger;
  if (x <= 1) return totalSoFar;
  return tailFactorial(x - 1, totalSoFar * x);
};

console.log(tailFactorial(4));
