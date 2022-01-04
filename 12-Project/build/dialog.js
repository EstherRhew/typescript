"use strict";
var headerMenu = document.querySelector('.header_menu');
var dialogBg = document.querySelector('.dialog_bg');
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var addBtn = document.querySelector('.addBtn');
var dialogCloseBtn = document.querySelector('#dialogCloseBtn');
var DialogImpl = /** @class */ (function () {
    function DialogImpl() {
    }
    // constructor(public title: string, public url?: string, public body?: string) { }
    DialogImpl.prototype.close = function () {
        console.log('hello');
    };
    DialogImpl.prototype.add = function () {
        return {
            title: 'haha',
            url: 'hehe'
        };
    };
    return DialogImpl;
}());
var dialogBox = new DialogImpl();
headerMenu === null || headerMenu === void 0 ? void 0 : headerMenu.addEventListener('click', function (e) {
    var target = e.target;
    if (target.dataset.name === 'url') {
        dialogBg === null || dialogBg === void 0 ? void 0 : dialogBg.setAttribute('style', 'display:block');
    }
});
dialogBg === null || dialogBg === void 0 ? void 0 : dialogBg.addEventListener('click', function (e) {
    var target = e.target;
    // console.log(target)
    console.log(target === null || target === void 0 ? void 0 : target.labels[0].innerText);
});
dialogCloseBtn === null || dialogCloseBtn === void 0 ? void 0 : dialogCloseBtn.addEventListener('click', function () {
    dialogBox.close();
});
