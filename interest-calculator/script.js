function calculateInterest() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert("Please enter all values correctly.");
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  document.getElementById("result").innerHTML = 
    `Interest: ₹${interest.toFixed(2)}<br>Total Amount: ₹${total.toFixed(2)}`;
}
