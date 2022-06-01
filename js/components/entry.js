class Entry {
    handleClear() {
        ROOT_ENTRY.innerHTML = '';
    }

    render() {

        const html = `
        <div class="header__dark-bg">
            <div class="header__entry-page">
                <div class="header__entry-close" onclick="entryPage.handleClear()">
                    <img src="img/shopping/close.png" alt="">
                </div>
            </div>
        </div>
        `;

        ROOT_ENTRY.innerHTML = html;
    }
}

const entryPage = new Entry();