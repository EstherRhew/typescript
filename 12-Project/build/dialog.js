"use strict";
const headerMenu = document.querySelector('.header_menu');
const dialogBg = document.querySelector('.dialog_bg');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const addBtn = document.querySelector('.addBtn');
const dialogCloseBtn = document.querySelector('#dialogCloseBtn');
class DialogImpl {
    close() {
        console.log('hello');
    }
    add() {
        return {
            title: 'haha',
            url: 'hehe'
        };
    }
}
const dialogBox = new DialogImpl();
headerMenu === null || headerMenu === void 0 ? void 0 : headerMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.dataset.name === 'url') {
        dialogBg === null || dialogBg === void 0 ? void 0 : dialogBg.setAttribute('style', 'display:block');
    }
});
dialogCloseBtn === null || dialogCloseBtn === void 0 ? void 0 : dialogCloseBtn.addEventListener('click', () => {
    dialogBox.close();
});
