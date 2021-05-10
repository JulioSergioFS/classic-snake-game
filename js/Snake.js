export class Snake {
    constructor() {
        this._position = 1;
        this._td = '';
        this._lastDirection = '';
        this._historyOfDirections = [];
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

            if (lost) {
                return;
            }

            if (event.key == 'ArrowUp' || event.key == 'w') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowLeft' || event.key == 'a') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowDown' || event.key == 's') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowRight' || event.key == 'd') {
                this._timeout(event.key);
            }


        });
    }

    _timeout(direction) {
        let number = 0;
        if (direction != this._lastDirection && this._lastDirection != '') {
            this._historyOfDirections.push(this._lastDirection)
        }
        if (this._historyOfDirections.length >= 2) {
            if (this._historyOfDirections[0] == direction) {
                this._historyOfDirections.splice(0)
                return
            }
        }
        this._lastDirection = direction
        if (direction == 'ArrowUp' || direction == 'w') {
            number = -20
        }

        if (direction == 'ArrowLeft' || direction == 'a') {
            number = -1
        }

        if (direction == 'ArrowDown' || direction == 's') {
            number = 20
        }

        if (direction == 'ArrowRight' || direction == 'd') {
            number = 1
        }

        setTimeout(() => {
            this._position = this._position + number;
            this._changeTd(false);
            this._timeout(direction);
        }, 300);
    }
}