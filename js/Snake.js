export class Snake {
    constructor() {
        this._position = 1;
        this._td = '';
    }

    _changeTd(spawn) {
        if (!spawn) {
            this._td.classList.remove("snake");
        }
        this._td = document.querySelector(`#td${this._position}`);
        this._td.classList.add("snake");
    }

    spawn(row, column) { // linha 2 coluna 1
        this._position = (row * 20) + (column);
        this._changeTd(true);
    }

    walk() {

        document.addEventListener('keyup', (event) => {

            var lost = this._position <= 20 || this._position > 380 || this._position % 20 == 0 || this._position % 20 == 1;
            //the line above checks if the player is touching the walls

            if(lost){ 
                return;
            }

            if (event.key == 'ArrowUp') {
                while (!lost){
                    setTimeout(() => {
                        this._position = this._position - 20;
                        this._changeTd(false);
                    }, 1000)
                }                
            }

            if (event.key == 'ArrowLeft') {
                this._position = this._position - 1;
                this._changeTd(false);
            }

            if (event.key == 'ArrowDown') {
                this._position = this._position + 20;
                this._changeTd(false);
            }

            if (event.key == 'ArrowRight') {
                this._position++;
                this._changeTd(false);
            }


        });
    }
}