export function printOwing(invoice) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${calculateOutstading(invoice.orders)}`);
  console.log(`due: ${recordDueDate().toLocaleDateString()}`);
}
function calculateOutstading(orders) {
  let result = 0;
  for (const order of orders) {
    result += order.amount;
  }
  return result;
}
function recordDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
