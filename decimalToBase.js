const Stack = require("./stack");

function DecimalToBase(decNumber, base) {
  const remStack = new Stack();
  let rem = 0;
  let binaryString = "";
  const digits = "0123456789ABCDEF";

  if (base < 0 || base > 16) {
    return "Não há conversão para esta base " + base;
  } else {
    while (decNumber > 0) {
      rem = Math.floor(decNumber % base);
      remStack.insertInStack(rem);
      decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
      binaryString += digits[remStack.removeElement()];
    }
    return binaryString;
  }
}

console.log(DecimalToBase(2020, 16));
