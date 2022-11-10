<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html>
  <head>
    <title>Name List</title>
  </head>
  <body>
    <h1>Name List</h1>

    <ul>
      <% List<String> names = (List<String>) request.getAttribute("names"); %>
      <% for (String name : names) { %>
        <li><%= name %></li>
      <% } %>
    </ul>

    <p>Click <a href="/post-name-list-jsp/index.html">here</a> to enter another name.</p>
  </body>
</html>