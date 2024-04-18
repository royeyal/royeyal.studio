/***************************/
/* Cuberto Mouse Follower */
/*************************/
// Initialize a new MouseFollower instance with custom settings
const cursor = new MouseFollower({
	speed: 0.4, // Cursor movement speed
	skewing: 1, // Skewing effect for the cursor
	skewingText: 3, // Skewing effect specifically for the text in the cursor
});
// Select all elements with the 'product-image' class
const el = document.querySelectorAll(".grid-item-image-wrapper");
el.forEach(function (element) {
	// When the mouse enters the element, set the cursor text to 'View'
	element.addEventListener("mouseenter", () => {
		cursor.show();
		cursor.setText("View");
	});

	// When the mouse leaves the element, remove the text from the cursor
	element.addEventListener("mouseleave", () => {
		//cursor.hide();
		cursor.removeText();
	});
});
