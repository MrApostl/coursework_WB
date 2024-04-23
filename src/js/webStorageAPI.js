import {renderCard, renderMain, renderCardBasket, renderMainBasket} from './dom.js';

const getDate = (key) =>{

    // localStorage.clear();
    if(key === 'cards'){
        const masCards = localStorage.getItem(key);

        const masStartsCards = [
            {id: 0, src: 'https://filizhanka.com/images/products/products/20230719-1340541-big.jpg', title: 'Чайник', price: 40.24, fullPrice: 43.48, sale: 8},
            {id: 1, src: 'https://static.akusherstvo.ru/images/uploadfoto/guide/107/800-800.jpg', title: 'Ковер', price: 15.60, fullPrice: 15.60, sale: 0},
            {id: 2, src: 'https://sofishop.by/upload/iblock/bf6/zita91jr419ygvebf979411gwi0xy0g3.png', title: 'Фиточай', price: 4.00, fullPrice: 4.04, sale: 10},
            {id: 3, src: 'https://fissman.ru/upload/iblock/6cc/se9avi70klh3ryzfud06eev39v1uru2v/termos.jpg', title: 'Термос', price: 34.90, fullPrice: 38.39, sale: 10},
            {id: 4, src: 'https://serge-fashion.by/upload/iblock/1ad/7308_48__white001_01.jpg', title: 'Майка', price: 40.00, fullPrice: 43.20, sale: 8},
        ];

        return masCards ? JSON.parse(masCards) : masStartsCards;
    }else{
        const masBasket = localStorage.getItem(key);

        return masBasket ? JSON.parse(masBasket) : [];
    }
}

const setDate = (key, item) =>{
    if(!Array.isArray(item)){
        const nameStor = key === 'cards' ? 'cards' : 'basket';
        const masItems = getDate(nameStor);
        masItems.push(item);
        localStorage.setItem(key, JSON.stringify(masItems)); 
        if(key === 'cards'){
            renderCard(item);
        }else{
            renderCardBasket(item);
        }
        
    }else{
        localStorage.setItem(key, JSON.stringify(item)); 
        renderMain();
        renderMainBasket();
    }
}

const removeDate = () =>{
    localStorage.clear();
}

export {getDate, setDate, removeDate}