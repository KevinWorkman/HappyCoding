package io.happycoding.servlets;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;

@WebServlet("/date")
public class DateServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException, ServletException {

    SimpleDateFormat dateFormat =
        new SimpleDateFormat("hh:mm aa 'on' EEEE, MMMM dd, yyyy");
    Date now = new Date();
    String formattedDate = dateFormat.format(now);

    request.setAttribute("date", formattedDate);
    request.getRequestDispatcher("/WEB-INF/date-view.jsp").forward(request,response);
  }
}