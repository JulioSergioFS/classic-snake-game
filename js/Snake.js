class Snake{

    spawn(row, column){ // linha 2 coluna 1
        let position = (row*20)+(column);
        let td = document.querySelector(`#td${position}`);
        td.classList.add("snake");
        console.log(position);
        console.log(td);
    }
}