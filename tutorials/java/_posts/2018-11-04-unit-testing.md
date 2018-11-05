---
layout: tutorial
title: Unit Testing
thumbnail: /tutorials/java/images/unit-testing-1.png
tagline: JUnit and Mockito
sort-key: 1100
meta-title: Java Unit Testing
meta-description: Learn how to use JUnit and Mockito to test your Java code.
meta-image: /tutorials/java/images/unit-testing-2.png
tags: [tutorial, java, junit, mockito]
---

{% include toc.md %}

When writing code, it can be hard to know (let alone prove) that the code you wrote does the right thing. Does it handle input correctly? Does it fail gracefully when it's given bad data? Does it deal with edge cases the way you expected?

You can manually test your code to increase your confidence, but that becomes more difficult when you have multiple people working on the same code: will the next person remember to test all of the same cases you originally tested? How will they know if they change your code in a way that breaks something?

Just as importantly, when you're sharing a codebase with other people, how do you know that the code **you** wrote doesn't break anything? Imagine working on a large codebase with hundreds of thousands of lines of code: how do you know that the little change you made to a library function won't break everything?

This is where **unit testing** comes in handy. Unit tests are small programs that you write to test out your "real" code. A unit test generally only tests out one small piece of functionality, and you'll usually write a bunch of unit tests to make sure your code handles a variety of conditions. By running unit tests on your code, you can be more confident that your change didn't break anything.

# JUnit

