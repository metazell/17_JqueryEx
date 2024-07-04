$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!");
});

$(document).ready(function() {
    $('article img').addClass('image-center');
});

$(document).ready(function() {
    $('article p:last').remove();
});
  
$(document).ready(function() {
    let randomFontSize = Math.floor(Math.random() * 101); 
    $('#title').css('font-size', randomFontSize + 'px');
});
  
$(document).ready(function() {
    $('ol').append('<li>BRAND NEW!</li>');
});
  
$(document).ready(function() {
    $('aside').empty().append('<p>We apologize for the list existence. Here is a sincere apology.  We hope all is well.</p>');
});

$(document).ready(function() {
    function updateBackgroundColor() {
      let red = $('input[type="number"][value="255"]').val();
      let green = $('input[type="number"][value="255"]').val();
      let blue = $('input[type="number"][value="255"]').val();
      let color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
      $('body').css('background-color', color);
    } 

updateBackgroundColor();

$('input[type="number"]').on('input', function() {
      updateBackgroundColor();
    });
});

$(document).ready(function() {
    $('article img').click(function() {
        $(this).remove();
    });
});



  
  