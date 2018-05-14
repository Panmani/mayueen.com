$(function(){
	$("#home").click(function(){
		$(".nav").find(".active").removeClass("active");
		hide_all_sections();
		$("#Brief_Intro").css("display", "block");
	})

	$("#nav_courses").click(function(){
		$(".nav").find(".active").removeClass("active");
		$(this).addClass("active");
		hide_all_sections();
		$("#Courses").css("display", "block");
	})

	$("#nav_awards").click(function(){
		$(".nav").find(".active").removeClass("active");
		$(this).addClass("active");
		hide_all_sections();
		$("#Awards").css("display", "block");
	})

	$("#nav_projects").click(function(){
		$(".nav").find(".active").removeClass("active");
		$(this).addClass("active");
		hide_all_sections();
		$("#Projects").css("display", "block");
	})
})

function hide_all_sections(){
	$("#Brief_Intro").css("display", "none");
	$("#Courses").css("display", "none");
	$("#Awards").css("display", "none");
	$("#Projects").css("display", "none");
}
