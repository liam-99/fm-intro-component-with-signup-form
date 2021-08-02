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
                label.parentNode.classList.add("input-box-with-warning");
            }
        }
        else {
            if(e.id == "mail" && !validateEmail(e.value)) {
                valid = false;
                var label = document.getElementById(e.id + "Label");
                e.value = "";
                e.setAttribute("placeholder", "example@example.com");

                if(label.hasChildNodes()) {
                    label.removeChild(label.lastChild);
                }
                var em = document.createElement("em");
                em.appendChild(document.createTextNode("Looks like this is not an email"));
                label.appendChild(em);
                label.parentNode.classList.add("input-box-with-warning");
            }
            else {
                e.classList.remove("error-input");
                var label = document.getElementById(e.id + "Label");
                if(label.hasChildNodes()) {
                    label.removeChild(label.lastChild);
                }
                label.parentNode.classList.remove("input-box-with-warning");
            }
        }
    }
    
    return valid;
}

function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) return true;
    else return false;
}