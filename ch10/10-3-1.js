export function payAmount(employee) {
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: "SEP" };
  } else if (employee.isRetired) {
    return { amount: 0, reasonCode: "RET" };
  } else if (!employee.isRetired) {
    return { amount: 999, reasonCode: "UNICORN" };
  } else {
    return;
  }
}
