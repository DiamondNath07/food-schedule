const foodArray = [
  {
    id: 1,
    img: './images/br1-indomie-hotdog.png',
    foodName: 'Indomie and hotdog',
    price: '$ 5.4',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'breakfast',
  },
  {
    id: 2,
    img: './images/br2-plaintain-vegetable.png',
    foodName: 'Plantain and Vegetable',
    price: '$ 13.4',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'breakfast',
  },
  {
    id: 3,
    img: './images/br3-toastedBread-tea.png',
    foodName: 'Toasted bread and tea',
    price: '$ 8.4',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'breakfast',
  },
  {
    id: 4,
    img: './images/br4-agonyiBeans-bread.png',
    foodName: 'Fried beans and bread',
    price: '$ 10.4',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'breakfast',
  },
  {
    id: 5,
    img: './images/lh1-friedRice-chicken.png',
    foodName: 'Fried rice and chicken',
    price: '$ 15.87',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'lunch',
  },
  {
    id: 6,
    img: './images/lh2-jollof-perinwinkle.png',
    foodName: 'Jolof and perinwinkle',
    price: '$ 13.04',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'lunch',
  },
  {
    id: 7,
    img: './images/lh3-fufu-egusi.png',
    foodName: 'fufu and Egusi',
    price: '$ 16.9',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'lunch',
  },
  {
    id: 8,
    img: './images/dn1-rice-vegetable.png',
    foodName: 'Indomie and hotdog',
    price: '$ 12.32',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'dinner',
  },
  {
    id: 9,
    img: './images/dn2-riceBeans-moimoi.png',
    foodName: 'rice,beans and moi-moi',
    price: '$ 20.4',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'dinner',
  },
  {
    id: 10,
    img: './images/dn3-jollof-chicken-dodo.png',
    foodName: 'Jollof rice and chicken ',
    price: '14.00',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Numquam magni corporis recusandae ipsa, commodi exercitationem corrupti est eum fugiat dolor itaque dolorum quis ex velit eius quibusdam labore. Dolorum, corporis!',
    category: 'breakfast',
  },
];

const foodTray = document.querySelector('.food-tray');

window.addEventListener('DOMContentLoaded', () => {
  displayFood(foodArray);
});

function displayFood(menuItems) {
  let myFoodArray = menuItems.map((foodItem) => {
    return `<div class="meal-specs">
            <img
              src="${foodItem.img}"
              alt="${foodItem.foodName}"
              class="food-pic"
            />
            <div class="description">
              <span class="name-price">
                <p class="food-name">${foodItem.foodName}</p>
                <p class="food-price">${foodItem.price}</p>
              </span>
              <p class="food-info">
                ${foodItem.desc}
              </p>
            </div>
          </div>`;
  });
  myFoodArray = myFoodArray.join('');
  foodTray.innerHTML = myFoodArray;
}
