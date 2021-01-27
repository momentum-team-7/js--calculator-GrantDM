// let buttons = document.querySelectorAll(".button")
// for (let key of buttons) {
//     key.addEventListener('click',event => {console.log(event.target)})
// }
function dis(val) {
    document.getElementById('edu').value+=val
}
function solve() {
    let x = document.getElementById('edu').value
    let y = eval(x)
    document.getElementById('edu').value = y
}
function clr() {
document.getElementById("edu").value = ""
}
