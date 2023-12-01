let restaurants = [
    {
        img: "img/products/1.png",
        name: "Макдоналдс — Газетный",
        tag: "Бургеры",
        price_level: 2,
        time: "25 - 35"
    },
    {
        img: "img/products/2.png",
        name: "DimSum & Co — ЦДМ",
        tag: "Японская Китайская Азиатская",
        price_level: 1,
        time: "40 - 50"
    },
    {
        img: "img/products/3.png",
        name: "ДвижОК — Манежная",
        tag: "Американская Европейская",
        price_level: 2,
        time: "35 - 45"
    },
]



function createProductCard(restaurant) {
    let card = document.createElement('div');
    card.setAttribute('class', 'restaurant-card');

    let card_img = document.createElement('img');
    card_img.setAttribute('class', 'restaurant-card__img');
    card_img.setAttribute('src', restaurant.img);
    card_img.setAttribute('alt', restaurant.name);
    card.appendChild(card_img);

    let card_content = document.createElement('div');
    card_content.setAttribute('class', 'restaurant-card__content');

    let card_title = document.createElement('h3');
    card_title.setAttribute('class', 'restaurant-card__title')
    card_title.innerHTML = restaurant.name;
    card_content.appendChild(card_title);

    let card_tag = document.createElement('div');
    card_tag.setAttribute('class', 'restaurant-card__tag');
    card_content.appendChild(card_tag);

    let price_level = document.createElement('span');
    price_level.setAttribute('class', 'restaurant-card__price-level');
    price_level.innerHTML = "₽".repeat(restaurant.price_level);
    card_tag.appendChild(price_level);

    restaurant.tag.split(' ').forEach(tag => {
        let dot_span = document.createElement('span');
        dot_span.innerHTML = ' • ';
        card_tag.appendChild(dot_span);

        let category = document.createElement('span');
        category.setAttribute('class', 'restaurant-card__category');
        category.innerHTML = tag;
        card_tag.appendChild(category);
    });

    let time = document.createElement('p');
    time.setAttribute('class', 'restaurant-card__time');
    time.innerHTML = `${restaurant.time} мин`;
    card_content.appendChild(time);
    card.appendChild(card_content);

    return card;
}

for (let i = 0; i < restaurants.length; i++){
    let restaurant_card = createProductCard(restaurants[i]);
    let restaurants__cards = document.querySelector('.restaurants__cards');
    restaurants__cards.appendChild(restaurant_card)
}