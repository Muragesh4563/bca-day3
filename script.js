function showAlert(){
    alert('Hello! the button is clicked,this JS class')
}
function changeText(){
    document.getElementById('text').innerHTML = "Text Changed";
}
function handleClick() {
    document.getElementById('clickMessage' ).innerHTML='Button Clicked!';
}
function validateForm() {
    let name = document.getElementById('name').Value;
    if(name == '') {
        alert('Please enter your name.');
        return false;
    }
    return true;
}
function checkNumber() {
    let num = parseInt(document.getElementById('numberInput').value);
    let result = num > 10 ? 'Greater than 10': '10 or less';
    document.getElementById('numberResult').innerHTML = result;
}
function CheckAge() {
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18){
        document.getElementById('ageResult').innerHTML = 'you are an adult';
    } else {
        document.getElementById('ageResult').innerHTML = 'You are a minor';
    }
}
function displayArrayItem(){
    let items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result;
}