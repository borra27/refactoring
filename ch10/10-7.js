for (const p of people) {
  if (p === "Don") {
    sendAlert();
    break; // boolean 타입은 최대한 쓰지 않도록
  }
}
