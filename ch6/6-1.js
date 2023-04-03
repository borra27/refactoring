export function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstading(invoice);

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}
function calculateOutstading(invoce) {
  return invoce.orders.reduce((sum, order) => sum + order.amount, 0);
}
function recordDueDate(invoce) {
  const today = new Date();
  // 객체 불변성을 위반하지만, 아직 배우지 않았기 때문에 패스
  invoce.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}
function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
