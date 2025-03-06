
function add(event) {
  let getValue = document.getElementById('input').value;
  event.preventDefault();
  if (getValue === "951235") {
    window.location.href = "home.html"
  }
  else {
    document.getElementById('alert').style.display = "block"
    document.getElementById('input').value = ""
  }
}

function one() {
  let getOne = document.getElementById('card-one');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-one.jpg" alt="">`
}
function two() {
  let getOne = document.getElementById('card-two');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-two.jpg" alt="">`
}
function three() {
  let getOne = document.getElementById('card-three');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-three.jpg" alt="">`
}
function four() {
  let getOne = document.getElementById('card-four');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-four.jpg" alt="">`
}
function onebtn() {
  let quesOne = document.getElementById('quesOne')
  if (quesOne.children[1].innerHTML === "Yes") {
    quesOne.innerHTML = `<p>Hayeee I Love You Too🙈</p>`
  }
}
function twobtn() {
  let quesOne = document.getElementById('quesOne')
  if (quesOne.children[2].innerHTML === "No") {
    quesOne.innerHTML = `<p>Jaan☹️</p>`
  }
}
function threebtn() {
  let quesOne = document.getElementById('quesTwo')
  if (quesOne.children[1].innerHTML === "Yes") {
    quesOne.innerHTML = `<p>Yes, I am Your Husband🥳</p>`
  }
}
function fourthbtn() {
  let quesOne = document.getElementById('quesTwo')
  if (quesOne.children[2].innerHTML === "No") {
    quesOne.innerHTML = `<p>Hooo😱</p>`
  }
}
function fivebtn() {
  let quesOne = document.getElementById('quesThree')
  if (quesOne.children[1].innerHTML === "Yes") {
    quesOne.innerHTML = `<p>hehehehehe🤭🙈</p>`
  }
}
function sixbtn() {
  let quesOne = document.getElementById('quesThree')
  if (quesOne.children[2].innerHTML === "No") {
    quesOne.innerHTML = `<p>Aennnnn I am your Pookie😭</p>`
  }
}
function sixbtn() {
  let quesOne = document.getElementById('quesThree')
  if (quesOne.children[2].innerHTML === "No") {
    quesOne.innerHTML = `<p>Aennnnn I am your Pookie😭</p>`
  }
}
