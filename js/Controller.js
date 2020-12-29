class Controller {
    constructor(table){
        this._table = new CreateTable().create(document.querySelector(table));
        this._snake = new Snake()
        this._spawn = this._snake.spawn(9, 9,this._table);
        this._lost = this._snake.loose();
        this._walk = this._snake.walk();
    }
}