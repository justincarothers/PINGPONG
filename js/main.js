function pingPongTest(input) {
  var pings = 0;
  var pongs = 0;
  var pingpongs = 0;

  $("#output li").remove();
  for (var i = 1; i-1 < input; i++) {
    if (i % 15 === 0 ) {
      $("#output").append("<p><em><strong> PING-PONG!!!!</em></strong></p>");
      pingpongs++;
    } else if (i % 5 === 0) {
      $("#output").append("<p> PONG!!</p>");
      pongs++;
    } else if (i % 3 === 0) {
      $("#output").append("<p> PING </p>");
      pings++;
    } else {
      $("#output").append("<p>" + i + "</p>");
    }
  }
  $("#score").append("<h1>pings: " +pings + "</h1>");
  $("#score").append("<br><h1>pings: " +pongs + "</h1>");
  $("#score").append("<br><h1>pingpongs: " +pingpongs + "<br><hr></h1>");
}
$(document).ready(function() {
  $("#output").hide();
  $("#tryAgain").hide();
  $("#score").hide();

  $("form#formInput").submit(function(event) { /*submit button + function*/
    event.preventDefault();
    var formInput = $("input#numberInput").val();
    $("#formInput").slideUp(600);
    $("#output").fadeIn(2000);
    pingPongTest(formInput);
    $("#score").show();
    $("#tryAgain").fadeIn(8000)
  });

  $("#tryAgain").click(function() { /*try again button*/
    $("#output p").remove();
    $("#score h1").remove();
    $("#tryAgain").hide();
    $("#score").hide();
    $("#output").hide();
    $("#formInput").slideDown(600);
  });

});
