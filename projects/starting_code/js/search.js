
console.log("My Javascript works");

// Inserts all pokemon info into a list of objects
var database = JSON.parse(data);

$(document).ready(function() {
	console.log("jQuery ready!");

	// On 'Search' click
	$(".search-form button").on("click", function() {
		// Retrieves user search input
		var searchText = $(".search-form input").val();
		console.log("search " + searchText);
		
		// Clears the "ul" element of all children
		// We need to re-populate it!
		var flag = 0;
		$("ul").empty();
		/* 
			Your code goes here!
			Very similar to what you wrote in script.js.
			This time, we want to only display pokemon whose name matches 'searchText'.

			1) Write another for-loop that goes through every pokemon in database
			2) If pokemon's name matches the searchText...
				Create the <li> element like you previously did.
				Append to $("ul")
				(HINT) use the "matches(...)" function defined below
			3) We also want to populate a <h3> in search.html (above the <ul>)
				If there are no pokemon from the search text, 
				set text of <h3> to "No Pokemon found" using $("h3").text(...)
				Otherwise, give it "X Pokemon found" where X is the number of search results.
			4) To shorten our code here, move Step 3 to a separate function.
			5) When everything works, delete this comment section!
		*/
		for(var i = 0; i < database.length; i++){
			if(matches(database[i].name.english, searchText)){
				createTarget(database[i]);
				flag++;
			}	
		}
		
		found(flag);
	});
});

/* 
	Given a numerical 'id', create the corresponding thumbnail string
	Example:
	getThumbnailFromId(1) will return 'assets/thumbnails/001.png' 
*/
function getThumbnailFromId(id) {
	var idDigit = ('000' + id).substr(-3);
	return "../assets/thumbnails/" + idDigit + ".png";
}

function found(flag){
		if(flag == 0){$("h3").text("No Pokemon Found")}
		else{$("h3").text(flag + " Pokemon Found")}
}

function createTarget(target){
	var pokemonID = target.id;
	var pokemonName = target.name.english;
	var imgSrc = getThumbnailFromId(pokemonID);
		
	var row = $(document.createElement("li"));
	var span1 = $(document.createElement("span"))
	span1.text(pokemonID);
		
	var pic = $(document.createElement("img"))
	pic.attr("src", imgSrc);
	
	var span2 = $(document.createElement("span"))
	span2.text(pokemonName);
	
	row.append(span1);
	row.append(pic);
	row.append(span2);
		
	$("ul").append(row);
}

/* Return true if text1 is a "substring" of text2 (case-insensitive) */
function matches(text1, text2) {
	if (!text1 && !text2) {
		return false;
	}
	var textLC1 = text1.toLowerCase();
	var textLC2 = text2.toLowerCase();
	return textLC1.indexOf(textLC2) >= 0;
}