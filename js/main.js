$(document).ready(function() {
	$(".hamburger").click(function() {
		if($("#navMenu").hasClass("navMenu")) {
			$("#navMenu").addClass("navMenuActive");
		} else {
			$("#navMenu").removeClass("navMenuActive");
		}
			$("#navMenu").animate({width: 'toggle'});
	});
		
	$(".navItem").click(function(){
		if ($("#navMenu").hasClass("navMenuActive")){
			$(".navMenuActive").hide()
		} else {
			$(".navMenuActive").show();
		}	
	});
	
});

var $animateThis = $(".workItem");
var $navIds = $(".navItem");
var $window = $(window);

$(window).on("scroll", checkView);
$window.on("scroll resize", checkView);
$window.trigger("scroll");


function checkView() {
  var windowHeight = $window.height();
  var windowTopPos = $window.scrollTop();
  var windowBottomPos = (windowTopPos + windowHeight);


  $.each($animateThis, function() {
    var $element = $(this);
    var elementHeight = $element.outerHeight();
    var elementTopPos = $element.offset().top;
    var elementBottomPos = (elementTopPos + elementHeight);

    //check to see if this current container is within viewport
    if ((elementBottomPos >= windowTopPos) &&
        (elementTopPos <= windowBottomPos)) {
      $element.addClass('inView');
    } else {
      $element.removeClass('inView');
      
    }
  
  });

}

$(".name").delay(1).animate({opacity: 1, top: "35%"}, 1500);
$(".name2").delay(1).animate({opacity: 1, top: "52%"}, 3000);
$(".migPic").delay(1).animate({opacity: 1, top: "25px"}, 4000);
