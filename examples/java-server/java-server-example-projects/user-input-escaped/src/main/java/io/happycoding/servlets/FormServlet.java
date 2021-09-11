package io.happycoding.servlets;

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.text.StringEscapeUtils;

@WebServlet("/form")
public class FormServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String userInput = request.getParameter("data");
    String escapedUserInput = StringEscapeUtils.escapeHtml4(userInput);

    response.setContentType("text/html");
    response.getWriter().println("You entered: " + escapedUserInput);
    
  }
}