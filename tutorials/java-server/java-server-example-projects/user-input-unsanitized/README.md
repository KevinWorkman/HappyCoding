This project uses a form to send a POST request to a servlet.

It doesn't sanitize the data, so users can enter HTML and JavaScript. This is dangerous!

You can compile this into a directory and a `.war` file by executing this command:

```
mvn package
```

Learn more at [HappyCoding.io/tutorials/java-server/libraries](https://happycoding.io/tutorials/java-server/post).