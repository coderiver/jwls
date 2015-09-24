head.ready(function() {

	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select").removeClass("is-active");
		    $(".js-select-close").removeClass("is-active");
		    $(".js-select-list").slideUp(100);
	    });
	    
	  // select list
	    $("body").on("click",".js-select",function(event) {
	        event.stopPropagation();
	    });
	    $("body").on("click",".js-select-text",function(event) {
	    	var select = $(this).parents(".js-select");
	        if (select.hasClass("is-active")) {
	            $(".js-select").removeClass("is-active");
	            $(".js-select-close").removeClass("is-active");
	            $(".js-select-list").slideUp(100);
	        }
	        else {
	            $(".js-select").removeClass("is-active");
	            select.find(".js-select-close").toggleClass("is-active");
	            $(".js-select-list").slideUp(100);
	            select.toggleClass("is-active").find(".js-select-list").slideToggle(100);

	        }
	       
	    });

	    $("body").on("click",".js-select-list li",function() {
	        var val = $(this).attr("data-val");
	        var text = $(this).text();
	        var select = $(this).parents(".js-select");
	        var selectList = $(this).parents(".js-select-list");
	        select.find(".js-select-reset").addClass("is-active");
	        select.find(".js-select-text").text(text);
	        select.find("option").removeAttr("selected");
	        select.find('option[value="'+val+'"]').attr("selected", "selected");
	        selectList.find("li").removeClass("is-active");
	        $(this).addClass("is-active");
	        $(this).parent().prev().addClass("is-active");
	        select.removeClass("is-active");
	        selectList.slideUp(100);
	        return false;
	        
	    });

	    $('.js-select-reset').click(function() {
	    	var placeholder = $(this).closest('.js-select').find('.js-select-text').data('placeholder');
	    	var select = $(this).closest(".js-select");
	    	select.find("option").removeAttr("selected");
	    	$(this).closest('.js-select').find('.js-select-text').text(placeholder);
	    	$(this).siblings('.js-select-text').removeClass('is-active');
	    	$(this).removeClass('is-active');
	    });
	  
	});

	$('.js-slider-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true
	});

	$('.js-slider-product').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: false
	});

});