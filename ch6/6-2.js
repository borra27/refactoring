// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
const driver = {
  numberOfLateDeliveries: 6,
};
console.log(rating(driver));

// 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);

  return result;
}
const customer = {
  name: "debora",
  location: "포항시 남구",
};
console.log(reportLines(customer));
