$('.walkthrough-slider').on('click', '#close-steps', function (e) {
	e.preventDefault();
	$(this).closest('#slider-block').slideUp();
	return false;
     
});


  $(function(){

      // carousel demo
      $('#walkthrough').carousel({
      	interval:false
      })
	
	
  	$('.slide-load').click(function(e){
		e.preventDefault();
  		var target = $(this).attr('title'),
  			slider = $(this).parents().next('.walkthrough-slider');
			
  			slider.addClass('is-loading');
  			slider.load('sliders/' + target + '.html').removeClass('is-loading');
  	});


    $('.popit').popover({
    	placement: 'top'
    });

    // popover demo
    $("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault()
      });


  })