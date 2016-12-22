$(document).ready(function()
{
	$(window).scroll(function ()
	{
    var margin = $('header img').height();
    if ($(window).scrollTop() > margin)
    {
    	$('header nav').addClass('fixed-nav');
			$('#info').addClass('info-bg');
    }
    else
    {
    	$('header nav').removeClass('fixed-nav');
			$('#info').removeClass('info-bg');
    }
    return false;
	});
	$('.news-item').wrapInner('<a href="#"></a>');
});
