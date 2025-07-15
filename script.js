const multiply = (a, b) => a * b;

function showResult() 
{
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);

  if (Number.isFinite(a) && Number.isFinite(b)) {
    const result = multiply(a, b);
    document.getElementById("result").innerText = `Result: ${result}`;
  } else {
    document.getElementById("result").innerText = "Please enter valid numbers.";
  }
}
