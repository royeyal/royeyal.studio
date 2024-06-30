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

// let typeSplit = new SplitType("[animate]", {
// 	types: "lines, words, chars",
// 	tagName: "span",
// });

// gsap.from("[animate] .line", {
// 	y: "110%",
// 	opacity: 0,
// 	rotationZ: "10",
// 	duration: 0.5,
// 	ease: "power1.out",
// 	stagger: 0.1,
// });

// ScrollTrigger.batch(".w-richtext p", {
// 	onEnter: elements => {
// 	  gsap.from(elements, {
// 		autoAlpha: 0,
// 		y: 60,
// 		stagger: 0.15,
// 		ease: "power4.inOut",
// 	  });
// 	},
// 	once: true
//   });

gsap.utils.toArray('.w-richtext p, .w-richtext h2, .w-richtext h3, .w-richtext li').forEach(el => {
	gsap.from(el, {
	  opacity: 0, // Start with opacity 0
	  duration: 1, // Animation duration
	  scrollTrigger: {
		trigger: el, // Element to trigger the animation
		start: "top 80%", // Start animation when element is 80% in view
		end: "bottom 20%", // End animation when element is 20% out of view
		toggleActions: "play none none reverse", // Play animation on enter, reverse on exit
		stagger: 0.15,
      	ease: "power4.inOut",
	  },
	});
  });
  

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