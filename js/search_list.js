function searchFunction() {
	var input, filter, li, ul, a, i;
	
	filter = $("#my-input").val().toUpperCase();
	ul = $("#friend-list");
	li = ul.find("li");
	console.log(li);
	for (i = 0; i < li.length; i++) {
        a = $(li[i]).text();
        if (a.toUpperCase().indexOf(filter) > -1) {
            $(li[i]).css("display", "");
        } else {
			$(li[i]).css("display", "none");
        }
    }	
}
	
$(document).ready(function() {

	var friends = [
		{name: "Rohit"},
		{name: "Jitendra"},
		{name: "Akash"},
		{name: "Ankit"},
		{name: "Abhay"},
		{name: "Raman"},
		{name: "Risky"},
		{name: "Sid"},
		{name: "Shradha"},
		{name: "Kajal"},
		{name: "Rahul"},
		{name: "Jolly"},
		{name: "Nikhil"},
		{name: "Harsh"},
		{name: "Raviprakash"},
		{name: "Srijan"},
		{name: "Aditya"},
	];

	var displayFriends = function() {
	    var template = document.getElementById('temp');
	    for (var i = 0; i < friends.length; i++) {
	        var friendName = friends[i].name;
            var clone = template.content.cloneNode(true);
            $(clone).find("li").text(friendName);
            template.parentElement.appendChild(clone);
	    }
	};

	displayFriends();
	$("#my-input").on('keyup', searchFunction);

});