// make a smurf
document.querySelector("#submit").addEventListener('click', fizzbuzz) 

function fizzbuzz(e) {
    e.preventDefault();
    // get input
    let userInput = parseInt(document.querySelector('#userInput').value);

    for (let i = 1; i <= userInput; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: fizzbuzz`);
        } else if (i % 5 === 0) {
            console.log(`${i}: buzz`);
        } else if (i % 3 === 0) {
            console.log(`${i}: fizz`);
        } else {
            console.log(`${i}`);
        }
    }
}