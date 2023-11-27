function showAns(){
    var a = 10;
    var b = 20;
    window.alert(a+b);
}
function noAns(){
    window.alert("不告訴你");
}
function showSmile(){
    window.alert("^________^");
    btns[2].removeEventListener("click", showSmile, false);
}


var btns = document.getElementsByName("btn");
btns[1].onclick = showAns;
btns[1].onclick = noAns;

btns[2].addEventListener("click", showAns, false);
btns[2].addEventListener("click", showSmile, false);