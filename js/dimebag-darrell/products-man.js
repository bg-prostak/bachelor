class Products {
    constructor() {
        this.classNameActive = 'buy__button_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        footer_shoppingPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, category_mus, category_man, name, price, img, story, more}) => {
            let activeClass = '';
            let activeText = '';
            
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

        if (category_man === 'dimebag-darrell') {

        htmlCatalog += `
            <li class="equipment__product product ${category_mus}">
                <div class="equipment__photo">
                    <img src="${img}" alt="">
                </div>
                <div class="equipment__info">
                    <div class="equipment__read">
                        <div class="equipment__name">${name}</div>
                        <div class="equipment__story">${story}</div>
                        <button class="equipment__more">Подробнее</button>
                        <div class="equipment__more-open">${more}</div>
                    </div>
                    <div class="equipment__buy buy">
                        <div class="buy__price">Стоимость: <span>${price.toLocaleString()} руб.</span></div>
                        <button class="buy__button${activeClass}"
                        onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
                    </div>
                </div>
            </li>
            
        `;
        }
        });

        const html = `
            <ul class="equipment__body">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS_MAN.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();