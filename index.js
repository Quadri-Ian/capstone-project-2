var username = document.getElementById("username");
var usernameError = document.getElementById("username-error");
var email = document.getElementById("email");
var emailError = document.getElementById("email-error");
var phone = document.getElementById("phone");
var phoneError = document.getElementById("phone-error");
var password = document.getElementById("password");
var passwordError = document.getElementById("password-error");
var confirmPassword = document.getElementById("confirm-password");
var confirmPasswordError = document.getElementById("confirm-password-error");

document.getElementById("togglePassword").addEventListener( "click", () => {
	if (password.getAttribute("type") == "password")
		password.setAttribute("type", "text");
	else
		password.setAttribute("type", "password");
}

);

var submitButton = document.getElementById("submit");

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	if (username.value == null || username.value.length < 5){
		usernameError.innerHTML = "username is required and must be at least 5 characters";
	} else{
		usernameError.innerHTML = "";
	}
	
	if (email.value == null || !emailFormat.test(email.value)){
		emailError.innerHTML = "email is required and must have pattern em@ex.com";
	} else{
		emailError.innerHTML = "";
	}
	
	if (phone.value == null || phone.value.length != 10){
		phoneError.innerHTML = "phone is required and must be 10 characters";
	} else{
		phoneError.innerHTML = "";
	}
	
	if (password.value == null || password.value.length < 6){
		passwordError.innerHTML = "password is required and must be at least 6 characters";
	} else{
		passwordError.innerHTML = "";
	}
	
	if (confirmPassword.value == null || confirmPassword.value != password.value){
		confirmPasswordError.innerHTML = "confirm password must match with password";
	} else{
		confirmPasswordError.innerHTML = "";
	}
	
}
)