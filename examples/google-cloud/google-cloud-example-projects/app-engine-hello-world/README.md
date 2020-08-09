This project contains a barebones example webapp.

This project is laid out like this:

- **`pom.xml`** is a Maven [POM file](https://maven.apache.org/pom.html) that defines the project.
- `src/main/` is a directory that contains the project's code.
- `webapp/` is a directory that contains web files.
  - **`index.html`** is an HTML file that shows static content.
- `WEB-INF/` is a directory that contains files that users should not be able to access directly, like config files.
  - **`appengine-web.xml`** is a config file that sets certain App Engine settings.
- `java/` is a directory that contains server-side code.
  - `io.happycoding.servlets` is a Java package.
    - **`HelloWorldServlet.java`** is a Java servlet that runs server-side code and returns some HTML content.

You can run this locally by executing this command:

```
mvn package appengine:run
```

Learn more at [HappyCoding.io/tutorials/google-cloud/setup](https://happycoding.io/tutorials/google-cloud/setup).