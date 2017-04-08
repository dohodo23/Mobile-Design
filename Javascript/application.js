$(document).ready(function() {

// Wait for device to be ready loading everything
	  //$(document).on('deviceready', onDeviceReady);
	 onDeviceReady();


});


function onDeviceReady(){	
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();

        $( "#expositiesB" ).bind("touchend",function(){
        	window.location.replace("Pages/mijnPuzzel.html");
        });
}