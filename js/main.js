$(function(){
	var t=0;
	var n=0;
	var w;
	var winHalf;
	var topPos=0;
	var categoryFlag=false;

	$("#pc_menu li").eq(n).find("a").addClass("on");

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#page4").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#page5").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}
		if(t > 100){
			$(".btn_top").addClass("active");
			$(".menu_zone").addClass("active");
		}
		else{
			$(".btn_top").removeClass("active");
			$(".menu_zone").removeClass("active");
		}

		$("#pc_menu li a").removeClass("on");
		$("#pc_menu li").eq(n).find("a").addClass("on");

		if(categoryFlag){
			return;
		}
		else{
			if(n == 0){
				$("#slider").addClass("active");
			}
			else{
				$("#page"+n).addClass("active");

				if(n == 5){
					categoryFlag=true;
				}
			}
		}
	});

	$(window).resize(function(){
		// w=$(window).width();
		w=window.innerWidth;
		winHalf=$(window).height()/2;

		if(w > 720){
			if($("#mobile").hasClass("active")){
				$(".dim").trigger("click");
			}
		}

		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$(".tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("static");
		$("#mobile").toggleClass("active");
		$(".dim").toggleClass("active");
	});
	$(".dim").click(function(){
		$("body").removeClass("static");
		$("#mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
	});
	$("#mobile .close").click(function(e){
		e.preventDefault();
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
	});

	$("#pc_menu li").click(function(e){
		e.preventDefault();
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").animate({scrollTop:topPos}, 400);
	});
	$(".mobile_menu li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").delay(400).animate({scrollTop:topPos}, 400);
	});

	$(".btn_top").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 400);
	});
});