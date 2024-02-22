function getValue (ID) {
    const value = document.getElementById(ID);
    const valueText = value.innerText;
    const valueNumber = parseInt(valueText);
    return valueNumber;
}
function setValue(ID, val) {
    const value = document.getElementById(ID);
    value.innerText = val;
}
function setBackGround(ID) {
    document.getElementById(ID).classList.add("addBg")
}

// function getValue (ID) {
//     const text = document.getElementById(ID).innerText;
//     return text;
// }