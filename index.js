// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>My App</h1>`;

//Functional programming example
function getNumber(INPUTid){
    const value = document.getElementById(inputID).value;
    return pasrInt(value); 
}
function getFunctionFactorial(n){
    if (n == 1) return 1;
    else return n = getFunctionFactorial(n - 1);
}
function displaySum(value){
    document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('function-btn').onclick = function handler() {
    const res = getFunctionFactorial(getNumber('input-n'));
    displaySum(res);
};