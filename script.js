function outcome() {
    var x = Number(document.getElementById("numberone").value);
    var y = Number(document.getElementById("numbertwo").value);
    var z = 0

if (document.getElementById("case1").checked){
    z = x + y;
}
else if (document.getElementById("case2").checked){
    z = x - y;
}
else if (document.getElementById("case3").checked){
    z = x * y;
}
else {
    z = x / y;
}
document.getElementById("resultArea").innerHTML = " Result is : " + String(z);
}