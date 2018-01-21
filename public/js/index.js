var someData = 0;

$(".btn-default").click(function ()
{
	console.log("Test!");
	$(".site-wrapper-inner").empty();
	addToList("TESTT");
})

function addToList(bigData)
{
	$(".site-wrapper-inner").append(`<p class="col-center">${bigData}</p>`);
}