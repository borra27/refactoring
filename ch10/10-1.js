function calculateCharge(date, quantity, plan) {
  if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
    return quantity * plan.summerRate;
  return quantity * plan.regularRate + plan.regularServiceCharge;
}