[JUnit](https://junit.org) is a library that helps us write unit tests. JUnit handles stuff like automatically setting up an environment, calling a series of test functions, and making sure that the code does what we expected through assertions.

It's probably easiest to just see an example. Consider this simple Java class:

```java
public class ThingAdder {
 public int addThings(int one, int two) {
   return one + two;
 }
}
```

Here's a JUnit test class that contains a single test function for the `ThingAdder` class:

```java
import org.junit.Assert;
import org.junit.Test;

public class ThingAdderTest {

 @Test
 public void testAddThings(){
   ThingAdder thingAdder = new ThingAdder();
   int one = 1;
   int two = 2;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(3, result);
 }
}
```

When we run this class through JUnit, JUnit sees the `@Test` annotation and automatically runs the `testAddThings()` function. This function creates some example input, calls the `addThings()` function, and then checks that the result is what we expected. If the `Assert.assertEquals()` function finds that the result is not what we expected, the test will fail. Otherwise, the test will pass.

Notice that the `testAddThings()` function is split up into three sections. The first section **arranges** the test by preparing example input, the second section **acts** by calling the function we're trying to test, and the third section **asserts** to check that the result matches our expectations. Splitting your test code up into sections like this can help make it more obvious exactly what the test is doing.

# Multiple Tests

So far we just have a single function that tests our `ThingAdder` class, but in real life we'd probably want multiple tests that check for different types of input, corner cases, and possible errors.

For example we might want a test for negative numbers, or for very large numbers.

```java
import org.junit.Assert;
import org.junit.Test;

public class ThingAdderTest {

 @Test
 public void testAddThings_positive(){
   ThingAdder thingAdder = new ThingAdder();
   int one = 1;
   int two = 2;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(3, result);
 }

 @Test
 public void testAddThings_negative(){
   ThingAdder thingAdder = new ThingAdder();
   int one = -1;
   int two = -2;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(-3, result);
 }

 @Test
 public void testAddThings_overflow(){
   ThingAdder thingAdder = new ThingAdder();
   int one = Integer.MAX_VALUE;
   int two = 1;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(Integer.MIN_VALUE, result);
 }

}
```

When we run JUnit, JUnit will run each of these test functions. **Notice that each test function only tests one thing!**

Writing tests also allows us to test our own assumptions. For example, maybe we expected that overflow started over at 0 instead of at the minimum value. In that case, our test would have failed, and we would have been able to make the necessary change in our code.

Even with this simple example, we could probably add more tests: checking that a mix of positive and negative numbers works how we expect, checking that adding zero works how we expect, or checking that multiple calls to the addThings() function works how we expect. **You'll often end up writing more test code than "real" code!**

# Setup

Notice that each of our test functions starts with the same line of code:

```java
ThingAdder thingAdder = new ThingAdder();
```

We can get rid of this duplication using the `@Before` annotation. Like its name suggests, any functions with this annotation will be run before each test function. This allows us to move repeated initialization code from the test functions into a setup function:

```java
import org.junit.Assert;
import org.junit.Test;

public class ThingAdderTest {

 ThingAdder thingAdder;

 @Before
 public void setup(){
   thingAdder = new ThingAdder();
 }

 @Test
 public void testAddThings_positive(){
   int one = 1;
   int two = 2;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(3, result);
 }

 @Test
 public void testAddThings_negative(){
   int one = -1;
   int two = -2;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(-3, result);
 }

 @Test
 public void testAddThings_overflow(){
   int one = Integer.MAX_VALUE;
   int two = 1;
   
   int result = thingAdder.addThings(one, two);

   Assert.assertEquals(Integer.MIN_VALUE, result);
 }

}
```

Now JUnit will automatically run the `setup()` function before it runs each test function.

# Hard-coding

You've probably heard that using [hard-coded](https://en.wikipedia.org/wiki/Hard_coding) values is generally a bad idea when we're writing code. **The opposite is true for test code!** Tests should use hard-coded values as much as possible, and we should avoid putting any logic in our tests.

For example, note that we're passing a value directly into the `Assert.assertEquals()` function. We might be tempted to do something like this instead:

```java
Assert.asserEquals(one+two, thingAdder.addThings(one, two));
```

But this actually makes the test harder to read. It also just repeats the logic that we're trying to test, so it's not a very valuable test. Instead, we should hardcode values as much as possible:

```java
Assert.asserEquals(42, thingAdder.addThings(one, two));
```

# Mocks

Remember that a unit test should only test one thing at a time: a single class or a single function. But what if we have code like this?

```java
public class ThingAdder{

 private DataConnection dataConnection;

 public ThingAdder(DataConnection dataConnection){
   this.dataConnection = dataConnection;
 }

 public void addThings() {
   int one = dataConnection.getThingOne();
   int two = dataConnection.getThingTwo();
   int result = one + two;
   dataConnection.setResult(result);
 }
}
```

This class uses another class named `DataConnection` to get and store data. How would we go about testing our `ThingAdder` class?

If `DataConnection` was a simple Java class, then our test class could create an instance of `DataConnection` and pass it into the `ThingAdder` constructor. But if `DataConnection` is more complicated and requires external dependencies like a database connection, then we're better off using a **mock**. [Mockito](https://site.mockito.org/) is a popular library for creating mocks.

A mock is an object that can be treated just like any other instance of a particular class, but without relying on any logic inside the class. Instead, we can tell our mock to return a certain value when a function is called.

## Creating Mocks

To create a mock, we call the `Mockito.mock()` function and pass it the class we want to mock:

```java
DataConnection mockDataConnection = Mockito.mock(DataConnection.class);
```

And then to mock out a function, we call the `Mockito.when()` and `thenReturn()` functions:

```java
Mockito.when(mockDataConnection.getThingOne()).thenReturn(42);
```

Now if we call `mockDataConnection.getThingOne()`, the function will return `42` without invoking any internal logic.

## Verification

To check whether a function is called on a mock object, we can use the `Mockito.verify()` function:

```java
Mockito.verify(mockDataConnection.setResult(42));
```

This function will verify that our code called `setResult(42)` on our mock object, without invoking any of the logic inside the `setResult()` function. If our code does not call `setResult(42)`, then the test will fail.

Putting it all together, our test would look like this:

```java
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

public class ThingAdderTest {

 @Test
 public void testAddThings(){
   DataConnection mockDataConnection = Mockito.mock(DataConnection.class);
   Mockito.when(mockDataConnection.getThingOne()).thenReturn(1);
   Mockito.when(mockDataConnection.getThingTwo()).thenReturn(2);
   ThingAdder thingAdder = new ThingAdder(mockDataConnection);

   thingAdder.addThings();

   Mockito.verify(mockDataConnection.setResult(3));
 }
}
```

This test function creates a mock `DataConnection`, and mocks out its `getThingOne()` and `getThingTwo()` functions. It then verifies that the code called `setResult(3)` on the mock object. Of course, we could then add other test functions just like we did before.

## Examining Arguments

If you want to take a more detailed look at the argument passed into a mock, you can use the `ArgumentCaptor` class. For example, imagine that we have a `Result` class and the `DataConnection.setResult()` function took a `Result` parameter. We could get at the value of that parameter like this:

```java
ArgumentCaptor<Result> resultArgumentCaptor = ArgumentCaptor.forClass(Result.class);
Mockito.verify(mockDataConnection.setResult(resultArgumentCaptor.capture());
Result result = resultArgumentCaptor.getValue();
Assert.assertEquals(42, result.getResult());
```

This is just an example, and exactly what you do with the `ArgumentCaptor` will depend on what you're trying to test.

# Fixing Broken Tests

Unit tests confirm that your code works a certain way. So if you change the behavior of your code, your tests will break. So if you're working in a project that contains unit tests, you're going to spend a significant portion of your time fixing broken tests.

When a test fails, the first thing you should do is check whether it's failing in a way you expected. Understand what the test was originally doing, and look at how your code changed the behavior being tested.

If the test did not break in a way that you expected, then you should take a closer look at your code to make sure it's doing what you expected.

If the test did break in an expected way, then you should modify the test to reflect the new behavior.

For example, let's say we modified our `addThings()` function to concatenate the values instead of use mathematical addition, so `addThings(1, 2)` returned `12` instead of `3`, and `addThings(123, 456)` returned `123456` instead of `579`. We would expect this change to break our tests: in fact, if it doesn't break any tests, then our code isn't doing what we expected it to do!

We'd then look at each failing test and make sure that the test is failing how we expected. Then we'd modify the tests to reflect the new behavior.

# Adding Tests

In addition to modifying the existing tests, you'll usually want to add tests for any new behavior in any code you write. Generally speaking, **any pull request that contains a code change should also contain a test change.**

In our example, we might add a new test for `addThings(123, 456)` or for very long numbers, or for values in different bases like binary or hexadecimal.

Writing code is only half the battle. You also have to add tests for the code you write!

# Working in Small Steps

One of the most important things to remember is that you should not be submitting pull requests that contain hundreds of lines of code and thousands of lines of tests. For the sake of the sanity of both you and your coworkers, try to work in small pieces!

Try to [break your problem down into smaller individual steps](/tutorials/how-to/program), and then take those steps on one at a time. This will make it easier to write tests, and your code will be easier for your coworkers to review. Try to get into the habit of going through this process:

- Write the code for one small piece of the problem.
- Fix broken tests.
- Add new tests.
- Send it off for code review!

# Other Types of Tests

Unit tests are designed to be small and to only test one thing at a time. This is great for verifying that individual pieces of your code work how you expect and don't break in the future, but they aren't great for testing a full system end to end or for testing out a user interface.

## Integration and UI Testing

End-to-end tests are called **integration tests** and usually involve more elaborate test frameworks. For example, an integration test might start up a test server and then programmatically use the mouse and keyboard to test that the web browser does the right thing.

## Manual Testing

Unit tests are a form of **automated testing**, which means that the tests run automatically and code is ultimately responsible for determining whether something is working correctly. These types of tests are good for detecting when a change in the code breaks an assumption made somewhere else in the code, but they're not a substitute for manually testing that everything works yourself.

In addition to writing tests, always make sure that the code actually works the way you expect it to. Run a local server, and click around the site as if you're a user. Test to make sure that the previous functionality still works, and that whatever you added does what you expected it to.

It's fine to have unfinished features in your code: in fact, it's a very good idea to break things down into small pieces and submit those pieces one at a time instead of waiting until a whole feature is done. But each of those changes should be complete enough so that it doesn't break the rest of project! The code should compile, and everything should still work without breaking.

It can be useful to come up with a checklist and run through it whenever you're ready to submit a change.