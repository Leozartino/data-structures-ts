class Stack<T> {
  private count: number;
  private storage: any;

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(...args: Array<T>) {
    args.forEach(element => {
      this.storage[this.count] = element;
      this.count += 1;
    });
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.storage[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    this.storage = {};
    this.count = 0;
  }

  showStack() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.storage[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.storage[i]}`;
    }
    return objString;
  }
}
export default Stack;
