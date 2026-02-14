import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword }
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            location.href = "dashboard.html";
        })
        .catch((error) => {
            errorMsg.innerText = error.message;
        });
}
