---
layout: tutorial
title: Creating JavaScript Objects
slug: creating-objects
thumbnail: /tutorials/javascript/images/creating-objects-1.png
tagline: Learn about creating objects in JavaScript.
sort-key: 600
meta-title: Creating JavaScript Objects
meta-description: Learn about creating objects in JavaScript.
meta-image: /tutorials/html/javascript/creating-objects-2.png
tags: [tutorial, javascript, basic]
---

Now you know how to write JavaScript code, you know how to use event callbacks, and you know how to use the Document Object Model (aka the DOM) to use objects and functions to interact with the webpage.

From the Processing tutorials, you also know the basics of creating your own classes, which allows you to create objects with their own functions and variables.

This tutorial describes creating objects in JavaScript, which is very different from creating objects in Processing.

## JavaScript is Weird

If you're coming from a Processing or Java background, creating objects in JavaScript is going to seem just plain weird. That's okay! You aren't alone. This was probably the hardest thing for me to wrap my brain around when I was learning JavaScript.

So if you feel a little "wait... what??" after reading this tutorial, that's okay. You don't need to become an expert by reading just this one tutorial. Just try to remember the basics, and if (when) you come across some syntax that looks a bit strange, feel free to come back here and re-read this tutorial. And as always, feel free to post in [the forum](http://forum.HappyCoding.io) if something doesn't make sense.

Anyway, here we go!

## Functions

In JavaScript, functions can be stored in variables. For example:

```javascript
function printMessage(msg){
  console.log(msg);
}

var x = printMessage;
x("told you it was weird");
```

This code defines a `printMessage()` function that takes a parameter and prints it to the console. It then declares an `x` variable and points it at the `printMessage()` function. Now we can call the `printMessage()` function using the `x` variable.

Similarly, you can store a function directly in a variable:

```javascript
var alertMessage = function(msg){
  alert(msg);
}

alertMessage("hello world");
```

This code creates a function that takes a parameter and shows it in a dialog, and stores it in the `alertMessage` variable. Now we can call that function using the `alertMessage` variable.

This will become more useful in a second.

## Object Literals

One way to create objects in JavaScript is to use an object literal, which is a comma-separated list of `property:value` pairs inside `{ }` curly brackets. Here's an example:

```javascript
var point = {x:100, y:200};
console.log(point.x + ", " + point.y);
```

This code creates an object literal that contains `x` and `y` properties. The `x` property has a value of `100`, and the `y` property has a value of `200`. This obejct literal is stored in the `point` variable. Then you can use the `point` variable to access the properties of that object.

The value of a property can be a function:

```javascript
var kevin = {
	name: "Kevin", 
	sayHello: function(){
		console.log("Hi! My name is " + this.name + "!");
	}
};
kevin.sayHello();
```

If this seems strange, keep in mind that it's just a combination of stuff we've already seen: we're creating an object literal, and we're storing a function in a variable.

After an object literal is created, you can add properties to it:

```javascript
var point = {x:100, y:200};
point.z = 300;
console.log(point.x + ", " + point.y + ", " + point.z);
```

Of course, the property you add can also be a function:

```javascript
var point = {x:100, y:200};
point.printMe = function(){
  console.log(this.x + ", " + this.y);
}
point.printMe();
```

You can also pass object literals to functions that accept an object:

```javascript
function printPoint(p){
	console.log(p.x + ", " + p.y);
}

var pointOne = {x:3, y:2};
printPoint(pointOne);

printPoint({x:42, y:27});
```

Notice that you don't have to store an object literal in a variable before passing it into a function; you can just pass it into a function directly.

## Function Objects

Object literals are great if you only have a few properties, or if you want to pass an object to a function without storing it in a variable in your code (like the last line of code in the above example). But what if you want all of your objects to have the same function? Or a default value for a variable?

The other way to create objects is by using a constructor function, which is more similar to how it works in Processing and Java.

To create a function constructor, you start by defining a function just like you're used to. Then in that function, you use the `this` keyword to set the value of variables you want in that object:

```javascript
function Point(){
	this.x = 100;
	this.y = 200;
}
```

Then to create an object using a function constructor, you use the `new` keyword and then call the function constructor. That gives you an object you can store in a variable, and then you can use that variable to reference any variables and functions inside that object.

```javascript
var point = new Point();
console.log(point.x + ", " + point.y);
```

You can also pass in parameters to a constructor function, which allows you to easily create objects with the same properties, but different values for those properties. Think of this like creating multiple instances of a class in Processing or Java.

```javascript
function Point(x, y){
	this.x = x;
	this.y = y;
}

var pointOne = new Point(3.14, 2.7);
var pointTwo = new Point(-1000, 4);

console.log(pointOne.x + ", " + pointOne.y);
console.log(pointTwo.x + ", " + pointTwo.y);
```

Constructor functions can also define functions, then every object you create using the constructor function will have those functions:

```javascript
function Point(x, y){
	this.x = x;
	this.y = y;
  
  this.printMe = function(){
    console.log(this.x + ", " + this.y);
  }
}

var pointOne = new Point(3.14, 2.7);
var pointTwo = new Point(-1000, 4);

pointOne.printMe();
pointTwo.printMe();
```

After you create an object using a function constructor, you can add variables to that object:

```javascript
function Point(x, y){
	this.x = x;
	this.y = y;
  
  this.printMe = function(){
    console.log(this.x + ", " + this.y);
  }
}

var pointOne = new Point(3.14, 2.7);
pointOne.z = 6.02;
pointOne.printMeWithZ = function(){
  console.log(this.x + ", " + this.y + ", " + this.z);
}
pointOne.printMeWithZ();

var pointTwo = new Point(-1000, 4);
pointTwo.printMe();
```

This code defines a function constructor named `Point` and then creates an object with it and stores that object in the `pointOne` variable. The code then adds a `z` variable to the `pointOne` object, and then adds a `printMeWithZ()` function that uses the `z` variable.

But note that this only affects the `pointOne` object. The `pointTwo` object does **not** have a `z` variable or a `printMeWithZ()` function.

If you want to add a variable or function to every object created from a function constructor, you have to use the `prototype` keyword:

```javascript
function Point(x, y){
	this.x = x;
	this.y = y;
  
  this.printMe = function(){
    console.log(this.x + ", " + this.y);
  }
}

var pointOne = new Point(3.14, 2.7);
var pointTwo = new Point(-1000, 4);

Point.prototype.z = 6.02;
Point.prototype.printMeWithZ = function(){
  console.log(this.x + ", " + this.y + ", " + this.z);
}

pointOne.printMeWithZ();
pointTwo.printMeWithZ();
```

This was probably a lot to take in, but for now you should just try to remember that you can use an object literal to pass data around, or you can define a function constructor that acts like a class in Processing. All of the rest will come more naturally as you need those features or see them being used in other people's code.

## Mix and Match

You don't have to pick just one style of creating objects. In real life, you'll probably use a mix of all of the above. Also keep in mind that a value inside an object can be another object!

Here's an example that uses a combination:

```javascript
function Line(startPoint, endPoint){
  this.startPoint = startPoint;
  this.endPoint = endPoint;
}

function Point(x, y){
  this.x = x;
  this.y = y;
}

var lineOne = new Line(new Point(1, 2), {x: 100, y:200});
var lineTwo = {startPoint: {x:1, y:2}, endPoint: new Point(100, 200)};
```

This code creates a `Line` constructor function that takes `startPoint` and `endPoint` parameters. It also creates a `Point` constructor function that takes `x` and `y` parameters.

The code then creates `lineOne` using the `Line` constructor function. It creates the first point using the `Point` constructor function, and the second point using an object literal.

The last line of  code creates `lineTwo` using an object literal, where the object literal contains another object literal, as well as an object created using the `Point` constructor function.

Again, if all of this seems confusing, that's okay. Just know that in real life you'll see (and use!) a mix of constructor functions and object literals.

## Duck Typing 🦆

*"If it looks like a duck, and quacks like a duck, we have at least to consider the possibility that we have a small aquatic bird of the family Anatidae on our hands."* - [Douglas Adams](https://en.wikipedia.org/wiki/Douglas_Adams)

So far, you've seen that you can create an object using a function constructor or using an object literal, and that you can add variables and functions after an object is created.

That means you can do something like this:

```javascript
function print(pointWithZ){
  console.log(pointWithZ.x + ", " + pointWithZ.y + ", " + pointWithZ.z);
}

var point = {x:1, y:2};
point.z = 3;

print(point);
```

This code defines a `print()` function that takes a parameter and prints out its `x`, `y`, and `z` properties. The code then creates an object with `x` and `y` properties, then adds a `z` property. Then it calls the `print()` function with that object, which works fine even though the object didn't originally contain a `z` property.

This is different from Processing or Java, which are statically typed and require every variable and function to be declared ahead of time. But JavaScript is dynamically typed, which allows you to add variables and functions to an object. Here's another example:

```javascript
var point = {x:1, y:2};
point.printMe = function(){
  console.log(this.x + ", " + this.y);
}

function Person(name){
  this.name = name;
  this.printMe = function(){
    console.log("My name is " + this.name);
  }
}
var kevin = new Person("Kevin");

function printThing(thing){
  thing.printMe();
}

printThing(point);
printThing(kevin);
```

This code creates two objects: a `point` variable using an object literal, and a `Person` object using the `Person` function constructor. The code then defines a `printThing()` function, which just calls the `printMe()` function of whatever parameter it's given. Then it calls the `printThing()` function with both the `point` variable and the `kevin` variable, and both work fine since both objects contain a `printMe()` function.

This is known as **duck typing**, named after the saying: "If it looks like a duck, swims like a duck, and quacks like a duck, then it's probably a duck." In other words, as long as an object has the variables and functions you're using in your code, it doesn't matter how it got them. You could even do this:

```javascript
var element = document.getElementById("container");
element.printMe = function(){
  console.log("I'm an element.");
}

printThing(element);
```

This code gets an element from the webpage, and then adds a `printMe()` function to that object. Now the `printThing()` function will even work with that element object! 🦆

## Homework

- Create a function that takes a parameters and adds it to the webpage. Exactly how you do that is up to you: maybe the parameter is an object that contains an image, a description, and a URL linking to more information, and the function creates a thumbnail from those. The point is, create objects that represent a bunch of stuff: your pets, or your favorite bands, or a to-do list. Then call your function with those objects.

## Next: [Libraries](/tutorials/javascript/libraries)
