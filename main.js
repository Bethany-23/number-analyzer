
function numberAnalyzer(){
    const input = document.getElementById("numberInput");
    const result = document.getElementById("result");
    const number = parseInt(input.value);

    if(isNaN(number)){
        result.innerText = "please enter a valid number";
        return;
    }

    const isEven = number % 2 === 0 ? "Even" : "Odd";
    const perfectSquare = Number.isInteger(Math.sqrt(number)) ? "perfect square" : "Not a perfect square";
    const primestat = isPrime(number)? "prime" : "Not prime";

    result.innerHTML = `
    Number: ${number}<br>
     ${isEven}<br>
     ${perfectSquare}<br>
     ${primestat}`;
};


function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}