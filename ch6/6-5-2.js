export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // flag 마다 다른 동작을 수행하면 좋지 않음... 추후에 할 것
  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
