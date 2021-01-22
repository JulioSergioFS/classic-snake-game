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

        let direction = 189;

        setInterval(() => {

            document.addEventListener('keydown', (event) => {

                var lost = this._position <= 20 || this._position > 380 || this._position % 20 == 0 || this._position % 20 == 1;
                //the line above checks if the player is touching the walls
    
                if (lost) {
                    return;
                }
    
                if (event.key == 'ArrowUp') {
                    var up = setInterval(() => {
                        direction = this._position - 20; 
                        console.log(' up')
                    }, 300);
                }
    
                if (event.key == 'ArrowLeft') {
                    var left = setInterval(() => {
                        direction = this._position - 1;
                        console.log(' left')
                    }, 300);
                }
    
                if (event.key == 'ArrowDown') {
                    var down = setInterval(() => {
                        direction = this._position + 20;
                        console.log(' down')
                    }, 300);
                }
    
                if (event.key == 'ArrowRight') {
                    var right = setInterval(() => {
                        direction = this._position + 1;
                        console.log(' right')
                    }, 300);
                }

                if(event.key == 'ArrowLeft' || event.key == 'ArrowDown' || event.key == 'ArrowRight') {
                    clearInterval(up);
                }

                if(event.key == 'ArrowUp' || event.key == 'ArrowDown' || event.key == 'ArrowRight') {
                    clearInterval(left);
                }

                if(event.key == 'ArrowLeft' || event.key == 'ArrowUp' || event.key == 'ArrowRight') {
                    clearInterval(down);
                }

                if(event.key == 'ArrowLeft' || event.key == 'ArrowDown' || event.key == 'ArrowUp') {
                    clearInterval(right);
                }
            });
            this._position = direction;
            //console.log(this._position)
            //console.log(direction + )
            this._changeTd(false);
        }, 300)

        
    }
}