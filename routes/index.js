<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <div>
      <h1><%= title %></h1>
    </div>
    <div>
      <p>text line in <%= title %></p>
      <a href="/game"><%=gamePage%>></a>
    </div>
    <div>
      <br></br>
      <button class="howToPlay" onclick="popup(1);">How To Play</button>
    </div>
    <span class="copyright">&copy; 2018 CSE1 21</span>
  </body>
  
</html>
