// JavaScript Document
$(function(){	
	$(".navInfo li a").click(function(){
		$(this).addClass("navThis");
		$(this).parent("li").siblings().find("a").removeClass("navThis")
	})
	
	$(".index3Text4Title li").click(function(){
		$(this).addClass("index3Text4This").siblings().removeClass("index3Text4This");
		var thisnumber = $(this).index();
		$(".index3Text4Info").eq(thisnumber).addClass("animated peopelanimation").show().siblings().removeClass("animated peopelanimation").css("display","none");
	});
	
	$(".index5TextLabel1 span").click(function(){
		$(this).addClass("index5IocThis").siblings().removeClass("index5IocThis");
		var number2 = $(this).index();
		$(".index5TextInfo").eq(number2).show().siblings(".index5TextInfo").css("display","none");
	});
	
	$(".index5TextLabel2 span").click(function(){
		$(this).addClass("index5IocThis").siblings().removeClass("index5IocThis");
		var number3 = $(this).index();
		$(".index5Text2Info").eq(number3).show().siblings(".index5Text2Info").css("display","none");
	});
	
	
	$(".thishtmlNav li a").click(function(){
		$(this).addClass("htmlthisNav");
		$(this).parent("li").siblings().find("a").removeClass("htmlthisNav");
		var number4 = $(this).index();
		$(".text1Text").eq(number4).show().siblings(".text1Text").css("display","none");
	})
	
	$(".thisMoreNav li").click(function(){
		$(this).addClass("htmlthisNav").siblings().removeClass("htmlthisNav");
		var number4 = $(this).index();
		$(".text1Text").eq(number4).show().siblings(".text1Text").css("display","none");
	})
	
	$(".fenyenumber").click(function(){
		$(this).addClass("thisnumber").siblings().removeClass("thisnumber");
	})
});