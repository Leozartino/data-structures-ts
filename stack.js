class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  insertInStack(...args) {
    args.forEach(element => {
      this.storage[this.index] = element;
      this.index += 1;
    });
  }

  isEmpty() {
    return this.index === 0;
  }

  showStack() {
    return this.storage;
  }

  removeElement() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.index -= 1;
    const elementDeleted = this.storage[this.index];
    delete this.storage[this.index];
    return elementDeleted;
  }

  toStr() {
    if (this.isEmpty()) {
      return "";
    }
    let objStr = `${this.storage[0]}`;

    for (let i = 1; i < this.index; i++) {
      objStr = `${objStr},${this.storage[i]}`;
    }
    return objStr;
  }

  peek() {
    return this.storage[this.index - 1];
  }
}

module.exports = Stack;
