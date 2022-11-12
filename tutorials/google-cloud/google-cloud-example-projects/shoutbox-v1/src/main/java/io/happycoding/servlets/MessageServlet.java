package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/message")
public class MessageServlet extends HttpServlet {

  // In-memory data structure for a simple example.
  // This is for testing only!
  // In real life you'd want to use persistent storage like Datastore.
  private List<String> messages = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Shoutbox</h1>");
    response.getWriter().println("<ul>");
    for(String message: messages) {
    	response.getWriter().println("<li>" + message + "</li>");
    }
    response.getWriter().println("</ul>");
    response.getWriter().println("<p><a href=\"/\">Back</a></p>");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String message = request.getParameter("message");
    messages.add(message);
 
    // Redirect to /message.
    // The request will be routed to the doGet() function above.
    response.sendRedirect("/message");
  }
}

