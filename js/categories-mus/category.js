function app() {
    const buttons = document.querySelectorAll('.button');
    const cards = document.querySelectorAll('.product');

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anim-card')
            } else {
                item.classList.remove('hide-card')
                item.classList.remove('anim-card')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            buttons.forEach((button) => {
                button.classList.remove('button-active')
            })
            button.classList.add('button-active')
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (card.classList.contains('anim-card')) {
                card.classList.add('hide-card')
            }
        }
    })
}

app()