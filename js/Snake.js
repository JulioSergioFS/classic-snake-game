class Snake{
    constructor(){
        this._position = 1;
        this._td = '';
    }

    _changeTd(spawn){
        if (!spawn) {
            this._td.classList.remove("snake");
        }
        this._td = document.querySelector(`#td${this._position}`);
        this._td.classList.add("snake");
    }

    spawn(row, column){ // linha 2 coluna 1
        this._position = (row*20)+(column);
        this._changeTd(true);
        console.log(this._td);
    }

    loose(){
        return this._position < 0 || this._position > 400;
    }

    walk(lost){
        while (lost){
            document.addEventListener('keyup', (event) => {

                if (event.key == 'ArrowUp') {
                    this._position = this._position - 20;
                    this._changeTd(false);
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
}