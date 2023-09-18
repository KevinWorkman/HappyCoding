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

# Example: Merge Sort

Merge sort is one of the most famous recursive algorithms, and it sorts an array by recursively halving it into smaller and smaller subarrays, until the subarrays only have a single element in them. A single-element subarray is technically already sorted. It then merges the subarrays back together by selecting the smallest elements from each subarray in order, so that the result is sorted.

```java
void mergeSort(int[] nums) {
  mergeSort(nums, 0, nums.length - 1);
  return nums;
}

// Recursive helper function that sorts the specified subarray.
// Note: startIndex and endIndex are inclusive boundaries.
void mergeSort(int[] array, int startIndex, int endIndex) {
  // If the subarray is less than two elements, we're done.
  if(startIndex >= endIndex) {
    return;
  }

  // Split the subarray into two sub-subarrays and mergesort them.
  int centerIndex = (startIndex + endIndex) / 2;
  mergeSort(array, startIndex, centerIndex);
  mergeSort(array, centerIndex + 1, endIndex);

  // Merge the two sorted sub-subarrays into a single subarray.
  merge(array, startIndex, centerIndex, endIndex);
}

// Merge two sorted halves of a subarray into a single sorted subarray.
// Note: startIndex and endIndex are inclusive boundaries.
void merge(int[] array, int startIndex, int centerIndex, int endIndex) {
  // Create copies of the left and right halves.
  // Arrays.copyOfRange endIndex is exclusive, so add one.
  int[] leftArray = Arrays.copyOfRange(array, startIndex, centerIndex + 1);
  int[] rightArray = Arrays.copyOfRange(array, centerIndex + 1, endIndex + 1);

  int arrayIndex = startIndex;
  int leftIndex = 0;
  int rightIndex = 0;

  // Look through the left and right halves, selecting the smallest from each in order.
  while(leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if(leftArray[leftIndex] < rightArray[rightIndex]) {
      array[arrayIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = rightArray[rightIndex];
      rightIndex++;
    }

    arrayIndex++;
  }

  // Copy the remaining values from the left array into the output.
  while(leftIndex < leftArray.length) {
    array[arrayIndex] = leftArray[leftIndex];
    leftIndex++;
    arrayIndex++;
  }

  // Copy the remaining values from the right array into the output.
  while(rightIndex < rightArray.length) {
    array[arrayIndex] = rightArray[rightIndex];
    rightIndex++;
    arrayIndex++;
  }
}
```

# Algorithmic Complexity

The algorithmic complexity of recursive algorithms depend on exactly how you're splitting up your data.

For merge sort, the algorithmic complexity is `O(n log n)`. Here's an image that demonstrates why:

![Visualization of merge sort. Each level has O(n) complexity, and there are log 2 n levels, for a total complexity of O(n log n)](/tutorials/interviewing/images/recursion-2.png)

Each "level" of the merge sort algorithm requires `O(n)` complexity, because it merges the sorted subarrays together. And since it splits the data in half each level, the number of levels will be <code>log<sub>2</sub>n</code>. So the total steps is <code>n * log<sub>2</sub>n</code>.

Similar to how you drop multipliers when converting from individual steps to big O notation, <code>n * log<sub>2</sub>n</code> becomes `O(n * log n)`.

That's the algorithmic complexity for merge sort, but the algorithmic complexity of other recursive algorithms depends on what they're doing. For example, the recursive `factorial()` function above has an algorithmic complexity of `O(n)`. I'll talk more about recursive algorithmic complexity in the next tutorial.

# Practice Questions

- [Sort an Array](https://leetcode.com/problems/sort-an-array/)
- [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [Integer to English Words](https://leetcode.com/problems/integer-to-english-words/)
- [Elimination Game](https://leetcode.com/problems/elimination-game/)
- [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
- [Power of Two](https://leetcode.com/problems/power-of-two/)
- [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
