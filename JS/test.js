function test1() {
    document.getElementById("test1").style.display = "block";
    document.getElementById("test2").style.display = "none";
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "none";
}
function test2() {
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.display = "block";
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "none";
}
function test3() {
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.display = "none";
    document.getElementById("test3").style.display = "block";
    document.getElementById("test4").style.display = "none";
}
function test4() {
    document.getElementById("test1").style.display = "none";
    document.getElementById("test2").style.display = "none";
    document.getElementById("test3").style.display = "none";
    document.getElementById("test4").style.display = "block";
}
function showall() {
    document.getElementById("test1").style.display = "block";
    document.getElementById("test2").style.display = "block";
    document.getElementById("test3").style.display = "block";
    document.getElementById("test4").style.display = "block";
}