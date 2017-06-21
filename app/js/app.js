   $(document).ready(function() {
	$("#driver").click(function(event, val){
	  var srch = $("#jsonSearch").val(),
	  url="https://ipinfo.io/" + srch + "/json";
	   $.getJSON(url, function(data, val) {
		  $('#stage').html('<ul><li>Results</li><li>Ip: ' + data.ip + '</li><li>Hostname : ' + data.hostname + '</li><li>City: ' + data.city+ '</li><li>Region: ' + data.region + '</li><li>Country: ' + data.country + '</li><li>Loc: ' + data.loc + '</li><li>Org: ' + data.org + '</li><li>Post-code: ' + data.postal + '</li><li>Phone: ' + data.phone + '</li></ul>');
	   });
	});
 });