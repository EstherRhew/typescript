const headerMenu = document.querySelector('.header_menu')
const dialogBg = document.querySelector('.dialog_bg');
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const addBtn = document.querySelector('.addBtn');
const dialogCloseBtn = document.querySelector('#dialogCloseBtn');



type ImageOrVideo = {
  title: string;
  url: string;
}

interface Dialog {
  close: () => void;
  add: () => ImageOrVideo;
}

class DialogImpl implements Dialog {
  // constructor(public title: string, public url?: string, public body?: string) { }

  close() {
    console.log('hello')
  }

  add() {
    return {
      title: 'haha',
      url: 'hehe'
    }
  }
}

const dialogBox = new DialogImpl();

headerMenu?.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target.dataset.name === 'url') {
    dialogBg?.setAttribute('style', 'display:block');
  }
})

// dialogBg?.addEventListener('click', (e) => {
//   //const target = e.target as HTMLInputElement;
//   // console.log(target)
//   //console.log(target?.labels[0].innerText)
// })

dialogCloseBtn?.addEventListener('click', () => {
  dialogBox.close();
})
