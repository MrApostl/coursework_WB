import Swiper from 'swiper';
import {clickOnSeller, clickOnBuyer, clickOnAddCloseCard, clickOnAddClosebasket} from './handlers.js'

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



const elemBtnSeller = document.querySelector('.header-wrapper__top__links__link_seller');
const elemBtnBuyer = document.querySelector('.header-wrapper__top__links__link_buyer');

elemBtnSeller.addEventListener('click', clickOnSeller);
elemBtnBuyer.addEventListener('click', clickOnBuyer);

//Добавление карточки
const elemBtnOpenAddForm = document.querySelector('.add');
const elemBtnCloseAddForm = document.querySelector('.add-card_btn_close');

elemBtnOpenAddForm.addEventListener('click', clickOnAddCloseCard);
elemBtnCloseAddForm.addEventListener('click', clickOnAddCloseCard);

//Корзина
const elemBtnOpenBasket = document.querySelector('.basket');
const elemBtnCloseBasket = document.querySelector('.basket-wrapper-right_close');

elemBtnOpenBasket.addEventListener('click', clickOnAddClosebasket);
elemBtnCloseBasket.addEventListener('click', clickOnAddClosebasket);