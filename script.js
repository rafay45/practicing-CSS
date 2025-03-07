
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

let year = new Date().getFullYear();
document.getElementById("copyYear").textContent = year;


let quesOne = document.getElementById('quesOne');
let innerPara = quesOne.childNodes[1]
let getOne = document.getElementById('yes');
getOne.addEventListener('click', function () {
    let oneChecked = document.getElementById('yes').checked;
   if(oneChecked === true){
    innerPara.innerText = `Hayeee I Love You Too🙈`
   }
})
let getTwo = document.getElementById('no');
getTwo.addEventListener('click', function () {
    let twoChecked = document.getElementById('no').checked;
   if(twoChecked === true){
    innerPara.innerText = `Jaan🥺`
   }
})

let quesTwo= document.getElementById('quesTwo');
let innerParaTwo = quesTwo.childNodes[1]
let getHus = document.getElementById('hus');
getHus.addEventListener('click', function () {
    let husChecked = document.getElementById('hus').checked;
   if(husChecked === true){
    innerParaTwo.innerText = `Yes, I am Your Husband🥳`
   }
})
let getMiya = document.getElementById('miya');
getMiya.addEventListener('click', function () {
    let miyaChecked = document.getElementById('miya').checked;
   if(miyaChecked === true){
    innerParaTwo.innerText = `H00ooo😱`
   }
})

let quesThree = document.getElementById('quesThree');
let innerParaThree = quesThree.childNodes[1]
let getpook = document.getElementById('pook');
getpook.addEventListener('click', function () {
    let pookChecked = document.getElementById('pook').checked;
   if(pookChecked === true){
    innerParaThree.innerText = `hehehehehe🤭🙈`
   }
})
let getpookno = document.getElementById('pookno');
getpookno.addEventListener('click', function () {
    let pooknoChecked = document.getElementById('pookno').checked;
   if(pooknoChecked === true){
    innerParaThree.innerText = `Aennnnn I am your Pookie😭`
   }
})

let quesFour = document.getElementById('quesFour');
let innerParaFour = quesFour.childNodes[1]
let getTholu = document.getElementById('small');
getTholu.addEventListener('click', function () {
    let smallChecked = document.getElementById('small').checked;
   if(smallChecked === true){
    innerParaFour.innerText = `Nai jii🥺`
   }
})
let getUnlimited = document.getElementById('unlimited');
getUnlimited.addEventListener('click', function () {
    let unlimitedChecked = document.getElementById('unlimited').checked;
   if(unlimitedChecked === true){
    innerParaFour.innerText = `Ufffff🙈🥳🥳`
   }
})
