export class ImageComponent {
    constructor(url, title) {
        const template = document.createElement('template');
        template.innerHTML = `
    <section class="image">
      <div class="image_holder">
        <img class="image_thumbnail">
      </div>
      <p class="image_title"></p>
    </section>`;
        this.element = template.content.firstElementChild;
        const imageElement = this.element.querySelector('.image_thumbnail');
        imageElement.src = url;
        imageElement.alt = title;
        const titleElement = this.element.querySelector('.image_title');
        titleElement.textContent = title;
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
