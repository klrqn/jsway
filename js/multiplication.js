// get number from user and validate on click
document.querySelector("#submit").addEventListener('click', multiplicationTable)


function multiplicationTable(event) {
    event.preventDefault();

    const num = document.querySelector("#input").value;
    const result = document.querySelector("#display");

    for (let i=1; i<=num; i++){
        result.innerHTML += `<br>`
        for (let j=1; j<=num; j++){
            console.log(`${i}*${j} = ${i*j}`);
            result.innerHTML += ` ${i}*${j} = ${i*j}  /  `
        }
    }
}
