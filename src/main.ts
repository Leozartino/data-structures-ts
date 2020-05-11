import {InstantiatedStack, InstantiatedQueue, InstantiatedDeck} from './algorithms/index';
import binarySearch from './algorithms/binarySearch';

InstantiatedStack.push(5,6,7,8,9);

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


console.log(binarySearch([67,69,70,85,100,102,254,800], 70))
