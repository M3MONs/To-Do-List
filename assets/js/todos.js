$("ul").on("click", "li", function () {
	// change of text properties depending on its state
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
			$(this).remove();
		});
	// stops event bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
	if (event.which === 13 && $(this).val() != "") {
		// creating a variable for storage input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></i></span> " + todoText + "</li>");
	}
});
