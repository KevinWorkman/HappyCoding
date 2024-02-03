---
layout: post
title: Remove Element
thumbnail: /tutorials/interviewing/images/arrays-1.jpg
tagline: Remove an element from an array in-place.
sort-key: 300
meta-title: Remove Element - Leetcode 27 Code Along
meta-description: Return the index of an item, even if it's not in the array.
meta-image: /tutorials/interviewing/images/arrays-1.jpg
tags: [example, java, arrays, interviewing]
previousPost: /tutorials/interviewing/arrays
forumExcerpt: I posted a new code along for the Remove Element Leetcode problem.
---

{% include youtube-embed.html slug="1GI3B3NZbdI" %}

---

[Remove Element](https://leetcode.com/problems/remove-element/) is a Leetcode problem that presents this challenge:

> Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

If you ignore the in-place requirement, you could do this with an `ArrayList`:

```java
ArrayList<Integer> list = new ArrayList<>();
for(int i = 0; i < nums.length; i++){
  list.add(nums[i]);
}

int removed = 0;
while(list.remove(Integer.valueOf(val))){
  removed++;
}

for(int i = 0; i < list.size(); i++){
  nums[i] = list.get(i);
}

return nums.length - removed;
```

To do it in-place (without creating any other data structures), you might loop over each element. When you find a match to be removed, you can use another `for` loop to shift every subsequent element left by one:

```java
int notEqualCount = 0;
for (int i = 0; i < nums.length; i++) {

  int element = nums[i];

  if(element != val){
    notEqualCount++;
  } else {
    // Shift every subsequent element left by one
    for(int j = i; j < nums.length - 1; j++) {
      nums[j] = nums[j+1];
    }
    // Keep i at the same index to avoid skipping shifted elements
    i--;
  }
}

return notEqualCount;
```

This works, but it's inefficient (O(n^2)) because it shifts the entire array left every time it finds a match.

Instead, you can use two pointers to process the array in a single pass:

```java
class Solution {
  public int removeElement(int[] nums, int val) {

    int leftIndex = 0;

    for (int rightIndex = 0; rightIndex < nums.length; rightIndex++) {
      int rightElement = nums[rightIndex];
      if (rightElement != val) {
        nums[leftIndex] = rightElement;
        leftIndex++;
      }
    }

    return leftIndex;
  }
}
```

Using two pointers is a common approach for processing arrays or strings, so make sure it's in your back pocket for problems like this.
