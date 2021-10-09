const renderHomePage = (() => {

    const contentContainer = document.querySelector('#tabs-content')

    const home = document.createElement('div');
    home.setAttribute('id', 'home');
    home.setAttribute('data-tab-content', '')
    home.setAttribute('class', 'active')
    home.innerHTML = `
    <h1>Come on down for some delicious cuisine!</h1>
        <div class="home-content">
            <ul>
                <li class="address">
                    <h2>Address:</h2>
                    <p>189 Laconia Ave <br> Manhattan, NY 28942</p>
                 </li>
                <li class="hours">
                    <h2>Opening hours:</h2>
                    <p>Mon-Thurs: 8am-8pm <br> Fri-Sun: 8am-6pm</p>
                </li>
            </ul>
        </div>
    </div>`;
    contentContainer.appendChild(home)
})();

export {renderHomePage}