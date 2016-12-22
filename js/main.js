$(document).ready(function()
{
	$(window).scroll(function ()
	{
    var margin = $('header img').height();
    if ($(window).scrollTop() > margin)
    {
    	$('header nav').addClass('fixed-nav');
    }
    else
    {
    	$('header nav').removeClass('fixed-nav');
    }
    return false;
	});
	$('.news-item').wrapInner('<a href="#"></a>');
});
