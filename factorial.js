function factorial(n)
{
  let result = 1;
  if (n == 0 || n == 1)
  {
    return result;
  }
  else if(n > 1)
  {
    for( i = n; i >= 1; i--)
    {
      result = result * i;
    }
    return result;
  }
  else{
    return "number has to be positive."
  }  
}
let n = 4;
result = factorial(n)
console.log("Factorial of " + n + " : " + result);