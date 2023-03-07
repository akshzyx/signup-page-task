const form = document.querySelector('form');
const error_message = document.querySelector('#error_message');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const username = form.username.value.trim();
	const password = form.password.value.trim();
	const confirm_password = form.confirm_password.value.trim();
	
	if (username === '' || password === '' || confirm_password === '') {
		error_message.textContent = 'Please fill in all fields';
	} else if (password.length < 8 || confirm_password.length < 8) {
		error_message.textContent = 'Password must be at least 8 characters long';
	} else if (password !== confirm_password) {
		error_message.textContent = 'Passwords do not match';
	} else {
		form.submit();
	}
});
