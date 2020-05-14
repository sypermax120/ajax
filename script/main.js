
$(document).ready(function(){
    $("#btn1").click(function(){
      $("ol").prepend("<input>");
    });

    $("#btn2").click(function(){
      $("ol").empty();
    });

  });