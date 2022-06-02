class Header_Entry_Man {
    handlerOpenEntryPage() {
        entry_manPage.render();
    }

    render() {
        const html = `
            <div class="header__entry-body" onclick="header_entry_manPage.handlerOpenEntryPage();">Вход</div>
        `;

        ROOT_HEADER_ENTRY_MAN.innerHTML = html;
    }
}

const header_entry_manPage = new Header_Entry_Man();

header_entry_manPage.render();