class Register {
    handleClear() {
        ROOT_REGISTER.innerHTML = '';
    }

    render() {

        const html = `
        <div class="header__dark-bg">
            <div class="header__register-page">
                <div class="header__register-close" onclick="registerPage.handleClear()">
                    <img src="img/shopping/close.png" alt="">
                </div>
            </div>
        </div>
        `;

        ROOT_REGISTER.innerHTML = html;
    }
}

const registerPage = new Register();