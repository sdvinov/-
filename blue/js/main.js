$(document).ready(function()
{
	$(window).scroll(function ()
	{
		// Measure current margin between top and menu
    let margin = $('header a#head').height();

		// If there is gap between top and menu
    if ($(window).scrollTop() > margin)
    {
			// Add classes to stick menu at top
    	$('header nav').addClass('fixed-nav');
			$('#info').addClass('info-bg');
    }
    else
    {
			// Remove classes and put it back to its' original place
    	$('header nav').removeClass('fixed-nav');
			$('#info').removeClass('info-bg');
    }
	});
});
