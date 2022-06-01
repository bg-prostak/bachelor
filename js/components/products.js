class Products {
    constructor() {
        this.classNameActive = 'product__button_active';
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

        CATALOG.forEach(({ id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="equipment__product product">
                    <span class="product__name">${name}</span>
                    <div class="product__container">
                        <img class="product__img" src="${img}" />
                    </div>
                    <div class="product__pbflex">
                        <span class="product__price">${price.toLocaleString()} руб.</span>
                        <button class="product__button${activeClass}"
                        onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                            ${activeText}
                        </button>
                    </div>
                </li>
            `;
        });

        const html = `
            <ul class="equipment__body">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();