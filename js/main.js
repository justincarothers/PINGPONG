function pingPong(number) {
  var output = [];
  for(var index = 1; index <= number; index++) {
    var element = index;
    if( element%15 === 0 ) {
      element = 'pingpong';
    } else if( element%3 === 0 ){
      element = 'ping';
    } else if( element%5 === 0 ) {
      element = 'pong';
    }
    output.push(element);
  }
  return output;
}

$(document).ready(function() {
  $('form#pingpong').submit(function(event) {
    $('.output ul').html('');
    var output = pingPong($('#input').val());
    if(output.length > 0) {
      output.forEach(function(number) {
        $('.output ul').append('<li>' + number + '</li>');
      });
    }

    $('#input').val('');
    event.preventDefault();
  });
});
