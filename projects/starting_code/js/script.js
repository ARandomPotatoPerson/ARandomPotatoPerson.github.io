console.log("My Javascript works");

// Inserts all pokemon info into a list of objects
var database = JSON.parse(data);

$(document).ready(function() {
	console.log("jQuery ready!");

	/* 
		Your code goes here! 
		Step 1, write a for-loop to go through every pokemon in 'database'
		Step 2, for each pokemon, retrieve its id and name
		Step 3, for each pokemon, retrieve its thumbnailSrc
		(HINT) to retrieve thumbnailSrc, use getThumbnailFromId(id) defined below
		Step 4, for each pokemon, create an <li> element and insert the following:
			- <span> for pokemon id
			- <img> for pokemon thumbnail
			- <span> for pokemon name
			- append to $("ul")
		Step 5, step 4 is very complicated and makes our code pretty messy.
				ove all of step 4 into its own function.
				Make sure to watch out for what parameters you are giving it.
		Step 6, once finished, delete this comment section!
	*/
	for(var i = 0; i < database.length; i++){
		var pokemonID = database[i].id;
		var pokemonName = database[i].name.english;
		var imgSrc = getThumbnailFromId(pokemonID);
		
		$("ul").append(createRow(pokemonID, pokemonName, imgSrc));
	}
	
});

/* 
	Given a numerical 'id', 
	Return the corresponding thumbnail string.
	Example:
	getThumbnailFromId(1) will return 'assets/thumbnails/001.png' 
*/
function getThumbnailFromId(id) {
	var idDigit = ('000' + id).substr(-3);
	return "assets/thumbnails/" + idDigit + ".png";
}

function createRow(Id, Name, Src){
	var row = $(document.createElement("li"));
	var span1 = $(document.createElement("span"))
	span1.text(Id);
	
	var pic = $(document.createElement("img"))
	pic.attr("src", Src);
	
	var span2 = $(document.createElement("span"))
	span2.text(Name);
	
	row.append(span1);
	row.append(pic);
	row.append(span2);
	
	return row;
}