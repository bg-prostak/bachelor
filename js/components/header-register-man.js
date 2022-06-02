class Header_Register_Man {
    handlerOpenRegisterPage() {
        register_manPage.render();
    }

    render() {
        const html = `
            <div class="header__register-body" onclick="header_register_manPage.handlerOpenRegisterPage();"
            id="register">Регистрация</div>
        `;

        ROOT_HEADER_REGISTER_MAN.innerHTML = html;
    }
}

const header_register_manPage = new Header_Register_Man();

header_register_manPage.render();