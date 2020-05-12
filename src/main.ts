import Stack from './algorithms/stack';
import Queue from './algorithms/queue';
import Deck from './algorithms/deck';
import binarySearch from './algorithms/binarySearch';

const InstantiatedStack = new Stack();
const InstantiatedQueue = new Queue();
const InstantiatedDeck = new Deck();


InstantiatedStack.push(5, 6, 7, 8, 9);

console.log(InstantiatedStack.showStack());
InstantiatedStack.pop();
console.log(InstantiatedStack.showStack());

InstantiatedQueue.enqueue(12);
InstantiatedQueue.enqueue(55);
InstantiatedQueue.enqueue(9);

console.log(InstantiatedQueue.showQueue());
InstantiatedQueue.dequeue();
console.log(InstantiatedQueue.showQueue());

InstantiatedDeck.addBack(6);
InstantiatedDeck.addFront(3);

console.log(InstantiatedDeck.showDeck());

console.log(binarySearch([67, 69, 70, 85, 100, 102, 254, 800], 70));
