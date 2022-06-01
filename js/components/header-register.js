class Header_Register {
    handlerOpenRegisterPage() {
        registerPage.render();
    }

    render() {
        const html = `
            <div class="header__register-body" onclick="header_registerPage.handlerOpenRegisterPage();"
            id="register">Регистрация</div>
        `;

        ROOT_HEADER_REGISTER.innerHTML = html;
    }
}

const header_registerPage = new Header_Register();

header_registerPage.render();