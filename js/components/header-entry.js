class Header_Entry {
    handlerOpenEntryPage() {
        entryPage.render();
    }

    render() {
        const html = `
            <div class="header__entry-body" onclick="header_entryPage.handlerOpenEntryPage();" id="entry">Вход</div>
        `;

        ROOT_HEADER_ENTRY.innerHTML = html;
    }
}

const header_entryPage = new Header_Entry();

header_entryPage.render();