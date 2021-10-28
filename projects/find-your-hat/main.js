const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
        this._field = field;
    }
    get field() {
        return this._field
    }
    print(){
        const test = []
        for (let i=0; i< this.field.length; i++){
            test.push(this.field[i].join(''))
            
        }
        for(let j=0; j < 15; j++){
            console.log(test.join(''))
        }
    }
}

const myField = new Field([
    ['*', '░', '0'],
    ['░', '0', '░'],
    ['░', '^', '░'],
]);
myField.print()