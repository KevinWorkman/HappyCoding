This project contains a barebones example webapp that uses embedded Jetty to deploy a server using the command line.

This project is laid out like this:

- `hello-world-embedded-jetty-command-line/`
  - `io/happycoding/` is a directory representing a Java package.
    - `ServerMain.java` is the main class that sets up the server.
    - `HelloWorldServlet.java` is a Java servlet that returns some HTML content.
  - `index.html` is an HTML file that shows static content.

You can run this locally by compiling the `.java` files and then running the `ServerMain` class.

Learn more at [HappyCoding.io/tutorials/java-server/embedded-jetty](https://happycoding.io/tutorials/java-server/embedded-jetty).