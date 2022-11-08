//Scroll reveal//

const sr = ScrollReveal({
    distance: '25px',
    duration: 2500
});

sr.reveal('.animate-left',{
	origin: 'left',
	duration: 1000,
	delay:200
});

sr.reveal('.animate-right',{
	origin: 'right',
	duration: 1000,
	delay: 300
});

sr.reveal('.animate-top',{
	origin: 'top',
	duration: 1000,
	delay: 300
});

sr.reveal('.animate-bottom',{
	origin: 'bottom',
	duration: 1000,
	delay: 300
});