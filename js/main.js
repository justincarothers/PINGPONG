var answer = "";

function pingPongTest(input) {
  debugger;
  for (var i = 1; i-1 < input; i++) {
    if (i % 15 === 0 ) {
      $("#output").append("<li> PING-PONG!!!!</i>");
    } else if (i % 5 === 0) {
      $("#output").append("<li> PONG!!</i>");
    } else if (i % 3 === 0) {
        answer = "PING";
        $("#output").append("<li>" + answer + "</i>");
    } else {
      $("#output").append("<li>" + i + "</i>");
    }
  }
}

$(document).ready(function() {
  $("#output").hide();
  $("form#formInput").submit(function(event) {
    event.preventDefault();
    var formInput = $("input#numberInput").val();
    $("#output").fadeIn(9000), 9000;
        pingPongTest(formInput);
      });
  });
