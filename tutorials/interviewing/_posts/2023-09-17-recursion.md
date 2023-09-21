---
layout: tutorial
title: Recursion
thumbnail: /tutorials/interviewing/images/recursion-1.jpg
tagline: To understand recursion, first understand recursion.
sort-key: 1200
meta-title: Recursion - Interviewing Tutorial
meta-description: Use recursion in technical interviews.
meta-image: /tutorials/interviewing/images/recursion-1.jpg
previousPost: /tutorials/interviewing/queues
tags: [tutorial, interviewing]
forumExcerpt: I posted a new article about using recursion in technical interviews.
---

Now you've seen a few different data structure that each have properties that make them useful for certain kinds of technical interview questions.

This article talks about recursion, which is a technique that's often used in technical interviews.

# Recursion is Recursive

Recursion by itself is not a data structure or an algorithm. It's the technique of calling a function from itself, which lets you break problems down into smaller steps.

For example, lets say you want to write a function that calculates the [factorial](https://en.wikipedia.org/wiki/Factorial) of a number. For example:

- `factorial(3)` = `3 * 2 * 1` = `6`
- `factorial(5)` = `5 * 4 * 3 * 2 * 1` = `120`
- `factorial(1)` = `1`

In other words, to find the factorial of `n`, you can multiply `n` by the factorial of `n-1`. To find the factorial of `n-1`, you can multiply `n-1` by the factorial of `n-2`. Figuring out a factorial requires figuring out a smaller factorial, which you can accomplish with recursion:

```java
int factorial(int n) {
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
```

The `factorial()` function calls the `factorial()` function, which calls the `factorial()` function, which calls the `factorial()` function... Until the argument `n` is `1`, which has a known factorial value.

# Base Case

If a function calls itself without a way of breaking out of it, eventually you'll trigger a `StackOverflowError`.

To avoid this, make sure you have a **base case** that prevents the function from infinitely calling itself.

In the above example, the `if` statement looks for a base case of `n == 1`.

# Recursion vs Iteration

The above example is a little contrived, because you can do the same thing with a single `for` loop:

```java
int factorial(int n) {
  int factorial = 1;

  for(int i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}
```

In fact, any recursive function that calls itself as its last step (in other words, any tail-recursive function) can be rewritten to use a loop instead.

I'm not saying you should _never_ use recursion, but you also shouldn't _always_ use it just because you can. Whether you use it depends on the problem and whether recursion makes your code easier to understand.

# Example: Binary Search

Binary search is one of the most famous recursive algorithms. It finds an element in a sorted array by splitting the array in half, around a center index. If the target element is less than the center element, it recursively calls itself to look in the left half. If the target element is greater than the center element, binary search recursively calls itself to look in the right half of the array. It repeats this process until it finds the target element at the center index of a subarray, or until the subarrays contain zero elements.

The code looks like this:

```java
public int binarySearch(int[] array, int target) {
    return binarySearch(array, target, 0, array.length - 1);
}

// Recursive helper function
int binarySearch(int[] array, int target, int left, int right) {
  // If left and right have crossed, target is not in the array.
  if(left > right) {
    return -1;
  }

  // Calculate the center index.
  int center = (left + right) / 2;

  // Target is to the left of the center.
  if (target < array[center]) {
    return binarySearch(array, target, left, center - 1);
  }

  // Target is to the right of the center.
  if(target > array[center]){
    return binarySearch(array, target, center + 1, right);
  }

  // If the code reaches here, then the target is at the center index.
  return center;
}
```

# Algorithmic Complexity: Logarithms

The algorithmic complexity of recursive algorithms depend on exactly how you're splitting up your data.

For binary search, the algorithmic complexity is `O(log n)`.

To understand why, think about the fact that binary search divides the array in half each time it calls itself, and it stops when the array size is 1. So to find out how many times binary search will need to call itself, you need to ask: how many times can I divide `array.length` in half until I reach a size of `1`?

There's a mathematical concept for that: logarithms!

Logarithms tell you how many times you can divide a number by another number before reaching 1. For example, to find out how many times you can divide `64` by `2` until you reach `1`, you could count:

1. 64 / 2 = 32
2. 32 / 2 = 16
3. 16 / 2 = 8
4. 8 / 2 = 4
5. 4 / 2 = 2
6. 2 / 2 = 1

Or you can write it as a logarithm: <code>log<sub>2</sub>64</code>

That logarithm is a shorthand for "however many times you an divide 64 by 2 until reaching 1".

So when dealing with recursive functions that split the input into smaller factors, the algorithmic complexity often (but not always!) involves logarithms. Since binary search splits the array in half, it will call itself <code>log<sub>2</sub>n</code> times.

And similar to how you drop multipliers when converting from individual steps to big O notation, <code>log<sub>2</sub>n</code> becomes `O(log n)`.

That's the algorithmic complexity for binary search, but the algorithmic complexity of other recursive algorithms depends on what they're doing. For example, the recursive `factorial()` function above has an algorithmic complexity of `O(n)`.

# Practice Questions

- [Binary Search](https://leetcode.com/problems/binary-search/)
- [Sort an Array](https://leetcode.com/problems/sort-an-array/)
- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)
- [Elimination Game](https://leetcode.com/problems/elimination-game/)
- [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [Power of Two](https://leetcode.com/problems/power-of-two/)
- [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
