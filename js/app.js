var check = document.querySelector(".check");

// Cuando se carga la página, verifica si hay un valor en localStorage para el estado del checkbox
window.addEventListener('load', function () {
    var isChecked = localStorage.getItem("checkbox_state");
    if (isChecked === null) {
        // Si no hay valor en localStorage, establece el checkbox como desmarcado (false)
        check.checked = false;
        localStorage.setItem("checkbox_state", false);
    } else {
        check.checked = isChecked === "true";
    }
});

// Cuando se hace clic en el checkbox, guarda su estado en localStorage
check.addEventListener('click', function () {
    localStorage.setItem("checkbox_state", check.checked);
    idioma();
});

function idioma() {
    var id = check.checked;
    if (id == true) {
        location.href = "en/index.html";
    } else {
        location.href = "/index.html";
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}