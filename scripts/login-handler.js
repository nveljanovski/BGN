function handle () {
	$('.admin').css('display', 'none')
	if (localStorage.getItem('admin')) {
		$('.admin').css('display', 'block')
	}


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
	document.location.href = 'index.html'
	handle()
}

handle()