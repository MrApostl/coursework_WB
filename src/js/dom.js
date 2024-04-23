import {clickOnSeller, clickOnBuyer, clickOnAddCloseCard, clickOnAddClosebasket, clickOnAddCard, clickOnDeleteCard, clickOnSearch, ChangeSearch, clickOnBuyCard, clickOnDeleteBasket} from './handlers.js'
import { getRoundNum } from './math.js';
import { getDate } from './webStorageAPI.js';

const mainWrapperElem = document.querySelector('.main-wrapper');
const elemSearch = document.querySelector('.header-wrapper__bottom__search__input');
const elemBtnSearch = document.querySelector('.header-wrapper__bottom__search__btn');
const basketWrapperElem = document.querySelector('.basket-wrapper-left'); 
const basketSumElem = document.querySelector('.basket-wrapper-right_sum'); 

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
    
    //Поиск
    elemBtnSearch.addEventListener('click', clickOnSearch); 
    elemSearch.addEventListener('change', ChangeSearch);
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
    main_card_bottom_btnBuy.addEventListener('click', clickOnBuyCard);
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

    if(!elemSearch.value){
        for(let i = 0; i < masCards.length; i++){
            renderCard(masCards[i]);
        }
    }else{
        for(let i = 0; i < masCards.length; i++){
            if(masCards[i].title.includes(elemSearch.value))
            {
                renderCard(masCards[i]);
            }
        }
    }
}

const renderCardBasket = (cardBasket) =>{
    let {id, src, title, price} = cardBasket;

    const basket_card = document.createElement('div');
    basket_card.id = id;
    basket_card.classList.add('basket-wrapper-left-card');
    
    //верх карточки
    const basket_card_top = document.createElement('div');
    basket_card_top.classList.add('basket-wrapper-left-card-top');
    basket_card.append(basket_card_top);

    const basket_card_top_img = document.createElement('img');
    basket_card_top_img.src = src;
    basket_card_top.append(basket_card_top_img);
    
    //низ карточки
    const basket_card_bottom = document.createElement('div');
    basket_card_bottom.classList.add('basket-wrapper-left-card-bottom');
    basket_card.append(basket_card_bottom);

    const basket_card_bottom_price = document.createElement('div');
    basket_card_bottom_price.classList.add('basket-wrapper-left-card-bottom_price');
    basket_card_bottom_price.textContent = price;
    basket_card_bottom.append(basket_card_bottom_price);
    
    const basket_card_bottom_price_currency = document.createElement('span');
    basket_card_bottom_price_currency.classList.add('basket-wrapper-left-card-bottom_price_currency');
    basket_card_bottom_price_currency.textContent = 'p. '
    basket_card_bottom_price.append(basket_card_bottom_price_currency);

    const basket_card_bottom_title = document.createElement('div');
    basket_card_bottom_title.classList.add('basket-wrapper-left-card-bottom_title');
    basket_card_bottom_title.textContent = title;
    basket_card_bottom.append(basket_card_bottom_title);

    //кнопки
    const basket_card_bottom_btn = document.createElement('div');
    basket_card_bottom_btn.classList.add('basket-wrapper-left-card-bottom_btn');
    basket_card_bottom.append(basket_card_bottom_btn);

    //кнопка удаления
    const basket_card_bottom_btnDel = document.createElement('button');
    basket_card_bottom_btnDel.classList.add('basket-wrapper-left-card-bottom_btnDel');
    basket_card_bottom_btnDel.addEventListener('click', clickOnDeleteBasket);
    basket_card_bottom_btn.append(basket_card_bottom_btnDel);

    const basket_card_bottom_trash = document.createElement('i');
    basket_card_bottom_trash.classList.add('fa-solid');
    basket_card_bottom_trash.classList.add('fa-trash');
    basket_card_bottom_btnDel.append(basket_card_bottom_trash);

    basketWrapperElem.append(basket_card);

    basketSumElem.textContent = getRoundNum(+basketSumElem.textContent + +price, 2);
}   

const renderMainBasket = () =>{
    basketWrapperElem.innerHTML = '';

    //basket
    const masBasket = getDate('basket');
    let sum = 0;

    for(let i = 0; i < masBasket.length; i++){
        renderCardBasket(masBasket[i]);
        sum += masBasket[i].price; 
    }
    basketSumElem.textContent = sum;
}

export {installHandle, renderCard, renderMain, renderCardBasket, renderMainBasket};