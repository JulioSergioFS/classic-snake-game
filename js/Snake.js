class Snake {
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
        console.log(this._td);
    }

    walk() {


        document.addEventListener('keydown', (event) => {

            var lost = this._position <= 20 || this._position > 380 || this._position % 20 == 0 || this._position % 20 == 1;
            //the line above checks if the player is touching the walls

            var up, left, right, down;
            //var direction;
            var stopLeft = false;
            var stopRight = false;
            var stopDown = false;
            var stopUP = false;

            if (lost) {
                return;
            }

            if (event.key == 'ArrowUp') {
                up = setInterval(() => {
                    this._position = this._position - 20;
                    console.log(' up')
                    this._changeTd(false)
                    if (stopUP) {
                        clearInterval(up)
                    }
                }, 1000);

                //direction = up;

            }

            if (event.key == 'ArrowLeft') {
                left = setInterval(() => {
                    this._position = this._position - 1;
                    console.log(' left')
                    this._changeTd(false)
                    if (stopLeft) {
                        clearInterval(left)
                    }
                }, 1000);
                //direction = left;

            }

            if (event.key == 'ArrowDown') {
                down = setInterval(() => {
                    this._position = this._position + 20;
                    console.log(' down')
                    this._changeTd(false)
                    if (stopDown) {
                        clearInterval(down)
                    }
                }, 1000);
                //direction = down;

            }

            if (event.key == 'ArrowRight') {
                right = setInterval(() => {
                    this._position = this._position + 1;
                    console.log(' right')
                    this._changeTd(false)
                    if (stopRight) {
                        clearInterval(right)
                    }
                }, 1000);
                //direction = right;

            }

            //if (event.key == 'ArrowDown' || event.key == 'ArrowUp' || event.key == 'ArrowRight' || event.key == 'ArrowLeft') {
            //    clearInterval(direction);
            //    console.log('cleared direction')
            //}

            if (event.key == 'ArrowDown' || event.key == 'ArrowUp' || event.key == 'ArrowRight') {
                stopLeft = true;
                //clearInterval(left);
                console.log('cleared down')
            }
            if (event.key == 'ArrowLeft' || event.key == 'ArrowUp' || event.key == 'ArrowRight') {
                stopDown = true;
                //clearInterval(down);
                console.log('cleared left')
            }
            if (event.key == 'ArrowDown' || event.key == 'ArrowUp' || event.key == 'ArrowRight') {
                stopRight = true;
                //clearInterval(right);
                console.log('cleared right')
            }
            if (event.key == 'ArrowDown' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
                stopUP = true;
                //clearInterval(up);
                console.log('cleared down')
            }
        });


    }

}