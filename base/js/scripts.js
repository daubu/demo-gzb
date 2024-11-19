$(window).bind("load", function() {
	$('#slider-big').bxSlider({
        mode: 'horizontal',
        auto: ($("#slider-big > li").length > 1) ? true: false,
		pager: ($("#slider-big > li").length > 1) ? true: false,
		controls: ($("#slider-big > li").length > 1) ? true: false
   });
   
   if($("#slider-image").length) {
	   $('#carousel').flexslider({
	        animation: "slide",
	        controlNav: false,
	        animationLoop: false,
	        slideshow: false,
	        itemWidth: 100,
	        itemMargin: 20,
	        asNavFor: '#slider-image'
	      });
	
	      $('#slider-image').flexslider({
	        animation: "slide",
	        controlNav: false,
	        animationLoop: false,
	        slideshow: false,
	        sync: "#carousel",
	        start: function(slider){
	          $('body').removeClass('loading');
	        }
	      });
	}
	
	$(".stick-camp").hover( function(event){
		event.preventDefault();
		if ($(this).hasClass("isDown") ) {
			$(".stick-camp").animate({left:"0px"}, 300);         
			$(this).removeClass("isDown");
		} else {
			$(".stick-camp").animate({left:"-225px"}, 300);  
			$(this).addClass("isDown");
		}
		return false;
	});
	
	$("#footer-wrapper .form input[type=submit]").addClass("button pink-btn");
});

$(document).ready(function() {
    $(".toggle-wrap > li > h4").click(function(){
		$(".toggle-wrap > li > h4.active").removeClass("active");
	    if(false == $(this).next().is(':visible')) {
	    	$(this).addClass("active");
	        $('.toggle-wrap .body-toggle').slideUp(300);   
	    } 
	    $(this).next().slideToggle(300);
	});
	$('.toggle-wrap .body-toggle:eq(0)').show();
	$('.toggle-wrap > li > h4:eq(0)').addClass("active"); 
	
	//Custom select option
	$('select.style-sel').each(function(){
		var title = $(this).attr('title');
		if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
		$(this)
			.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
			.after('<span class="select">' + title + '</span>')
			.change(function(){
				val = $('option:selected',this).text();
				$(this).next().text(val);
				})
	});
	
	 //Custom File Input
    $("#browseletter").click(function () {
	    $("#fileletter").click();
	})
    $('#fileletter').change(function () {
	    $('#lettertext').val($(this).val());
	})
	
	if (jQuery(window).width() <= 1024) {
		$(".verzend-form label").remove().insertAfter($(".verzend-form textarea"));
	}  
	
});

$(window).resize( function(){
     
	 
});

//Custom radio input
$(function(){
	$.fn.fancyRadio = function(){
		return $(this).each(function(){
			var p = $(this), 
				container = $('<span class="radio-container"/>'),
				radio = $('<span class="radio"/>');

			p.find('input[type="radio"]').wrap(container);
			p.find('span.radio-container').append(radio);
			p.find('input:checked').parent()
									.find('span.radio').addClass('selected');

			p.find('input[type="radio"]').on('click',function(){
				p.find('span.selected').removeClass('selected');
				$(this).parent().find('span.radio').addClass('selected');
			});
		});
	};

	$('.radio').fancyRadio();
});