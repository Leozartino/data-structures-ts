import {Stack, Queue, Deck} from '../algorithms/index';

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
