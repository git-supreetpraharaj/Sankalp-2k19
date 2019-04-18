$(document).ready(function(){ 
  $(".e5_4").click(function() { 
    $(".menu").fadeToggle("fast");
  });

  $("#sankalp").click(function(){
  	window.location.href="main.html";
  })

  $("#event-button").click(function(){
  	window.location.href="event.html";
  });

  $("#reg-button").click(function(){
  	window.location.href="reg.html";
  });
  $("#about-button").click(function(){
  	window.location.href="about.html";
  });
  $("#gallery-button").click(function(){
  	window.location.href="gallery.html";
  });
  $("#d-team-button").click(function(){
  	window.location.href="dteam.html";
  });
  $("#of-button").click(function(){
  	window.location.href="oc.html";
  });

  $(".play-btn").click(function(){
  		var src = "https://www.youtube.com/embed/VWr_TQSpkb8";
        $('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
  });

  $("#close").click(function(){
  		$('#myModal iframe').removeAttr('src');
  });

});