function submitForm() {
    let f = document.getElementById("first").value;
    let l = document.getElementById("last").value;
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;
    let rp = document.getElementById("repassword").value;

    if (!f || !l || !e || !p || !rp) {
        alert("Fill all fields");
        return;
    }
    if (p !== rp) {
        alert("Passwords not matching");
        return;
    }

    document.getElementById("msg").innerHTML =
        " successful!";
}
