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

let coll2 = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll2.length; i++) {
    coll2[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
}