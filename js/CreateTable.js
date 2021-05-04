export class CreateTable{
    
    constructor(){
        this._arrayOfTheTable = [];
        this._amountOfLines = 20 + 1;
        this._amountOfColumns = 20 + 1;
        this._position = 1;
    }

    create(element){
        let table = "<table>";
        
        for (let row = 1; row < this._amountOfColumns; row++) {
            
            table += "<tr>";

            for (let column = 1; column < this._amountOfColumns; column++) {
                table += `<td id="td${this._position}">`;
                table += "</td>";
                this._position++;
            }

            table += "</tr>";
        }

        table += "</table>";
        element.innerHTML = table;
    }
}


