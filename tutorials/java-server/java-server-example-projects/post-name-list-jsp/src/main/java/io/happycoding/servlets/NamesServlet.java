package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;

@WebServlet("/names")
public class NamesServlet extends HttpServlet {

  List<String> names = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException, ServletException {

    request.setAttribute("names", names);
    request.getRequestDispatcher("/WEB-INF/name-list.jsp").forward(request,response);
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String name = request.getParameter("name");
    names.add(name);
    response.sendRedirect("/post-name-list-jsp/names");
  }
}