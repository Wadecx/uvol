function clicked() {
	var pass = document.getElementById('password');

    var corpass ="28112021";


    if(pass.value == corpass)
        window.open("html/secret.html")
    

    else
        window.alert("Mot de passe incorrect ...")

}