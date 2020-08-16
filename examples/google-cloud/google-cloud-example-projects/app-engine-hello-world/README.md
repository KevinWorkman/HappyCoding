This project contains a barebones example webapp.

This project is laid out like this:

- `app-engine-hello-world/`
  - **`pom.xml`** is a Maven [POM file](https://maven.apache.org/pom.html) that defines the project.
  - `src/main/` is a directory that contains the code.
    - `appengine/`**`app.yaml`** is a [config file](https://cloud.google.com/appengine/docs/standard/java11/config/appref) that sets up App Engine. The hello world project only uses a single property that sets the runtime to Java 11.
    - `java/` is a directory that contains server-side code.
      - `io.happycoding.`**`ServerMain.java`** is the main class that sets up the server.
      - `io.happycoding.servlets.`**`HelloWorldServlet.java`** is a Java servlet that returns some HTML content.
    - `webapp/` is a directory that contains web files.
      - **`index.html`** is an HTML file that shows static content.

You can run this locally by executing this command:

```
mvn package exec:java
```

Learn more at [HappyCoding.io/tutorials/google-cloud/setup](https://happycoding.io/tutorials/google-cloud/setup).