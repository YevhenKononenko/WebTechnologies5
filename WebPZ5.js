var opaC = 0;
var x = document.getElementById("First");
var y = document.getElementById("Second");
x.style.opacity = opaC;
y.style.opacity = opaC;
window.onload = function (){
    let m = setInterval(myFunc2, 30);
    function myFunc2(){
        if(opaC == 1) {
            clearInterval(m);
        }
        else {
            x.style.opacity = opaC;
            y.style.opacity = opaC;
            opaC+=0.01;
        }
    }
}
var p = document.getElementById("InPut");
p.onclick = function() {
    alert("Do you really want submit this, chumba? So, fill this forms to confirm your action. Press OK to continue.");
    let d = prompt("Username:")
    if (d == "") {
        alert("Username field isn't filled!!!");
        return true;
    }
    let t = prompt("Password:");
    if (t == "") {
        alert("Password field isn't filled!!!");
        return true;
    }
    let v = prompt("Confirm your password:");
    if (v == "") {
        alert("Password field isn't filled!!!");
        return true;
    }
    if (t !== "" && v !== ""){
        if (t == v) {
            alert("User verified successfully. Press OK to continue.");
            return false;
        }
    }
    alert("Entered passwords do not match!!!");
    return true;
}