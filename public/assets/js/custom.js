$( document ).ready(function() {
    
	
	//Login
	//$("#loginModal").modal('show');
	$("#loginModal").modal();
	console.log("Custom.JS - loaded"); 
	
	$('#loginRegisterPopup').on( "click", function() {
		//$('#loginModal').modal('show');
		console.log("loginRegisterPopup - triggered");
		alert('nice');
	});
	

	
});

