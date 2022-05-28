function hoverOnBlue(){
    document.getElementById("welcome__button-man").classList.add("active");
}
function hoverOffBlue(){
    document.getElementById("welcome__button-man").classList.remove("active");
}
function hoverOnOrange(){
    document.getElementById("welcome__button-muz").classList.add("active");
    document.getElementById("welcome__body").classList.add("active");
    document.getElementById("title-muz").classList.add("active");
    document.getElementById("title-man").classList.add("active");
    document.getElementById("text-muz").classList.add("active");
    document.getElementById("text-man").classList.add("active");
}
function hoverOffOrange(){
    document.getElementById("welcome__button-muz").classList.remove("active");
    document.getElementById("welcome__body").classList.remove("active");
    document.getElementById("title-muz").classList.remove("active");
    document.getElementById("title-man").classList.remove("active");
    document.getElementById("text-muz").classList.remove("active");
    document.getElementById("text-man").classList.remove("active");
}

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