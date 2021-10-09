const renderMenuPage = (() => {

    const contentContainer = document.querySelector("#tabs-content");
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')
    menu.setAttribute('data-tab-content', '')
    menu.innerHTML = `
    <h1 class="menu-logo">Menu</h1>
    <div class="menu-content">
        <ul>
            <li>
                <div class="hamburger">
                    <img src="/src/img/double-cheeseburger.png" alt="" class="menu-imgs">
                    <p>Hamburger:____________________$2.49 <br>
                       Buns, patty, tomato, onions, lettuce, and our secret family recipe.
                    </p>
                </div>
            </li>
            <li>
                <div class="french-fries">
                    <img src="/src/img/french-fries.png" alt="" class="menu-imgs">
                    <p>French Fries:____________________$1.99 <br>
                        Sometimes you don't want to eat your burger alone, why not add some french fries?
                    </p>
                </div>
            </li>
            <li>
                <div class="ceaser-salad">
                <img src="/src/img/caesar-salad.png" alt="" class="menu-imgs">
                <p>Caesar Salad:___________________$7.99 <br>
                    Your typical caesar salad that comes with your choice of dressings.
                </p>
            </div></li>
        </ul>
    </div>
    </div>`;
    contentContainer.appendChild(home)
})();

export {renderMenuPage}