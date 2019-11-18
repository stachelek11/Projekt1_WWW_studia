const form = document.querySelector('.form')
const btn = document.querySelector(".submitBtn")

function validate(form) {
    checkStringAndFocus(form.elements["f_imie"], "Błędne imie");
    checkStringAndFocus(form.elements["f_nazwisko"], "Błędne nazwisko");
    checkEmail(form.elements["email"].value);
    checkPhonenumber(form.elements["telefon"].value)
}

function isEmpty(str) {
    return (!str || str.length === 0)
}

function isWhiteSpace(str) {
    var ws = "\t\n\r ";
    for (i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (ws.indexOf(c) > -1) {
            return true;
        }
    }
    return false;
}

function checkString(str, msg) {
    if (isWhiteSpace(str) || isEmpty(str)) {
        alter(msg);
        return false;
    } else return true;

}



const checkPhonenumber = (number) => {
    if(number.length === 9){
        return true
    }
    else{
        document.querySelector('.tel-err').innerHTML = 'Nieprawidlowy numer telefonu';
        clearError(document.querySelector(".tel-err"));
        return false
    }
}



function checkEmail(str) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = pattern.test(str.toLowerCase())
    if (isValid) {
        return true
    }
    else {
        document.querySelector('.email-err').innerHTML = 'Nieprawidlowy email';
        clearError(document.querySelector(".email-err"));
        return false;
    }
}

function checkStringAndFocus(obj, msg) {
    var str = obj.value;
    var errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (isWhiteSpace(str) || isEmpty(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        clearError(document.querySelector(".imie-err"));
        clearError(document.querySelector(".nazwisko-err"));
        obj.focus();
        return false;
    } else return true;
}

errorField = "";

const clearError = (element) => {
    setTimeout(() => {
        element.textContent = "";
    }, 3000)
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    validate(form)
})