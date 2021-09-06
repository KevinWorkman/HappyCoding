package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/names")
public class NamesServlet extends HttpServlet {

  List<String> names = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    response.getWriter().println("<h1>Names</h1>");

    response.getWriter().println("<ul>");
    for (String name : names) {
      response.getWriter().println("<li>" + name + "</li>");
    }

    response.getWriter().println("</ul>");
    response.getWriter().println(
        "Click <a href=\"/post-name-list/index.html\">here</a> to enter another name.");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String name = request.getParameter("name");

    names.add(name);

    response.getWriter().println("<h1>Hello " + name + "!</h1>");
    response.getWriter().println(
        "Click <a href=\"/post-name-list/names\">here</a> to see everybody's name.");
  }
}