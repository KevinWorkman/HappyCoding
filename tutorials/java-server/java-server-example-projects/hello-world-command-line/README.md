This project contains a barebones example webapp that uses the command line to package a web app.

This project is laid out like this:

- `hello-world-command-line/`
      - **`index.html`** is an HTML file that shows static content.
  - `WEB-INF/classes/` is a directory that contains server-side Java code.
      - `io.happycoding.servlets.HelloWorldServlet.java` is a Java servlet that returns some HTML content.



You can run this locally by compiling the `.java` files and then copying the `hello-world-command-line` directory or `.war` file into the `webapps` directory of your server container.

Learn more at [HappyCoding.io/tutorials/java-server/web-app](https://happycoding.io/tutorials/java-server/web-app).