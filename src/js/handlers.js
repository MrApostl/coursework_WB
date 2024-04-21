const elemBtnAdd = document.querySelector('.add');
const elemBtnDel = document.querySelector('.main-card-bottom_btnDel');

const clickOnSeller = (event) =>{
    event.preventDefault();

    console.log(elemBtnAdd);
    elemBtnAdd.style.display = 'block';
    elemBtnDel.style.display = 'block';
}

const clickOnBuyer = (event) =>{
    event.preventDefault();

    
    elemBtnAdd.style.display = 'none';
    elemBtnDel.style.display = 'none';
}

const elemBtnFormAdd = document.querySelector('.add-card');

const clickOnAddCloseCard = (event) =>{
    event.preventDefault();

    
    elemBtnFormAdd.style.display = (elemBtnFormAdd.style.display === "none") ? "block" : "none";
}

const elemBtnFormBasket = document.querySelector('.main-basket');

const clickOnAddClosebasket = (event) =>{
    event.preventDefault();

    
    elemBtnFormBasket.style.display = (elemBtnFormBasket.style.display === "none") ? "block" : "none";
}

export {clickOnSeller, clickOnBuyer, clickOnAddCloseCard, clickOnAddClosebasket}