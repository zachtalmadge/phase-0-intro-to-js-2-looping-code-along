// Code your solutions in this file
function writeCards(names){
    let output = [];
    for (let name of names){
        output.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return output;
}

function countDown(n){
    while (n >= 0){
        console.log(n);
        n--
    }
}