<!DOCTYPE html>
<html>
  <head>
    <title>Coin Flipper</title>
  </head>
  <body>
    <h1>Coin Flipper</h1>
    <p>Flipping a coin...</p>
    <% if(Math.random() < .5){ %>
      <p>Heads!</p>
    <% } else{ %>
      <p>Tails!</p>
    <% } %>
    <hr>
    <p>Refresh to flip again.</p>
  </body>
</html>