function validateForm() {
    var valid = true;

    for(let i = 0; i < 4; i++) {
        var e = document.forms["signup"][i];
        
        if(e.value == "") {
            valid = false;

            e.classList.add("error-input");
            e.setAttribute("placeholder", "");

            var label = document.getElementById(e.id + "Label");

            if(!label.hasChildNodes()) {                
                var em = document.createElement("em");
                let message = '';

                switch(e.id) {
                    case "fname":
                        message = "First Name cannot be empty";
                        break;
                    case "lname":
                        message = "Lase Name cannot be empty";
                        break;
                    case "mail":
                        message = "Email cannot be empty";
                        break;
                    case "pwd":
                        message = "Password cannot be empty";
                        break;
                }
                
                em.appendChild(document.createTextNode(message));
                label.appendChild(em);
            }
        }
    }
    
    return valid;
}