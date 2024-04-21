import Swiper from 'swiper';
import {clickOnSeller, clickOnBuyer, clickOnAddCloseCard} from './handlers.js'

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

const elemBtnOpenAddForm = document.querySelector('.add');
const elemBtnOpenCloseForm = document.querySelector('.add-card_btn_close');

elemBtnOpenAddForm.addEventListener('click', clickOnAddCloseCard);
elemBtnOpenCloseForm.addEventListener('click', clickOnAddCloseCard);