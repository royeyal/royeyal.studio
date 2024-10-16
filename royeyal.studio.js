/****
 * Load first: GSAP, ScrollTrigger, SplitText
 *****/
gsap.registerPlugin(ScrollTrigger, SplitText);

function setupSplits() {
	const targets = gsap.utils.toArray([
		".heading-style-h2",
	]);
	targets.forEach((target) => {
		let splitHeading = new SplitText(target, {
			type: "lines",
		});
		let chars = splitHeading.chars; //an array of all the divs that wrap each character
		gsap.from(chars, {
			yPercent: 100,
			opacity: 0,
			stagger: 0.8,
			ease: "circ.inOut",
			duration: 0.8,
			delay: -0.3,
			scrollTrigger: {
				trigger: target,
				//markers: true,
				start: "0% top",
				end: "99% center",
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