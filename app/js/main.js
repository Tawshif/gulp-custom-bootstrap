// var thePets = [
// 	{
// 		"name":"orio",
// 		"species":"cat",
// 		"favFood":"tuna"
// 	},	
// 	{
// 		"name":"Meao",
// 		"species":"cat",
// 		"favFood":"tuna"
// 	}
// ]

// for (var i = 0; i < thePets.length; i++) {
// 	document.write(thePets[i].name,"</br>");
// 	document.write(thePets[i].species,"</br>");
// 	document.write(thePets[i].favFood,"</br>");
// }

var pageCounter = 1;
var btn = document.getElementById('btn');
var animalContainer = document.getElementById('animal');

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHtml(ourData);
	};
	ourRequest.send();
	pageCounter ++;

	if (pageCounter > 3) {
		btn.classList.add("hidden");
	}
});

function renderHtml(data){
	var htmlString = "";
	for (var i = 0; i < data.length; i++) {
		htmlString += "<li class='mdl-list__item'>"+ data[i].name+ " is a " + data[i].species +" that likes the ";
		for (var ii = 0; ii < data[i].foods.likes.length; ii++) {
			if (ii === 0) {
				htmlString += data[i].foods.likes[ii];
			} else {
				htmlString += " and "+ data[i].foods.likes[ii];
			}
		}
		htmlString += " and dislikes ";
		for (var iii = 0; ii < data[i].foods.dislikes.length; iii++) {

			if (iii === 0) {
				htmlString += data[i].foods.dislikes[iii];
			} else {
				htmlString += " and "+ data[i].foods.dislikes[iii];
			}
		}
		htmlString += " .</li>";
	}
	animalContainer.insertAdjacentHTML("afterbegin", htmlString);

}

