export class ImageComponent {
    constructor(url, title) {
        this.element = document.createElement('div');
        this.element.setAttribute('class', 'imageComponent');
        this.image = document.createElement('img');
        this.image.setAttribute('class', 'image');
        this.image.setAttribute('src', url);
        this.title = document.createElement('span');
        this.title.setAttribute('class', 'title');
        this.title.textContent = title;
        this.element.insertAdjacentElement('afterbegin', this.image);
        this.element.insertAdjacentElement('afterbegin', this.title);
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
