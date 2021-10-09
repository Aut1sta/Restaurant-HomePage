const renderContactPage = (() => {

    const contentContainer = document.querySelector('#tabs-content')

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-tab-content', '')
    contact.innerHTML = `
                <h1>Contact-us</h1>
                <div class="contact-content">
                    <ul>
                        <li><p>189 Laconia Ave <br> Manhattan, NY 28942</p></li>
                        <li><p>Mon-Thurs: 8am-8pm <br> Fri-Sun: 8am-6pm</p></li>
                        <li><p>(222)-888 5555</p></li>
                    </ul>
                </div>
            </div>`;
    contentContainer.appendChild(contact)
})();

export {renderContactPage}