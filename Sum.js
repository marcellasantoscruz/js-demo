//Functional programming example
function getNumber(inputID){
  const value = document.getElementById(inputID).value;
  return parseInt(value); 
}
function addNumbers(a, b) {
  return a + b;
}
function displaySum(value){
  document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('func-btn').onclick = function handler() {
  const res = addNumbers(getNumber('input-n1'), getNumber('input-n2'));
  displaySum(res);
};
//Object oriented programming example
class inputField {
  constructor(id) {
    this.id = id
  }
  getNumber() {
    const value = document.getElementById(this.id).value
    return parseInt(value)
  }
}
class Form {
  static outputField = document.getElementById('oo-sum-result')
  static addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
  static displaySum(value) {
    this.outputField.textContent = value
  }
}
const firstInput = new inputField('input-n1')
const secondInput = new inputField('input-n2')
document.getElementById('oo-btn').onclick = function handler() {
  const res = Form.addNumbers(firstInput.getNumber(), secondInput.getNumber())
  Form.displaySum(res)
}