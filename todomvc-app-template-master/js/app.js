(function (window) {
	'use strict';

	$('#new-todo').keypress(function(e) {
		if((e.which == 13) && ($(this).val().length > 0)) {
			appendItem($(this).val());
				$(this).val('');
		}
	});

	// Your starting point. Enjoy the ride!
	var todos = [
		"learn jQuery",
		"prophet"
		]

function template(list_item) {
	return '<li><div class="view"><input class="toggle" type="checkbox"><label>'+ list_item +'</label></div></li>'	
}



function appendItem(item) {
	$('#todo-list').append(template(item))
}

todos.forEach(appendItem)

})(window);
