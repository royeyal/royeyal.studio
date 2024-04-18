/****
 * Load first: GSAP, ScrollTrigger, SplitText
 *****/
gsap.registerPlugin(ScrollTrigger, SplitText);

function setupSplits() {
	const targets = gsap.utils.toArray(".heading-style-h1, .heading-style-h2");
	targets.forEach((target) => {
		let splitHeading = new SplitText(target, {
			type: "words, chars",
		});
		let chars = splitHeading.chars; //an array of all the divs that wrap each character
		gsap.from(chars, {
			yPercent: 130,
			stagger: 0.05,
			ease: "back.out",
			duration: 0.7,
			scrollTrigger: {
				trigger: target,
				//markers: true,
				start: "top 75%",
				end: "bottom center",
				//scrub: true
			},
		});
	});
}
setupSplits();

/***************************/
/* Cuberto Mouse Follower */
/*************************/
// Initialize a new MouseFollower instance with custom settings
// var cursor = new MouseFollower();
const cursor = new MouseFollower({
	speed: 0.4, // Cursor movement speed
	skewing: 1, // Skewing effect for the cursor
	skewingText: 3, // Skewing effect specifically for the text in the cursor
});