This project contains a barebones example webapp that uses Maven to package a web app.

This project is laid out like this:

- `hello-world-maven/`
  - **`pom.xml`** is a Maven [POM file](https://maven.apache.org/pom.html) that defines the project.
  - `src/main/` is a directory that contains the code.
    - `java/` is a directory that contains server-side code.
      - `io.happycoding.servlets.`**`HelloWorldServlet.java`** is a Java servlet that returns some HTML content.
    - `webapp/` is a directory that contains web files.
      - **`index.html`** is an HTML file that shows static content.

You can compile this into a directory and a `.war` file by executing this command:

```
mvn package
```

Learn more at [HappyCoding.io/tutorials/java-server](https://happycoding.io/tutorials/java-server).