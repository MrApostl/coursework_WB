import { getDate, setDate, removeDate } from './webStorageAPI.js';
import { getUniqId, getRoundNum } from './math.js';
import { renderMain } from './dom.js';

const elemBtnAdd = document.querySelector('.add');

const clickOnSeller = (event) =>{
    event.preventDefault();
    const elemBtnDelMas = document.getElementsByClassName('main-card-bottom_btnDel');

    elemBtnAdd.style.display = 'block';
    for (let i = 0; i < elemBtnDelMas.length; i++) {
        elemBtnDelMas[i].style.display = 'block';;
    }
}

const clickOnBuyer = (event) =>{
    event.preventDefault();

    const elemBtnDelMas = document.getElementsByClassName('main-card-bottom_btnDel');

    elemBtnAdd.style.display = 'none';
    for (let i = 0; i < elemBtnDelMas.length; i++) {
        elemBtnDelMas[i].style.display = 'none';
    }
}

const elemBtnFormAdd = document.querySelector('.add-card');

const clickOnAddCloseCard = (event) =>{
    event.preventDefault();
    
    elemBtnFormAdd.style.display = (elemBtnFormAdd.style.display === 'none') ? 'block' : 'none';
}

const clickOnDeleteCard = (event) =>{
    event.preventDefault();
    
    const elemCard = event.target.closest('.main-card');

    let masCards = getDate('cards');
    let masBasket = getDate('basket');
    let card = masCards.find((card) => +card.id === +elemCard.id);
    masCards.splice(masCards.indexOf(card), 1);

    removeDate();
    setDate('basket', masBasket);
    setDate('cards', masCards);
}

const clickOnDeleteBasket = (event) =>{
    event.preventDefault();
    
    const elemCard = event.target.closest('.basket-wrapper-left-card');

    let masBasket = getDate('basket');
    let masCards = getDate('cards');
    let cardBasFind = masBasket.find((cardBas) => +cardBas.id === +elemCard.id);
    masBasket.splice(masBasket.indexOf(cardBasFind), 1);

    removeDate();
    setDate('basket', masBasket);
    setDate('cards', masCards);
}

const clickOnAddCard = (event) =>{
    event.preventDefault();

    const idValue = getUniqId();
    const srcValue   = document.querySelector('#src').value;
    const titleValue = document.querySelector('#title').value;
    const priceValue = document.querySelector('#price').value;
    const saleValue  = document.querySelector('#sale').value;
    const fullPriceValue = getRoundNum(+priceValue + (+priceValue * (+saleValue/100)), 2);

    setDate('cards', {id:idValue, src:srcValue, title:titleValue, price:priceValue, sale:saleValue, fullPrice: fullPriceValue});

    elemBtnFormAdd.reset();
    elemBtnFormAdd.style.display = 'none';
}

const clickOnBuyCard = (event) =>{
    event.preventDefault();

    const elemCard   = event.target.closest('.main-card');
    const idValue    = elemCard.id;
    let {src: srcValue, title: titleValue, price: priceValue} = getDate('cards').find(elem => elem.id === +idValue);

    setDate('basket', {id:idValue, src:srcValue, title:titleValue, price:priceValue});
}

const elemBtnFormBasket = document.querySelector('.main-basket');

const clickOnAddClosebasket = (event) =>{
    event.preventDefault();

    elemBtnFormBasket.style.display = (elemBtnFormBasket.style.display === 'none') ? 'block' : 'none';
}

const clickOnSearch = (event) =>{
    event.preventDefault();

    const elemBtnDelMas = document.getElementsByClassName('main-card-bottom_btnDel');
    elemBtnAdd.style.display = 'none';
    for (let i = 0; i < elemBtnDelMas.length; i++) {
        elemBtnDelMas[i].style.display = 'none';
    }

    renderMain();
}

const ChangeSearch = (event) =>{
    const elemBtnDelMas = document.getElementsByClassName('main-card-bottom_btnDel');
    elemBtnAdd.style.display = 'none';
    for (let i = 0; i < elemBtnDelMas.length; i++) {
        elemBtnDelMas[i].style.display = 'none';
    }

    renderMain();
}



export {clickOnSeller, clickOnBuyer, clickOnAddCloseCard, clickOnAddClosebasket, clickOnAddCard, clickOnDeleteCard, clickOnSearch, ChangeSearch, clickOnBuyCard, clickOnDeleteBasket}