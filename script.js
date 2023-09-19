document.addEventListener("DOMContentLoaded", function () {
    const emal = document.getElementById("eml");
    const pswrd = document.getElementById("password");
    const ckbx = document.getElementById("chk-bx");
    const btn = document.getElementById("bttn");
    const ertx = document.getElementById("etxt");
    const ertx2 = document.getElementById("etxt2");
    const ertx3 = document.getElementById("chkbx-er");

    btn.addEventListener("click", function() {
        const emailValue = emal.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const pValue = pswrd.value.trim();

        if(emailValue === "") {
            ertx.style.opacity = "1";
        } else if(!emailPattern.test(emailValue)){
            ertx.style.opacity = "1";
        } else {
            ertx.style.opacity = "0";
        }
        if(pValue.length < 8){
            ertx2.style.opacity = "1";
        } else {
            ertx2.style.opacity = "0";
        }
        if(!ckbx.checked){
            ertx3.style.opacity = "1";
        } else {
            ertx3.style.opacity = "0";
        }
        
    })
})