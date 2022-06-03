/* ------------------------------------------------------------------------------------------CHANGE_OTHER_ELEMENT */

function hoverOnOrange(){
    document.getElementById("welcome__body").classList.add("active");
    document.getElementById("title-muz").classList.add("active");
    document.getElementById("title-man").classList.add("active");
    document.getElementById("text-muz").classList.add("active");
    document.getElementById("text-man").classList.add("active");
    document.getElementById("header__stick").classList.add("active");
    document.getElementById("musicians__body").classList.add("active");
    document.getElementById("musicians").classList.add("active");
}
function hoverOffOrange(){
    document.getElementById("welcome__body").classList.remove("active");
    document.getElementById("title-muz").classList.remove("active");
    document.getElementById("title-man").classList.remove("active");
    document.getElementById("text-muz").classList.remove("active");
    document.getElementById("text-man").classList.remove("active");
    document.getElementById("header__stick").classList.remove("active");
    document.getElementById("musicians__body").classList.remove("active");
    document.getElementById("musicians").classList.remove("active");
}
function hoverOnSelected(){
    document.getElementById("categories__selected").classList.add("active");
}
function hoverOffSelected(){
    document.getElementById("categories__selected").classList.remove("active");
}

/* ------------------------------------------------------------------------------------------MUSICIAN_SEARCH */

document.querySelector('#musicians__body').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.musicians__body');
    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
                elem.classList.add('anim-card');
                elem.classList.add('hide-card');
            }
            else {
                elem.classList.remove('anim-card');
                elem.classList.remove('hide-card');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('anim-card');
            elem.classList.remove('hide-card');
        });
    }
}