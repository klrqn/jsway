document.querySelector("#submit").addEventListener('click', checkInput)

function checkInput(e) {
    e.preventDefault();

    // get input value
    let userInput = document.querySelector('#userInput').value.toLowerCase();
    console.log(userInput);

    // check if it is 'yes or no', lowercase
    if (userInput === 'yes' || userInput === 'no') {
        // return fireworks if it is
        document.querySelector("body").classList.add("background");
        // change font color to white
        document.querySelector("form").classList.add('white-text');
        // remove error message
        document.querySelector("#error").style = 'display: hidden;';

    } else {
        // return error if not
        document.querySelector("body").classList.remove("background");
        // change font color to black
        document.querySelector("form").classList.remove('white-text');
        // create error message
        document.querySelector("#error").style = 'display: block !important;';
        
    }


}