## Questions and Answers

### 2. In functional programming what does the word functor mean? Can you give an example in JavaScript?

A functor is a data object that is able to hold elements that are of any data type and can be mapped over by implementing the map operation. A functors map function uses another function as an argument and this function is called on each element within the functor. The end result is a new functor with the same number of elements in it as the original functor.

```JavaScript
const prime = [1,3,9,11,13];
	.map(p => parseInt(p))
	.map(p => p * 2) => [2,6,18,22,26]
```

### 3. We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.
