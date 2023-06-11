class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number) {
    assert(number >= 0); // 개발 중에만 유효하게. 배포 시에는 버그 리포트를 제출하는 등 다른 액션으로 대체
    return this.discountRate ? number - this.discountRate * number : number;
  }
}
