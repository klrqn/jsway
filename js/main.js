// // get carousel input

// document.querySelector("#submit").addEventListener('click', function(event) {
//     event.preventDefault() 

//     const carouselInput = document.querySelector("#carousel").value
//     let carouselDisplay = document.querySelector('#carouselDisplay')

//     console.log(carouselInput)

//     let i = 0;
//     let loopDisplay = "";
//     while (i <= carouselInput) {
//         loopDisplay += ` - ${i} - `
//         carouselDisplay.innerHTML = loopDisplay
//         i++
//     }
// })

// =========================================================================
// do carousel again with a for loop
// 

// document.querySelector("#submit").addEventListener('click', forLoop)

// function forLoop(e) {
//     e.preventDefault()

//     // get number of 'turns' from input form
//     let maxNum = document.querySelector("#carousel").value;
    
//     // create a for loop to add numbers to display string
//     let count = "";
//     for (let i=1; i<=maxNum; i++) {
//         count += ` ~${i}~ `;
//         document.querySelector("#carouselDisplay").innerHTML = count
//     }

//     // display count on webpage
// }

// // =================== input validator
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.


document.querySelector("#submit").addEventListener('click', function(e) {
    e.preventDefault();
    // get user input
    const userInput = parseInt(document.querySelector("#input").value);

    // console.log(document.querySelector("#input").value);
    // console.log(typeof document.querySelector("#input").value);
    // console.log(userInput)
    // console.log(typeof userInput)

    // check if it is under 100
    if (userInput > 100 || userInput < 50) {
        // error message
        console.log('wrong');
        document.querySelector("#error").classList.toggle('displayToggle');
        document.querySelector("#error").textContent = 'that\'s not right';
        document.querySelector("#display").textContent = ``;

    }

    if (userInput >= 50 || userInput <= 100) {
        document.querySelector("#error").classList.toggle('displayToggle');
        document.querySelector("#display").textContent = `Is this what you entered?: ${userInput}`;
    }
})


