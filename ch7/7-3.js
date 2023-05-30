export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  getHighPriorityCount() {
    return this.orders.filter(
      (o) => "high" === o.priority || "rush" === o.priority
    ).length;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

const highPriorityCount = orders.filter(
  (o) => "high" === o.priority || "rush" === o.priority
).length;
