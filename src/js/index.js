import Swiper from 'swiper';
import {renderMain, renderMainBasket} from './dom.js';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

renderMain();
renderMainBasket();