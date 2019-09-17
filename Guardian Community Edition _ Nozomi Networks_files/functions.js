// Accordion in gs bav

function initAccordion() {
	var target  = $('.noz-is-parent [data-action="parent-toggle"]');

	target.on('click', (function() {
		// If in open state
		if ($(this).closest('.noz-is-parent').hasClass('noz-is-parent--active')) {
			// Find the next child instance and hide
			$(this).closest('.noz-is-parent').next('.noz-is-child').fadeOut();
			// Remove the 'active' class on the parent
			$(this).closest('.noz-is-parent').removeClass('noz-is-parent--active');
		} else {
			// Find the next child instance and show
			$(this).closest('.noz-is-parent').next('.noz-is-child').fadeIn();
			// Add the 'active' class on the parent
			$(this).closest('.noz-is-parent').addClass('noz-is-parent--active');
		}
	}));
}

// Footer Mobile Nav Toggle

function toggleFooterNav() {
	var target  = $('.js-toggle-footer-nav');

	target.on('click', (function() { 
			$('[role="contentinfo"] ul').fadeOut();
			$('[role="contentinfo"] ul').removeClass('noz-active');
			$(this).next('ul').fadeIn();
			$(this).next('ul').addClass('noz-active');
	}));
}



// Toggle 
function toggleDrawer() {
	
	var target = $('.noz-js-drawer'); 

	// Watch for opening Info drawer
	$('[data-action="info-drawer"]').on('click', (function() {
	
		if ($(!('.noz-main--info-active').length)) {
			target.addClass('noz-main--info-active');
		}
	}));
	
	// Watch for opening Edit drawer
	// If Info drawer is open, close it
	$('[data-action="edit-drawer"]').on('click', (function() {
		target.toggleClass('noz-main--edit-active');

		if ($(!('.noz-main--edit-active').length)) {
			target.addClass('noz-main--edit-active');
			$(':root').css({'overflow':'hidden'});
		}
		if ($('.noz-main--info-active').length) {
			target.removeClass('noz-main--info-active');
		}
	}));
}


// Close Info panels
function closeDrawer() {
	var trigger = $('[data-action="close-drawer"]');
	var target = $('.noz-js-drawer');

	trigger.on('click', (function() {
		// If the Info drawer is open close it
		if ($('.noz-main--info-active').length) {
			target.removeClass('noz-main--info-active');
		// If the Edit drawer is open close it
		} else if ( $('.noz-main--edit-active').length ) {
			target.removeClass('noz-main--edit-active');
			$(':root').css({'overflow':'auto'});
		}
	}));

	// Watch for Escape key press to close drawers
	$(document).keydown(function(e){
        if ((e.keyCode == 27) && ($('.noz-main--info-active').length))  {
            target.removeClass('noz-main--info-active');
        } else if ((e.keyCode == 27) && ($('.noz-main--edit-active').length )) {
			target.removeClass('noz-main--edit-active');
			$(':root').css({'overflow':'auto'});
		}
    });
}





$(document).ready(function(){
	initAccordion();
	toggleDrawer();
	closeDrawer();
	toggleFooterNav();
	$('.tooltip').tooltipster();

});
