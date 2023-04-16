import fs from "fs";

const fileName = getFile(process.argv);
const orders = getOrders(fileName);
checkReady(process.argv, orders);

function getFile(argv) {
  if (!argv[2]) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  return fileName;
}

function getOrders(file) {
  const rawData = fs.readFileSync(file);
  return JSON.parse(rawData);
}

function checkReady(argv, orders) {
  if (argv.includes("-r")) {
    console.log(orders.filter((order) => order.status === "ready").length);
  } else {
    console.log(orders.length);
  }
}
