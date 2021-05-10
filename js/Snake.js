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

            if (event.key == 'ArrowUp') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowLeft') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowDown') {
                this._timeout(event.key);
            }

            if (event.key == 'ArrowRight') {
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
        if (direction == 'ArrowUp') {
            number = -20
        }

        if (direction == 'ArrowLeft') {
            number = -1
        }

        if (direction == 'ArrowDown') {
            number = 20
        }

        if (direction == 'ArrowRight') {
            number = 1
        }

        setTimeout(() => {
            this._position = this._position + number;
            this._changeTd(false);
            this._timeout(direction);
        }, 600);
    }
}