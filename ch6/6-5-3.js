// 함수 안에서 정말 필요한 데이터만 받는 것이 중요함. 의존도를 낮춰 재사용성을 높임.
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
