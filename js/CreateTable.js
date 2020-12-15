class CreateTable{
    
    constructor(){
        this._arrayOfTheTable = [];
        this._amountOfLines = 18;
        this._amountOfColumns = 18;
    }

    create(element){
        let table = "<table>";
        
        for (let row = 1; row < this._amountOfColumns; row++) {
            
            table += "<tr>";

            for (let column = 1; column < this._amountOfColumns; column++) {
                table += "<td>";
                table += "</td>";
            }

            table += "</tr>";
        }

        table += "</table>";
        element.innerHTML = table;
    }
}


