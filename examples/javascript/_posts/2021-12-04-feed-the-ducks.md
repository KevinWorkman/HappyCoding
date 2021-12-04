---
title: Feed the Ducks
layout: tutorial
thumbnail: /examples/javascript/images/feed-the-ducks-1.png
tagline: Create an interactive story using if statements!
sort-key: 110
meta-title: Feed the Ducks - JavaScript Example
meta-description: Create an interactive story using if statements!
meta-image: /examples/javascript/images/feed-the-ducks-1.png
tags: [example, html, javascript]
---

<script>
// The user's location, either 'inside' or 'outside'
let userLocation = 'inside';

// Whether the user has the duck food, either true or false
let hasDuckFood = false;

// When this function is called, it takes the value from the action input and
// uses if statements to tell the story.
function submitAction() {

  // Get the action input element
  const actionInput = document.getElementById('action-input');
  // Get the text from the action input element
  const action = actionInput.value;

  // Get the state element
  const stateElement = document.getElementById('state');

  if(userLocation == 'inside') {
    if(action == 'go outside') {
      userLocation = 'outside';
      stateElement.innerHTML =
          'You went outside! You can <strong>go inside</strong> or ' +
          '<strong>feed the ducks</strong>.';
    } else if(action == 'pick up duck food') {
      hasDuckFood = true;
      stateElement.innerHTML =
          'You picked up the duck food! You can <strong>go outside</strong>.';
    } else {
      stateElement.innerHTML =
          'You are inside. You can <strong>pick up duck food</strong> or ' +
          '<strong>go outside</strong>.';
    }
  } else if (userLocation == 'outside') {
    if(action == 'feed the ducks') {
      if(hasDuckFood) {
        userLocation = 'done';
        stateElement.innerHTML = 'You fed the ducks! The end.';
      } else {
        stateElement.innerHTML = 'Your forgot to pick up the duck food! You ' +
            'can <strong>go inside</strong>.';
      }
    } else if(action == 'go inside') {
      userLocation = 'inside';
      if(hasDuckFood) {
        stateElement.innerHTML =
            'You go inside. You can <strong>go outside</strong>.';
      } else {
        stateElement.innerHTML =
            'You go inside. You can <strong>pick up duck food</strong> or ' +
            '<strong>go outside</strong>.';
      }
    } else {
      stateElement.innerHTML =
          'You are outside. You can <strong>go inside</strong> or ' +
          '<strong>feed the ducks</strong>.';
    }
  }

  // Clear the action input
  actionInput.value = '';
}
</script>

<style>
#state {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>

<div style="border: thin solid black; padding: 25px;">
  <h1>Feeding the Ducks</h1>

  <div id="state">
    You are inside your house. You see some duck food on a shelf. You can
    <strong>pick up duck food</strong> or <strong>go outside</strong>.
  </div>

  <div id="input">
    <input id="action-input" />
    <button onclick="submitAction();">Done</button>
  </div>
</div>

<hr>

This code creates an interactive story where the user can enter commands to navigate the world.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Feeding the Ducks</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="script.js"></script>
  </head>
  <body>

    <h1>Feeding the Ducks</h1>

    <div id="state">
      You are inside your house. You see some duck food on a shelf. You can
      <strong>pick up duck food</strong> or <strong>go outside</strong>.
    </div>

    <div id="input">
      <input id="action-input" />
      <button onclick="submitAction();">Done</button>
    </div>

  </body>
</html>
```

```javascript
// The user's location, either 'inside' or 'outside'
let userLocation = 'inside';

// Whether the user has the duck food, either true or false
let hasDuckFood = false;

// When this function is called, it takes the value from the action input and
// uses if statements to tell the story.
function submitAction() {

  // Get the action input element
  const actionInput = document.getElementById('action-input');
  // Get the text from the action input element
  const action = actionInput.value;

  // Get the state element
  const stateElement = document.getElementById('state');

  if(userLocation == 'inside') {
    if(action == 'go outside') {
      userLocation = 'outside';
      stateElement.innerHTML =
          'You went outside! You can <strong>go inside</strong> or ' +
          '<strong>feed the ducks</strong>.';
    } else if(action == 'pick up duck food') {
      hasDuckFood = true;
      stateElement.innerHTML =
          'You picked up the duck food! You can <strong>go outside</strong>.';
    } else {
      stateElement.innerHTML =
          'You are inside. You can <strong>pick up duck food</strong> or ' +
          '<strong>go outside</strong>.';
    }
  } else if (userLocation == 'outside') {
    if(action == 'feed the ducks') {
      if(hasDuckFood) {
        userLocation = 'done';
        stateElement.innerHTML = 'You fed the ducks! The end.';
      } else {
        stateElement.innerHTML = 'Your forgot to pick up the duck food! You ' +
            'can <strong>go inside</strong>.';
      }
    } else if(action == 'go inside') {
      userLocation = 'inside';
      if(hasDuckFood) {
        stateElement.innerHTML =
            'You go inside. You can <strong>go outside</strong>.';
      } else {
        stateElement.innerHTML =
            'You go inside. You can <strong>pick up duck food</strong> or ' +
            '<strong>go outside</strong>.';
      }
    } else {
      stateElement.innerHTML =
          'You are outside. You can <strong>go inside</strong> or ' +
          '<strong>feed the ducks</strong>.';
    }
  }

  // Clear the action input
  actionInput.value = '';
}
```

```css
#state {
  margin-top: 50px;
  margin-bottom: 50px;
}
```

# See Also

- [Interactive Fiction](https://en.wikipedia.org/wiki/Interactive_fiction)
- [Choose Your Own Adventure](https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure)

# Remix Ideas

- Add more steps to this story. What if the ducks get angry if you don't have food?
- Expand support for other inputs. What if the user types "get duck food" instead of "pick up duck food"?
- Write your own interactive story! Try recreating a scene from your favorite movie, book, or TV show.