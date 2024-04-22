import {clickOnSeller, clickOnBuyer, clickOnAddCloseCard, clickOnAddClosebasket, clickOnAddCard, clickOnDeleteCard} from './handlers.js'
import { getDate } from './webStorageAPI.js';

const mainWrapperElem = document.querySelector('.main-wrapper');

const installHandle = () =>{
    const elemBtnSeller = document.querySelector('.header-wrapper__top__links__link_seller');
    const elemBtnBuyer = document.querySelector('.header-wrapper__top__links__link_buyer');
    
    elemBtnSeller.addEventListener('click', clickOnSeller);
    elemBtnBuyer.addEventListener('click', clickOnBuyer);
    
    //Добавление карточки
    const elemBtnOpenAddForm = document.querySelector('.add');
    const elemBtnCloseAddForm = document.querySelector('.add-card_btn_close');
    const elemBtnAddForm = document.querySelector('.add-card_btn_add');
    
    elemBtnOpenAddForm.addEventListener('click', clickOnAddCloseCard);
    elemBtnCloseAddForm.addEventListener('click', clickOnAddCloseCard);
    elemBtnAddForm.addEventListener('click', clickOnAddCard);
    
    //Удаление карточки
    const elemBtnDelMas = document.getElementsByClassName('main-card-bottom_btnDel');

    for (let i = 0; i < elemBtnDelMas.length; i++) {
        elemBtnDelMas[i].addEventListener('click', clickOnDeleteCard);
    }

    //Корзина
    const elemBtnOpenBasket = document.querySelector('.basket');
    const elemBtnCloseBasket = document.querySelector('.basket-wrapper-right_close');
    
    elemBtnOpenBasket.addEventListener('click', clickOnAddClosebasket);
    elemBtnCloseBasket.addEventListener('click', clickOnAddClosebasket);
}

const renderCard = (card) =>{
    let {id, src, title, price, fullPrice, sale} = card;

    const main_card = document.createElement('div');
    main_card.id = id;
    main_card.classList.add('main-card');
    
    //верх карточки
    const main_card_top = document.createElement('div');
    main_card_top.classList.add('main-card-top');
    main_card.append(main_card_top);

    const main_card_top_img = document.createElement('img');
    main_card_top_img.src = src;
    main_card_top.append(main_card_top_img);

    if(sale){
        const main_card_top_sale = document.createElement('span');
        main_card_top_sale.classList.add('main-card-top_sale');
        main_card_top_sale.textContent = `-${sale}%`;
        main_card_top.append(main_card_top_sale);
    }
    
    //низ карточки
    const main_card_bottom = document.createElement('div');
    main_card_bottom.classList.add('main-card-bottom');
    main_card.append(main_card_bottom);

    const main_card_bottom_price = document.createElement('div');
    main_card_bottom_price.classList.add('main-card-bottom_price');
    main_card_bottom_price.textContent = price;
    main_card_bottom.append(main_card_bottom_price);
    
    const main_card_bottom_price_currency = document.createElement('span');
    main_card_bottom_price_currency.classList.add('main-card-bottom_price_currency');
    main_card_bottom_price_currency.textContent = 'p. '
    main_card_bottom_price.append(main_card_bottom_price_currency);

    if(sale){
        const main_card_bottom_price_sale = document.createElement('span');
        main_card_bottom_price_sale.classList.add('main-card-bottom_price_sale');
        main_card_bottom_price_sale.textContent = `${fullPrice}p.`
        main_card_bottom_price.append(main_card_bottom_price_sale);
    }

    const main_card_bottom_title = document.createElement('div');
    main_card_bottom_title.classList.add('main-card-bottom_title');
    main_card_bottom_title.textContent = title;
    main_card_bottom.append(main_card_bottom_title);

    //кнопки
    const main_card_bottom_btn = document.createElement('div');
    main_card_bottom_btn.classList.add('main-card-bottom_btn');
    main_card.append(main_card_bottom_btn);

    //кнопка покупки
    const main_card_bottom_btnBuy = document.createElement('button');
    main_card_bottom_btnBuy.classList.add('main-card-bottom_btnBuy');
    main_card_bottom_btn.append(main_card_bottom_btnBuy);

    const main_card_bottom_card = document.createElement('i');
    main_card_bottom_card.classList.add('fa-solid');
    main_card_bottom_card.classList.add('fa-cart-shopping');
    main_card_bottom_btnBuy.append(main_card_bottom_card);

    const main_card_bottom_buy = document.createElement('span');
    main_card_bottom_buy.classList.add('main-card-bottom_buy');
    main_card_bottom_buy.textContent = ' Купить';
    main_card_bottom_btnBuy.append(main_card_bottom_buy);

    //кнопка удаления
    const main_card_bottom_btnDel = document.createElement('button');
    main_card_bottom_btnDel.classList.add('main-card-bottom_btnDel');
    const elemBtnOpenAddForm = document.querySelector('.add');
    main_card_bottom_btnDel.style.display = (elemBtnOpenAddForm.style.display === 'none' || elemBtnOpenAddForm.style.display === '') ? 'none' : 'block';
    main_card_bottom_btn.append(main_card_bottom_btnDel);

    const main_card_bottom_trash = document.createElement('i');
    main_card_bottom_trash.classList.add('fa-solid');
    main_card_bottom_trash.classList.add('fa-trash');
    main_card_bottom_btnDel.append(main_card_bottom_trash);


    mainWrapperElem.append(main_card);
    installHandle();
}   

const renderMain = () =>{
    mainWrapperElem.innerHTML = '';

    //card
    const masCards = getDate('cards');

    for(let i = 0; i < masCards.length; i++){
        renderCard(masCards[i]);
    }
}

export {installHandle, renderCard, renderMain};