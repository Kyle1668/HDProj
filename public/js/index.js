var someData = 0;

var url = "";
var bigData ="test";
$(".btn-default").click(function ()
{
	console.log("Test!");
	$(".site-wrapper-inner").empty();
	addToList("TEST");
})

function addToList()
{
	$(".site-wrapper-inner").append(`<div class = "data-box"><p>${bigData}</p></div>`);

}