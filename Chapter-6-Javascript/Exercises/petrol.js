// Get elements from the DOM
const costInput = document.getElementById("cost-per-liter");
const litersInput = document.getElementById("liters-purchased");
const calculateButton = document.getElementById("calculate");
const totalCostOutput = document.getElementById("total-cost");

// Add click event listener to the calculate button
calculateButton.addEventListener("click", calculateTotalCost);

// Calculate total cost function
function calculateTotalCost() {
  const costPerLiter = costInput.value;
  const litersPurchased = litersInput.value;
  const totalCost = costPerLiter * litersPurchased;
  totalCostOutput.innerHTML = `Total cost: ${totalCost.toFixed(2)}`;
}
