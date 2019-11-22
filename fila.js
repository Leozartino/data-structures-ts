//FIFO
function Fila() {
  this.index = 0;
  this.lowestIndex = 0;
  this.fila = {};

  this.insertFila = value => {
    this.fila[this.index] = value;
    this.index += 1;
  };
  this.removeFila = () => {
    if (!this.isEmpty()) {
      const result = this.fila[this.lowestIndex];
      delete this.fila[this.lowestIndex];
      this.lowestIndex += 1;
      return result;
    }
    return "Não pode retirar da fila";
  };
  this.peek = () => (this.isEmpty() ? undefined : this.fila[lowestIndex]);

  this.size = () => this.index;

  this.isEmpty = () => this.index - this.lowestIndex === 0;

  this.showFila = () => this.fila;

  this.clearFila = () => {
    this.fila = {};
    this.index = 0;
    this.lowestIndex = 0;
  };
}

const filaDeBanco = new Fila();

filaDeBanco.insertFila("João");
filaDeBanco.insertFila("Maria");
filaDeBanco.insertFila("Marcelo");
filaDeBanco.insertFila("Ana");

console.log(filaDeBanco.isEmpty(), filaDeBanco.size(), filaDeBanco.showFila());

filaDeBanco.removeFila();
filaDeBanco.removeFila();

console.log(filaDeBanco.showFila());
