$(document).ready(function() {
	$("#ticketButton").click(function() {
		window.open('https://redmine.streamingedge.com/issues/' + document.getElementById('ticket').value);
	});		
	$("#ticket").keypress(function(e){
	    if(e.keyCode==13){
		window.open('https://redmine.streamingedge.com/issues/' + document.getElementById('ticket').value);
		}
	});
	$("#newEPButton").click(function() {
		window.open('https://redmine.exactpro.com/projects/streamglobal/issues/new');
	});
	$("#newSEButton").click(function() {
		window.open('https://redmine.streamingedge.com/projects/seplatform/issues/new');
	});
	$("#searchButton").click(function() {
		window.open('https://redmine.streamingedge.com/issues?c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=subject&c%5B%5D=assigned_to&c%5B%5D=updated_on&c%5B%5D=category&c%5B%5D=fixed_version&f%5B%5D=status_id&f%5B%5D=subject&f%5B%5D=&group_by=&op%5Bstatus_id%5D=o&op%5Bsubject%5D=%7E&set_filter=1&t%5B%5D=&utf8=%E2%9C%93&v%5Bsubject%5D%5B%5D=' + document.getElementById('search').value);
	});
	$("#search").keypress(function(e){
	    if(e.keyCode==13){
		window.open('https://redmine.streamingedge.com/issues?c%5B%5D=project&c%5B%5D=tracker&c%5B%5D=status&c%5B%5D=priority&c%5B%5D=subject&c%5B%5D=assigned_to&c%5B%5D=updated_on&c%5B%5D=category&c%5B%5D=fixed_version&f%5B%5D=status_id&f%5B%5D=subject&f%5B%5D=&group_by=&op%5Bstatus_id%5D=o&op%5Bsubject%5D=%7E&set_filter=1&t%5B%5D=&utf8=%E2%9C%93&v%5Bsubject%5D%5B%5D=' + document.getElementById('search').value);
		}
	});
	$("#downloadJnlp").click(function() {
	   	if(document.getElementById('env').value=='LDT'){
			window.open('https://ldt.latam.tradition.com/total');
		} else if (document.getElementById('env').value=='IAT'){
			window.open('https://iat.latam.tradition.com/total');
		} else if (document.getElementById('env').value=='QA'){
			window.open('https://10.254.44.28/total')
		}
	});
	$("#downloadSA").click(function() {
	   	if(document.getElementById('env').value=='LDT'){
			window.open('https://ldt.latam.tradition.com/total/loader');
		} else if (document.getElementById('env').value=='IAT'){
			window.open('https://iat.latam.tradition.com/total/loader');
		} else if (document.getElementById('env').value=='QA'){
			window.open('https://10.254.44.28/total/loader')
		}
	});
});
