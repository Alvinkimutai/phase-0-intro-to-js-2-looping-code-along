// Code your solutions in this file
for(let age=30; age<40; age +=1) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

//returns an array of thank you messages for each name provided to the function
const array = ['Alvin', 'Robert', 'Valary', 'Dennis'];

function writeCards(array){
    let thankYouMessages = [];
    for(let i=0; i<array.length; i++){
        thankYouMessages.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}
console.log(writeCards(array));

//invokes console.log once for each number, counting down from the number provided to zero

function countDown(number){
for(let i=number; i>=0; i--){
    console.log(i);
}
}
countDown(11);
