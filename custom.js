



    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration

    });
    
    $('.cd-slider-nav li').on('click', function(event){
    	event.preventDefault();
    	var selectedItem = $(this);
    	if(!selectedItem.hasClass('selected')) {
    		// if it's not already selected
    		var selectedPosition = selectedItem.index(),
    			activePosition = $('.cd-hero-slider .selected').index();
    		if( activePosition < selectedPosition) {
    			nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
    		} else {
    			prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
    		}

    		updateNavigationMarker(selectedPosition+1);
    	}
    });
