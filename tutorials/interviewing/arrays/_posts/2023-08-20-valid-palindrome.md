---
layout: tutorial
title: Valid Palindrome
thumbnail: /tutorials/interviewing/images/arrays-1.jpg
tagline: Return whether a string is the same forward and backward.
sort-key: 100
meta-title: Valid Palindrome - Leetcode Code Along
meta-description: Return whether a string is the same forward and backward.
meta-image: /tutorials/interviewing/images/arrays-1.jpg
tags: [example, java, arrays, interviewing]
previousPost: /tutorials/interviewing/arrays
forumExcerpt: I posted a new code along for the Valid Palindrome problem.
---

{% include youtube-embed.html slug="6bBY72MFoyc" %}

---

[Valid Palindrome](https://leetcode.com/problems/valid-palindrome/) is a Leetcode problem that presents this question:

> A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
>
> Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

Notably, the input can contain symbols that you need to strip out first. I did this using the `replaceAll()` function, but you could also do this using two pointers.

```java
String lowerCased = s.toLowerCase();
String strippedString = lowerCased.replaceAll("[^a-z0-9]", "");
```

You might approach this problem by reversing the string and then checking for equality:

```java
StringBuilder sb = new StringBuilder(strippedString);
String reversed = sb.reverse().toString();
boolean isPalindrome = strippedString.equals(reversed);
return isPalindrome;
```

This is a "clever" solution that shows familiarity with the language, but chances are your interviewer would follow this up by asking you to write out the logic yourself.

One approach is to use a `for` loop to check each character against its mirror:


```java
class Solution {
  public boolean isPalindrome(String s) {

    String lowerCased = s.toLowerCase();
    String strippedString = lowerCased.replaceAll("[^a-z0-9]", "");

    for (int i = 0; i < strippedString.length() / 2; i++) {
      char leftChar = strippedString.charAt(i);
      char rightChar = strippedString.charAt(strippedString.length() - 1 - i);
      if(leftChar != rightChar){
        return false;
      }
    }

    return true;
  }
}
```

Follow ups:

- Return `true` if `s` **contains** a palindrome
- Return `true` if `s` can be **rearranged** into a palindrome
- Return the longest palindrome substring of `s`
