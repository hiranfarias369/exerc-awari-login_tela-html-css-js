function userIsCorrect(user, password) {
	return user.value == "hiran" && password.value == "123456";
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
				"! \n Teste realizado com sucesso."
		);
	} else {
		alert("Email ou senha incorretos");
	}
}
