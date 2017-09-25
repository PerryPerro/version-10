var imageArray = ["bildspel1.jpg", "bildspel2.jpg", "bildspel3.jpg"];

var myImage = document.getElementById("img");

var imageIndex = 1;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex = (imageIndex + 1) % imageArray.length;
}

var myTimer = setInterval(changeImage, 2000);

function inputValid(){
	var namnInput = document.getElementById("namn").value;
	var mailInput = document.getElementById("mail").value;
	var meddelandeInput = document.getElementById("meddelande").value;
	if(form.namn.value == ""){
		alert("Error: Namn kan inte va tomt");
		return false;
	}
	if(form.mail.value == ""){
		alert("Error: mail kan inte va tomt");
		return false;
	}
	if(form.meddelande.value == ""){
		alert("Error: meddelande kan inte va tomt");
		return false;
	}
	if(namnInput.length < 3){
		alert("Namn måsta vara minst 3 tecken");
		return false;
	}
	if(! /^[a-zA-ZäöåÄÖÅ]+$/.test(namnInput)){
		alert("Inga ottilåtna tecken, endast A-Ö");
		return false;
	}
	if(! /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/){
		alert("skriv en giltig email");
		return false;
	}
}

$(document).ready(function (){


	$("#stopKnapp").click(function(){
    clearInterval(myTimer);
});	
	$(window).resize(function(){
		if ($(window).width() <= 800) {
			$(".meny").hide();
		}
		else if ($(window).width() >= 800) {
			$(".meny").show();
		}
}).resize();

	$(".hamburgare").click(function(){
		$(".meny").slideToggle("slow");
	});
	
})
