function contactus() {
    document.getElementById('contactus').scrollIntoView()
}
function loginval() {
    var mail = document.getElementById('log-emailval').value;
    var pass = document.getElementById('log-passwordval').value;
    if (mail == "" || pass == "") {
        if (mail) {

        }
    }
    alert("Please Enter Correct E-mail/Password");
}
function createval() {
    var mail = document.getElementById('emailval').value;
    var phone = document.getElementById('phoneval').value;
    var pass = document.getElementById('passwordval').value;
    var cpass = document.getElementById('cpasswordval').value;

    if (mail == "" || pass == "" || phone == "") {
        alert("Please Enter Correct E-mail/Password");
    }
    else if (pass != cpass) {
        alert("Your Passwrod Does Not Match With Confirm Password");
    }
}
function feedback() {
    var count = document.getElementById("feedval").value.length;
    var limit = 100 - count;
    document.getElementById("counter").innerHTML = limit;
    if (limit <= 0) {
        document.getElementById("counter").style.display = "none";
        document.getElementById("feedval").disabled = true;
        document.getElementById("warning").style.color = "red";
        document.getElementById("warning").innerHTML = "Limit Reached";
    }
}

function reset() {
    document.getElementById("fullnameval").value = "";
    document.getElementById("emailval").value = "";
    document.getElementById("feedval").value = "";
}