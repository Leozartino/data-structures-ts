//FIFO
class Queue {
  constructor() {
    this.index = 0;
    this.lowestIndex = 0;
    this.queue = {};
  }

  insertQueue = (...args) => {
    args.forEach(value => {
      this.queue[this.index] = value;
      this.index += 1;
    });
  };
  removeQueue = () => {
    if (!this.isEmpty()) {
      const result = this.queue[this.lowestIndex];
      delete this.queue[this.lowestIndex];
      this.lowestIndex += 1;
      return result;
    }
    return "Error, NOT AUTHORIZED!";
  };
  peek = () => (this.isEmpty() ? undefined : this.queue[lowestIndex]);

  size = () => this.index;

  isEmpty = () => this.index - this.lowestIndex === 0;

  showQueue = () => this.queue;

  clearQueue = () => {
    this.queue = {};
    this.index = 0;
    this.lowestIndex = 0;
  };
}
