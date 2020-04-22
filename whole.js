function burgerclick() {
    var mobilemenu = document.getElementById('nav-mobile')
    var theclassname = 'container-fluid d-none';
    if (mobilemenu.className !== theclassname) {
        mobilemenu.className = theclassname;
    } else { mobilemenu.className = "container-fluid"; };
}