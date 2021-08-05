function newItem() {

	let li = $('<li></li>');
	let inputValue = $('#input').val();
	li.append(inputValue);

	if (inputValue === '') {
		alert('You must have soooomething to do today');
	} else {
		$('#list').append(li);
	}

	function crossOut() {
		li.toggleClass('strike');
	}

	li.on('dblclick', crossOut);

	let crossOutButton = $('<button class="crossOutButton"></button>');
	crossOutButton.append('X');
	li.append(crossOutButton);

	crossOutButton.on('click', deleteLi);
	function deleteLi() {
		li.addClass('delete')
	}

	$('#list').sortable();
};