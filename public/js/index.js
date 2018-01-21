var $j = jQuery.noConflict();

var someData = 0;

var url = "";
var bigData ="test";
$(".btn-default").click(function ()
{
	console.log("Test!");
	$(".site-wrapper-inner").empty();
	addToList("TEST");
	var get = "https://localhost:3000/";

		$.get(get, function(data) {
			console.log("Request Worked! : " + get);
			console.log(data.results);
	});
})

function addToList()
{
	$(".site-wrapper-inner").append(`<div class = "data-box"><p>${bigData}</p></div>`);

}