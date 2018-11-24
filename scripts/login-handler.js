function handle () {
	if (!localStorage.getItem('token')) {
		$('.logged-in').css('display', 'none')
		$('.logged-out').css('display', 'block')
		return
	}
	$('.logged-out').css('display', 'none')
	$('.logged-in').css('display', 'block')
}

function logout () {
	localStorage.clear()
	handle()
}

handle()