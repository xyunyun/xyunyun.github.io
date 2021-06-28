function wclick(url){
    setTimeout("top.location.href = '" + url + "'", 1700);
    var homecss = document.getElementsByClassName('home_acss');
    homecss[0].style.width ="0px";
}