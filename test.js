$(document).ready(function() {
	$( "#ticketButton" ).click(function() {
		window.open('https://redmine.streamingedge.com/issues/' + document.getElementById('ticket').value);
	});		
	$("#ticket").keypress(function(e){
	    if(e.keyCode==13){
		window.open('https://redmine.streamingedge.com/issues/' + document.getElementById('ticket').value);
		}
	});
	$( "#newEPButton" ).click(function() {
		window.open('https://redmine.exactpro.com/projects/streamglobal/issues/new');
	});
	$( "#newSEButton" ).click(function() {
		window.open('https://redmine.streamingedge.com/projects/seplatform/issues/new');
	});
});
