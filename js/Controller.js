class Controller {
    constructor(table){
        this._table = new CreateTable().create(document.querySelector(table));
        this._snake = new Snake().spawn(9, 9,this._table);
    }
}