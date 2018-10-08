var URL = "http://cdn.mayueen.com";

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

    // $.ajax({
    //     url: URL + "/get_courses",
    //     type: "GET",
    //     dataType: false,
    //     success: function(response) {
    //     	console.log(response);
    //     	document.getElementById("course_details_main").innerHTML = response;
    //     }
    // });
})

function hide_all_sections(){
	$("#Brief_Intro").css("display", "none");
	$("#Courses").css("display", "none");
	$("#Awards").css("display", "none");
	$("#Projects").css("display", "none");
}

// function get_courses() {
//     if (window.XMLHttpRequest) {
//         // code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // code for IE6, IE5
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("txtHint").innerHTML = this.responseText;
//         }
//     };
//     xmlhttp.open("GET","php/courses.php",true);
//     xmlhttp.send();
// }
