---
title: Asimov's Empire, Robot, and Foundation Series (CSS Tables)
layout: tutorial
thumbnail: /examples/html/images/asimov-empire-robots-foundation-tables-2.png
tagline: Use CSS to create colored tables!
sort-key: 120
meta-title: Asimov's Empire, Robot, and Foundation Series (CSS Tables)
meta-description: Use CSS to create colored tables!
meta-image: /examples/html/images/asimov-empire-robots-foundation-tables.png
tags: [example, html, css]
---

This example uses HTML and CSS to show all of the books in Isaac Asimov's Empire, Robot, and Foundation series in the order they were published in, the order I recommend reading them, and chronological order.

I originally wrote this HTML to create screenshots of the tables I then posted in [this answer](https://scifi.stackexchange.com/a/235311/26220) on the Sci-Fi Stack Exchange.

<img src="/examples/html/images/asimov-empire-robots-foundation-tables-3.png" style="border: thin solid black;" />

# CSS

```css
body {
  width: 500px;
}

table {
  border-collapse: collapse
}

td, th {
  border: thin solid black;
  padding: 5px;
}

th {
  text-align: left;
}

a {
  color:black;
  text-decoration: none;
}

.empire {
  background-color: aliceblue;
}

.robots {
  background-color: mistyrose;
}

.foundation {
  background-color: honeydew;
}
```

# HTML

```html
<p>The tables below list all of the books in Isaac Asimov's Empire, Robot, and Foundation series in the order they were published in, the order I recommend reading them, and chronological order.</p>

<h1>Published Order</h1>

<table>
  <tr>
    <th>Published</th>
    <th>Title</th>
    <th>Series</th>
    <th>Chronological</th>
  </tr>
  <tr class="empire">
    <td>1950</td>
    <td><a href="https://en.wikipedia.org/wiki/Pebble_in_the_Sky">Pebble in the Sky</a></td>
    <td>Empire</td>
    <td>9</td>
  </tr>
  <tr class="robots">
    <td>1950</td>
    <td><a href="https://en.wikipedia.org/wiki/I,_Robot">I, Robot</a></td>
    <td>Robots</td>
    <td>1</td>
  </tr>
  <tr class="empire">
    <td>1951</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Stars,_Like_Dust">The Stars, Like Dust</a></td>
    <td>Empire</td>
    <td>7</td>
  </tr>
  <tr class="foundation">
    <td>1951</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)">Foundation</a></td>
    <td>Foundation</td>
    <td>12</td>
  </tr>
  <tr class="foundation">
    <td>1952</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Empire">Foundation and Empire</a></td>
    <td>Foundation</td>
    <td>13</td>
  </tr>
  <tr class="foundation">
    <td>1953</td>
    <td><a href="https://en.wikipedia.org/wiki/Second_Foundation">Second Foundation</a></td>
    <td>Foundation</td>
    <td>14</td>
  </tr>
  <tr class="empire">
    <td>1952</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Currents_of_Space">The Currents of Space</a></td>
    <td>Empire</td>
    <td>8</td>
  </tr>
  <tr class="robots">
    <td>1954</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Caves_of_Steel">The Caves of Steel</a></td>
    <td>Robots</td>
    <td>3</td>
  </tr>
  <tr class="na">
    <td>1955</td>
    <td><a href="https://en.wikipedia.org/wiki/The_End_of_Eternity">The End of Eternity</a></td>
    <td>N/A</td>
    <td>17</td>
  </tr>
  <tr class="robots">
    <td>1957</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Naked_Sun">The Naked Sun</a></td>
    <td>Robots</td>
    <td>4</td>
  </tr>
  <tr class="foundation">
    <td>1982</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation%27s_Edge">Foundation's Edge</a></td>
    <td>Foundation</td>
    <td>15</td>
  </tr>
  <tr class="robots">
    <td>1983</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Robots_of_Dawn">The Robots of Dawn</a></td>
    <td>Robots</td>
    <td>5</td>
  </tr>
  <tr class="robots">
    <td>1985</td>
    <td><a href="https://en.wikipedia.org/wiki/Robots_and_Empire">Robots and Empire</a></td>
    <td>Robots</td>
    <td>6</td>
  </tr>
  <tr class="foundation">
    <td>1986</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Earth">Foundation and Earth</a></td>
    <td>Foundation</td>
    <td>16</td>
  </tr>
  <tr class="foundation">
    <td>1988</td>
    <td><a href="https://en.wikipedia.org/wiki/Prelude_to_Foundation">Prelude to Foundation</a></td>
    <td>Foundation</td>
    <td>10</td>
  </tr>
  <tr class="robots">
    <td>1992</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Positronic_Man">The Positronic Man</a></td>
    <td>Robots</td>
    <td>2</td>
  </tr>
  <tr class="foundation">
    <td>1993</td>
    <td><a href="https://en.wikipedia.org/wiki/Forward_the_Foundation">Forward the Foundation</a></td>
    <td>Foundation</td>
    <td>11</td>
  </tr>
</table>

<h1>Recommended Order</h1>

<p>Some books are more standalone and can be read at any time, so instead of reading them in published order, I would recommend moving them around so that you aren't switching between each series as much.</p>

<p>This order is a compromise that gives you mostly published order, but also groups each series together into more cohesive units.</p>

<table>
  <tr>
    <th>Published</th>
    <th>Title</th>
    <th>Series</th>
    <th>Chronological</th>
  </tr>
  <tr class="robots">
    <td>1950</td>
    <td><a href="https://en.wikipedia.org/wiki/I,_Robot">I, Robot</a></td>
    <td>Robots</td>
    <td>1</td>
  </tr>
  <tr class="empire">
    <td>1950</td>
    <td><a href="https://en.wikipedia.org/wiki/Pebble_in_the_Sky">Pebble in the Sky</a></td>
    <td>Empire</td>
    <td>9</td>
  </tr>
  <tr class="empire">
    <td>1951</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Stars,_Like_Dust">The Stars, Like Dust</a></td>
    <td>Empire</td>
    <td>7</td>
  </tr>
  <tr class="empire">
    <td>1952</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Currents_of_Space">The Currents of Space</a></td>
    <td>Empire</td>
    <td>8</td>
  </tr>
  <tr class="foundation">
    <td>1951</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)">Foundation</a></td>
    <td>Foundation</td>
    <td>12</td>
  </tr>
  <tr class="foundation">
    <td>1952</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Empire">Foundation and Empire</a></td>
    <td>Foundation</td>
    <td>13</td>
  </tr>
  <tr class="foundation">
    <td>1953</td>
    <td><a href="https://en.wikipedia.org/wiki/Second_Foundation">Second Foundation</a></td>
    <td>Foundation</td>
    <td>14</td>
  </tr>
  <tr class="robots">
    <td>1954</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Caves_of_Steel">The Caves of Steel</a></td>
    <td>Robots</td>
    <td>3</td>
  </tr>
  <tr class="robots">
    <td>1957</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Naked_Sun">The Naked Sun</a></td>
    <td>Robots</td>
    <td>4</td>
  </tr>
  <tr class="na">
    <td>1955</td>
    <td><a href="https://en.wikipedia.org/wiki/The_End_of_Eternity">The End of Eternity</a></td>
    <td>N/A</td>
    <td>17</td>
  </tr>
  <tr class="foundation">
    <td>1982</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation%27s_Edge">Foundation's Edge</a></td>
    <td>Foundation</td>
    <td>15</td>
  </tr>
  <tr class="robots">
    <td>1983</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Robots_of_Dawn">The Robots of Dawn</a></td>
    <td>Robots</td>
    <td>5</td>
  </tr>
  <tr class="robots">
    <td>1985</td>
    <td><a href="https://en.wikipedia.org/wiki/Robots_and_Empire">Robots and Empire</a></td>
    <td>Robots</td>
    <td>6</td>
  </tr>
  <tr class="robots">
    <td>1992</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Positronic_Man">The Positronic Man</a></td>
    <td>Robots</td>
    <td>2</td>
  </tr>
  <tr class="foundation">
    <td>1986</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Earth">Foundation and Earth</a></td>
    <td>Foundation</td>
    <td>16</td>
  </tr>
  <tr class="foundation">
    <td>1988</td>
    <td><a href="https://en.wikipedia.org/wiki/Prelude_to_Foundation">Prelude to Foundation</a></td>
    <td>Foundation</td>
    <td>10</td>
  </tr>
  <tr class="foundation">
    <td>1993</td>
    <td><a href="https://en.wikipedia.org/wiki/Forward_the_Foundation">Forward the Foundation</a></td>
    <td>Foundation</td>
    <td>11</td>
  </tr>
</table>

<h1>Chronological Order</h1>

<p>I don't recommend reading in chronological order, because that order removes the mystery and surprises from some of the plot lines. But to compare with the above tables, here's chronological order as well.</p>

<table>
  <tr>
    <th>Chronological</th>
    <th>Title</th>
    <th>Series</th>
    <th>Published</th>
  </tr>
  <tr class="robots">
    <td>1</td>
    <td><a href="https://en.wikipedia.org/wiki/I,_Robot">I, Robot</a></td>
    <td>Robots</td>
    <td>1950</td>
  </tr>
  <tr class="robots">
    <td>2</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Positronic_Man">The Positronic Man</a></td>
    <td>Robots</td>
    <td>1992</td>
  </tr>
  <tr class="robots">
    <td>3</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Caves_of_Steel">The Caves of Steel</a></td>
    <td>Robots</td>
    <td>1954</td>
  </tr>
  <tr class="robots">
    <td>4</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Naked_Sun">The Naked Sun</a></td>
    <td>Robots</td>
    <td>1957</td>
  </tr>
  <tr class="robots">
    <td>5</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Robots_of_Dawn">The Robots of Dawn</a></td>
    <td>Robots</td>
    <td>1983</td>
  </tr>
  <tr class="robots">
    <td>6</td>
    <td><a href="https://en.wikipedia.org/wiki/Robots_and_Empire">Robots and Empire</a></td>
    <td>Robots</td>
    <td>1985</td>
  </tr>
  <tr class="empire">
    <td>7</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Stars,_Like_Dust">The Stars, Like Dust</a></td>
    <td>Empire</td>
    <td>1951</td>
  </tr>
  <tr class="empire">
    <td>8</td>
    <td><a href="https://en.wikipedia.org/wiki/The_Currents_of_Space">The Currents of Space</a></td>
    <td>Empire</td>
    <td>1952</td>
  </tr>
  <tr class="empire">
    <td>9</td>
    <td><a href="https://en.wikipedia.org/wiki/Pebble_in_the_Sky">Pebble in the Sky</a></td>
    <td>Empire</td>
    <td>1950</td>
  </tr>
  <tr class="foundation">
    <td>10</td>
    <td><a href="https://en.wikipedia.org/wiki/Prelude_to_Foundation">Prelude to Foundation</a></td>
    <td>Foundation</td>
    <td>1988</td>
  </tr>
  <tr class="foundation">
    <td>11</td>
    <td><a href="https://en.wikipedia.org/wiki/Forward_the_Foundation">Forward the Foundation</a></td>
    <td>Foundation</td>
    <td>1993</td>
  </tr>
  <tr class="foundation">
    <td>12</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_(Asimov_novel)">Foundation</a></td>
    <td>Foundation</td>
    <td>1951</td>
  </tr>
  <tr class="foundation">
    <td>13</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Empire">Foundation and Empire</a></td>
    <td>Foundation</td>
    <td>1952</td>
  </tr>
  <tr class="foundation">
    <td>14</td>
    <td><a href="https://en.wikipedia.org/wiki/Second_Foundation">Second Foundation</a></td>
    <td>Foundation</td>
    <td>1953</td>
  </tr>
  <tr class="foundation">
    <td>15</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation%27s_Edge">Foundation's Edge</a></td>
    <td>Foundation</td>
    <td>1982</td>
  </tr>
  <tr class="foundation">
    <td>16</td>
    <td><a href="https://en.wikipedia.org/wiki/Foundation_and_Earth">Foundation and Earth</a></td>
    <td>Foundation</td>
    <td>1986</td>
  </tr>
  <tr class="na">
    <td>17</td>
    <td><a href="https://en.wikipedia.org/wiki/The_End_of_Eternity">The End of Eternity</a></td>
    <td>N/A</td>
    <td>1955</td>
  </tr>
</table>
```

{% include codepen.html slug-hash="KKgomBV" height="500" %}

## Tweak Ideas

- Create similar tables for your favorite book or movie series.
- Add other books from the extended Empire, Robots, and Foundation series!