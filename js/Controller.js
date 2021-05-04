import { CreateTable } from './CreateTable.js'
import { Snake } from './Snake.js'
import { Food } from './Food.js'

export class Controller {
    constructor(table){
        this._table = new CreateTable().create(document.querySelector(table));
        this._snake = new Snake()
        this._spawn = this._snake.spawn(9, 9,this._table);
        this._walk = this._snake.walk();
    }
}

const controller = new Controller('#table-here');