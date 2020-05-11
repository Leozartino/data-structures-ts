import {Stack, Queue, Deck} from '../algorithms/index';
import binarySearch from '../algorithms/binarySearch';

Stack.push(5,6,7,8,9);
console.log(Stack.showStack());
Stack.pop();
console.log(Stack.showStack());


Queue.enqueue(12);
Queue.enqueue(55);
Queue.enqueue(9);
console.log(Queue.showQueue());
Queue.dequeue();
console.log(Queue.showQueue());


Deck.addBack(6);
Deck.addFront(3);
console.log(Deck.showDeck());


console.log(binarySearch([67,69,70,85,100,102,254,800], 70))
