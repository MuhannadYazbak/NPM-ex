const validator = require('validator');
const { faker } = require('@faker-js/faker');

// Ex. 1.1
const emailToCheck = 'shoobert@dylan';
console.log('Is "shoobert@dylan" a valid email?', validator.isEmail(emailToCheck));

// Ex. 1.2
const phoneNumberToCheck = '786-329-9958';
console.log('Is "786-329-9958" a valid US mobile phone number?', validator.isMobilePhone(phoneNumberToCheck, 'en-US'));

// Ex. 1.3
const blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let textToClean = "I'M SO EXCITED!!!~!";
const cleanedText = validator.blacklist(textToClean, blacklist).toLowerCase();
console.log('Cleaned text:', cleanedText);

//Ex 2
function makeHuman(number) {
    const people = [];

    for (let i = 0; i < number; i++) {
        const person = {
            name: faker.person.fullName(),
            avatar: faker.internet.avatar(),
            companyName: faker.company.name()
        };

        people.push(person);
    }
    console.log(people)
    return people;
    
}
makeHuman(2)


