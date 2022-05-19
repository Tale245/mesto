export default class Section {
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;

        this._containerSelector = document.querySelector(containerSelector);
    }
    // проходим по массиву нужных элементов и вызываем для них функцию renderer
    rendererItems(){
        this._items.forEach((item) => {
            this._renderer(item)
        });
    }
    // Добавляем элементы на страницу
    addItem(element){
        this._containerSelector.prepend(element)
    }
}