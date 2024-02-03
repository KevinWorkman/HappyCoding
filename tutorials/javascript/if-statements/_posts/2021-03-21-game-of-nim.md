---
title: Game of Nim
layout: post
thumbnail: /tutorials/javascript/images/game-of-nim-1.png
tagline: Play the Game of Nim against the computer!
sort-key: 100
meta-title: Game of Nim - JavaScript Example
meta-description: Play the Game of Nim against the computer!
meta-image: /tutorials/javascript/images/game-of-nim-2.png
tags: [example, html, javascript]
previousPost: /tutorials/javascript/if-statements
redirect_from: /examples/javascript/game-of-nim
discourseEmbedUrl: /examples/javascript/game-of-nim
---

<script>
  let total = 21;

  function subtract(n) {
    total -= n;
    document.getElementById('total').innerText = total;
    log('New total: ' + total);
    disableIllegalButtons();
  }

  function subtractPlayerChoice(choice) {
    log('You subtract ' + choice);
    subtract(choice);
    setButtonsEnabled(false);
    if(total == 1) {
      log('<h2>You won!</h2>');
      document.getElementById('total').innerText += ' - You won!';
      document.getElementById('resetButton').style.display = 'block';
    } else {
      log('Computer is thinking...')
      setTimeout(playComputerTurn, 1000);
    }
  }

  function playComputerTurn() {
    let choice;

    if (document.getElementById('hardMode').checked) {
      if (total % 4 == 1) {
        choice = 1 + Math.floor(Math.random() * 3);
      } else {
        choice = (total - 1) % 4;
      }
    } else{
      if(total == 2) {
        choice = 1;
      } else if (total == 3) {
        choice = 1 + Math.floor(Math.random() * 2);
      } else {
        choice = 1 + Math.floor(Math.random() * 3);
      }
    }

    log('Computer subtracts ' + choice);
    subtract(choice);

    if (total == 1) {
      log('<h2>Computer won!</h2>');
      document.getElementById('total').innerText += ' - Computer won!';
      setButtonsEnabled(false);
      document.getElementById('resetButton').style.display = 'block';
    } else {
      setButtonsEnabled(true);
    }
  }

  function log(message) {
    document.getElementById('log').innerHTML += '<li>' + message + '</li>'
  }

  function setButtonsEnabled(enabled) {
    const playerButtons = document.getElementsByClassName('playerButton');
    for (const button of playerButtons) {
      button.disabled = !enabled;
    }

    if (enabled) {
      disableIllegalButtons();
    }
  }

  function disableIllegalButtons() {
    if (total == 2) {
      document.getElementById('twoButton').disabled = true;
      document.getElementById('threeButton').disabled = true;
    }

    if (total == 3) {
      document.getElementById('threeButton').disabled = true;
    }        
  }

  function reset() {
    total = 21;
    document.getElementById('total').innerText = total;
    document.getElementById('log').innerHTML = '';
    log('Game starts at 21.');
    log('Take turns subtracting 1, 2, or 3.');
    log('Win by leaving your opponent with 1.');
    setButtonsEnabled(true);
    document.getElementById('resetButton').style.display = 'none';
  }
    </script>

<style>
  #titleAndMode {
    display: flex;
    align-items: center;
  }

  #titleAndMode h1 {
    margin-right: 25px;
  }

  .playerButton{
    font-size: 24px;
  }

  #resetButton {
    display: none;
  }

  li h2 {
    margin: 0;
  }
</style>

<div style="border: thin solid black; padding: 25px;">
  <div id="titleAndMode">
    <h1>Game of Nim</h1>
    <div>
      <label>
        <input type="radio" id="easyMode" name="mode" checked>
        Easy
      </label>
      <br>
      <label><input type="radio" id="hardMode" name="mode">Hard</label>
    </div>
  </div>

  <h2 id="total">21</h2>

  <button id="oneButton" class="playerButton"
          onclick="subtractPlayerChoice(1)">-1</button>
  <button id="twoButton" class="playerButton"
          onclick="subtractPlayerChoice(2)">-2</button>
  <button id="threeButton" class="playerButton"
          onclick="subtractPlayerChoice(3)">-3</button>

  <ul id="log">
    <li>Game starts at 21.</li>
    <li>Take turns subtracting 1, 2, or 3.</li>
    <li>Win by leaving your opponent with 1.</li>
  </ul>

  <button id="resetButton" onclick="reset()">Reset</button>
