console.log("My Javascript works");

// *NOTE* 
// You have a few objects available to you from another file 'data.js'.
// Take a look at 'data.js' 
// and you will find array 'yelpItems' and object 'starImgSrc'.
// The file 'data.js' content was imported here by being included in our 'index.html' <head>.
// So now all values and functions from 'data.js' are available to us here.

function createUpperLeft(yelpObj, index) {
	var upperLeft = $(document.createElement("div"));
	upperLeft.addClass("upper-left");

	// Your code goes here!
	// Create a <h3> for the index and title and append
	// Create a <img> for the stars img ( you will need starImgSrc to find the correct image!)
	// Create a <span> for number of reviews
	// Create a <div> for the gray subtitles
	// The subtitles consists of $'s (for how expensive the dessert place is)
	// A dot (use character &middot;), and the subtitle of the yelpObj
	
	var txt = $(document.createElement("h3"));
	txt.text("".concat(index + 1, ". ", yelpObj.title));
	var img = $(document.createElement("img"));
	img.attr("src", starImgSrc[yelpObj.stars]);
	img.addClass("stars");
	var span = $(document.createElement("span"));
	span.text("".concat(yelpObj.reviews, " Reviews"));
	span.addClass("graytxt");
	
	var subtitle = $(document.createElement("div")); 
	subtitle.text("".concat(
		dollas[yelpObj.dollars],
		" . ",
		yelpObj.subtitle
	));
	subtitle.addClass("graytxt");
	
	upperLeft.append(txt);
	upperLeft.append(img);
	upperLeft.append(span);
	upperLeft.append(subtitle);
	
	return upperLeft;
}

function createUpperRight(yelpObj) {
	var upperRight = $(document.createElement("div"));
	upperRight.addClass("upper-right");

	// Your code goes here!
	// Create a <div> for the phone number and append
	// Create a <div> for the address and append
	
	var phone = $(document.createElement("div")); 
	phone.text(yelpObj.phoneNumber);
	var address = $(document.createElement("div")); 
	address.text(yelpObj.address);
	
	upperRight.append(phone);
	upperRight.append(address);

	return upperRight;
}

function createDescriptionBox(yelpObj, index) {
	var box = $(document.createElement("div"));
	box.addClass("description");

	// Your code goes here!
	// createUpperLeft() and append to box
	// createUpperRight() and append to box
	// create a "<p>" element
	// set the text for <p> from the userComment
	// append to box
	var left = createUpperLeft(yelpObj, index);
	var right = createUpperRight(yelpObj);
	
	var para = $(document.createElement("p")); 
	para.text(yelpObj.userComment);
	
	box.append(left);
	box.append(right);
	box.append(para);
	
	return box;
}

function createImage(yelpObj) {
	// Your code goes here!
	// Using jQuery, create an <img> element
	// Set its "src" attribute
	// return the image
	
	var imagio = $(document.createElement("img"));
	imagio.attr("src", yelpObj.imgSrc);
	imagio.addClass("bigImg");
	return imagio;
}


/*
 * Given a yelp Object,
 * Create a <li> and return it
 */
function createYelpItem(yelpObj, index) {
	var htmlListItem = $(document.createElement("li"));
	htmlListItem.addClass("yelp-item");

	var image = createImage(yelpObj);
	htmlListItem.append(image);

	var box = createDescriptionBox(yelpObj, index);
	htmlListItem.append(box);

	return htmlListItem;
}



$(document).ready(function() {
	console.log("jQuery ready");

	/* 
	 * Loop through array 'yelpItems' (from data.js)
	 * For every object in 'yelpItems',
	 * Call function 'createYelpItem(...)' to get an HTML element
	 * Append that HTML element to '#yelp-list'
	 */
	var i;
	for (i = 0; i < yelpItems.length; i++) {
		var item = yelpItems[i];
		var htmlItem = createYelpItem(item, i);
		$("#yelp-list").append(htmlItem);
	}
});
