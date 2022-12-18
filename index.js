function userIsCorrect(user, password) {
	return user.value == "denis" && password.value == "654321";
}

function login() {
	var user = document.getElementById("user");
	var password = document.getElementById("password");

	if (user.value == "" || password.value == "") {
		alert("Por favor preencha todos os campos.");
	}

	if (this.userIsCorrect(user, password)) {
		alert(
			"Obrigado sr(a) " +
				user.value +
				". \n Em breve nosso sistemas estará disponível para acesso do público"
		);
	} else {
		alert("Email ou senha incorretos");
	}
}