</div>

<hr>

{% include youtube-embed.html slug="JE0UpdRI3TE" %}

This code lets you play the [Game of Nim](https://en.wikipedia.org/wiki/Nim) against the computer.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Game of Nim</title>
		<script>
			let total = 21;

      function subtract(n) {
        total -= n;
        document.getElementById('total').innerText = total;
        log('New total: ' + total);
        disableIllegalButtons();
      }

      function subtractPlayerChoice(choice) {
        log('You subtract ' + choice);
        subtract(choice);
        setButtonsEnabled(false);
        if(total == 1) {
          log('<h2>You won!</h2>');
          document.getElementById('total').innerText += ' - You won!';
          document.getElementById('resetButton').style.display = 'block';
        } else {
          log('Computer is thinking...')
          setTimeout(playComputerTurn, 1000);
        }
      }

      function playComputerTurn() {
        let choice;

        if (document.getElementById('hardMode').checked) {
          if (total % 4 == 1) {
            choice = 1 + Math.floor(Math.random() * 3);
          } else {
            choice = (total - 1) % 4;
          }
        } else{
          if(total == 2) {
            choice = 1;
          } else if (total == 3) {
            choice = 1 + Math.floor(Math.random() * 2);
          } else {
            choice = 1 + Math.floor(Math.random() * 3);
          }
        }

        log('Computer subtracts ' + choice);
        subtract(choice);

        if (total == 1) {
          log('<h2>Computer won!</h2>');
          document.getElementById('total').innerText += ' - Computer won!';
          setButtonsEnabled(false);
          document.getElementById('resetButton').style.display = 'block';
        } else {
          setButtonsEnabled(true);
        }
      }

      function log(message) {
        document.getElementById('log').innerHTML += '<li>' + message + '</li>'
      }

      function setButtonsEnabled(enabled) {
        const playerButtons = document.getElementsByClassName('playerButton');
        for (const button of playerButtons) {
          button.disabled = !enabled;
        }

        if (enabled) {
          disableIllegalButtons();
        }
      }

      function disableIllegalButtons() {
        if (total == 2) {
          document.getElementById('twoButton').disabled = true;
          document.getElementById('threeButton').disabled = true;
        }

        if (total == 3) {
          document.getElementById('threeButton').disabled = true;
        }        
      }

      function reset() {
        total = 21;
        document.getElementById('total').innerText = total;
        document.getElementById('log').innerHTML = '';
        log('Game starts at 21.');
        log('Take turns subtracting 1, 2, or 3.');
        log('Win by leaving your opponent with 1.');
        setButtonsEnabled(true);
        document.getElementById('resetButton').style.display = 'none';
      }
		</script>

    <style>
      #titleAndMode {
        display: flex;
        align-items: center;
      }

      #titleAndMode h1 {
        margin-right: 25px;
      }

      .playerButton{
        font-size: 24px;
      }

      #resetButton {
        display: none;
      }

      li h2 {
        margin: 0;
      }
    </style>
	</head>
	<body>
    <div id="titleAndMode">
      <h1>Game of Nim</h1>
      <div>
        <label>
          <input type="radio" id="easyMode" name="mode" checked>
          Easy
        </label>
        <br>
        <label><input type="radio" id="hardMode" name="mode">Hard</label>
      </div>
    </div>

    <h2 id="total">21</h2>

    <button id="oneButton" class="playerButton"
            onclick="subtractPlayerChoice(1)">-1</button>
    <button id="twoButton" class="playerButton"
            onclick="subtractPlayerChoice(2)">-2</button>
    <button id="threeButton" class="playerButton"
            onclick="subtractPlayerChoice(3)">-3</button>

    <ul id="log">
      <li>Game starts at 21.</li>
      <li>Take turns subtracting 1, 2, or 3.</li>
      <li>Win by leaving your opponent with 1.</li>
    </ul>

    <button id="resetButton" onclick="reset()">Reset</button>
	</body>
</html>
```


# Remix Ideas

- Change the game to allow subtracting 1, 2, 3, or 4.
- Use [CSS](/tutorials/html/css) to make the game prettier. Try adding animations, images, or effects.
- Implement another version of the game listed on the [Game of Nim](https://en.wikipedia.org/wiki/Nim) page.
- Add an AI that uses a decision tree or the [minimax](https://en.wikipedia.org/wiki/Minimax) algorithm to choose a number.
