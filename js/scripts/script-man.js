/* ------------------------------------------------------------------------------------------GET_MORE_INFO */

let coll = document.getElementsByClassName('equipment__more');
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
}

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
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
}