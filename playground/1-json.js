const fs = require('fs');

const person = {
    name:'Jesh Venkatesh',
    place : 'RJY'
}

const stringJSON = JSON.stringify(person);

fs.writeFileSync('person.json',stringJSON);

const dataBuffer = fs.readFileSync('person.json');

const dataString = dataBuffer.toString();

const dataJSON = JSON.parse(dataString);

console.log(dataJSON);

