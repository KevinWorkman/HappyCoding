---
layout: post
title: Search Insert Position
thumbnail: /tutorials/interviewing/images/arrays-1.jpg
tagline: Return the index of an item, even if it's not in the array.
sort-key: 200
meta-title: Search Insert Position - Leetcode 35 Code Along
meta-description: Return the index of an item, even if it's not in the array.
meta-image: /tutorials/interviewing/images/arrays-1.jpg
tags: [example, java, arrays, interviewing]
previousPost: /tutorials/interviewing/arrays
forumExcerpt: I posted a new code along for the Search Insert Position Leetcode problem.
---

{% include youtube-embed.html slug="lKSifjGMsDs" %}

---

[Search Insert Position](https://leetcode.com/problems/search-insert-position/) is a Leetcode problem that presents this question:

> Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You could do this with a `for` loop:

```java
for (int i = 0; i < nums.length; i++) {
  int value = nums[i];

  if(value >= target){
      return i;
  }
}

return nums.length;
```

However, Leetcode has this additional requirement:

> You must write an algorithm with O(log n) runtime complexity.

This mirrors the way an interviewer might ask if you could improve on your solution.

Since the array is sorted, you can use binary search to find the index.

You might get "clever" and use the built-in `Arrays.binarySearch()` function:

```java
int index = Arrays.binarySearch(nums, target);
if(index >= 0) {
  return index;
} else{
  return -index - 1;
}
```

This shows familiarity with the language, but chances are your interviewer would follow this up by asking you to write out the logic yourself.




```java
class Solution {
  public int searchInsert(int[] nums, int target) {
    int leftIndex = 0;
    int rightIndex = nums.length - 1;
    while (leftIndex <= rightIndex) {
      int centerIndex = (leftIndex + rightIndex) / 2;
      int value = nums[centerIndex];
      if (target == value) {
        return centerIndex;
      } else if (target < value) {
        rightIndex = centerIndex - 1;
      } else if (target > value) {
        leftIndex = centerIndex + 1;
      }
    }

    return leftIndex;
  }
}
```

Binary search is one of the most popular algorithms, so make sure it's in your back pocket for problems like this.
