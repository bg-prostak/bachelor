class Footer_Shopping {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="footer-shopping__body" onclick="footer_shoppingPage.handlerOpenShoppingPage();">
                <div class="footer-shopping__img"><img src="img/footer-shopping/buy.svg" alt=""></div>
                <div class="footer-shopping__counter">${count}</div>
            </div>
        `;

        ROOT_FOOTER_SHOPPING_DIMEBAG_DARREL.innerHTML = html;
    }
}

const footer_shoppingPage = new Footer_Shopping();

const productsStore = localStorageUtil.getProducts();

footer_shoppingPage.render(productsStore.length);