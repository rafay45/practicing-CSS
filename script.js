
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
  if (oneChecked === true) {
    innerPara.innerText = `Hayeee I Love You Too`
  }
})
let getTwo = document.getElementById('no');
getTwo.addEventListener('click', function () {
  let twoChecked = document.getElementById('no').checked;
  if (twoChecked === true) {
    innerPara.innerText = `I know, U Love Me`
  }
})

let quesTwo = document.getElementById('quesTwo');
let innerParaTwo = quesTwo.childNodes[1]
let getHus = document.getElementById('hus');
getHus.addEventListener('click', function () {
  let husChecked = document.getElementById('hus').checked;
  if (husChecked === true) {
    innerParaTwo.innerText = `Yes, I am Your Husband`
  }
})
let getMiya = document.getElementById('miya');
getMiya.addEventListener('click', function () {
  let miyaChecked = document.getElementById('miya').checked;
  if (miyaChecked === true) {
    innerParaTwo.innerText = `H00ooo`
  }
})

let quesThree = document.getElementById('quesThree');
let innerParaThree = quesThree.childNodes[1]
let getpook = document.getElementById('pook');
getpook.addEventListener('click', function () {
  let pookChecked = document.getElementById('pook').checked;
  if (pookChecked === true) {
    innerParaThree.innerText = `hehehehehe`
  }
})
let getpookno = document.getElementById('pookno');
getpookno.addEventListener('click', function () {
  let pooknoChecked = document.getElementById('pookno').checked;
  if (pooknoChecked === true) {
    innerParaThree.innerText = `Aennnnn I am your Pookie`
  }
})

let quesFour = document.getElementById('quesFour');
let innerParaFour = quesFour.childNodes[1]
let getTholu = document.getElementById('small');
getTholu.addEventListener('click', function () {
  let smallChecked = document.getElementById('small').checked;
  if (smallChecked === true) {
    innerParaFour.innerText = `Nai jii`
  }
})
let getUnlimited = document.getElementById('unlimited');
getUnlimited.addEventListener('click', function () {
  let unlimitedChecked = document.getElementById('unlimited').checked;
  if (unlimitedChecked === true) {
    innerParaFour.innerText = `I know`
  }
})

let quesFive = document.getElementById('quesFive');
let innerParaFive = quesFive.childNodes[1]
let getInnu = document.getElementById('innu');
getInnu.addEventListener('click', function () {
  let innuChecked = document.getElementById('innu').checked;
  if (innuChecked === true) {
    innerParaFive.innerText = `Okay`
  }
})
let getBohot = document.getElementById('bohot');
getBohot.addEventListener('click', function () {
  let BohotChecked = document.getElementById('bohot').checked;
  if (BohotChecked === true) {
    innerParaFive.innerText = `Thankuu Begum`
  }
})

let quesSix = document.getElementById('quesSix');
let innerParaSix = quesSix.childNodes[1]
let getMine = document.getElementById('mine');
getMine.addEventListener('click', function () {
  let mineChecked = document.getElementById('mine').checked;
  if (mineChecked === true) {
    innerParaSix.innerText = `No`
  }
})
let getEvery = document.getElementById('every');
getEvery.addEventListener('click', function () {
  let everyChecked = document.getElementById('every').checked;
  if (everyChecked === true) {
    innerParaSix.innerText = `Yes, Everything`
  }
})

let quesTen = document.getElementById('quesTen');
let innerParaTen = quesTen.childNodes[1]
let getTm = document.getElementById('tm');
getTm.addEventListener('click', function () {
  let TmChecked = document.getElementById('tm').checked;
  if (TmChecked === true) {
    innerParaTen.innerText = `Off course`
  }
})
let getSomeone = document.getElementById('Someone');
getSomeone.addEventListener('click', function () {
  let someonehecked = document.getElementById('Someone').checked;
  if (someonehecked === true) {
    innerParaTen.innerText = `Not really`
  }
})

let quesSeven = document.getElementById('quesSeven');
let innerParaSeven = quesSeven.childNodes[1]
let getcute = document.getElementById('cute');
getcute.addEventListener('click', function () {
  let cuteChecked = document.getElementById('cute').checked;
  if (cuteChecked === true) {
    innerParaSeven.innerText = `Yes, You're my cutiee`
  }
})
let getNot = document.getElementById('not');
getNot.addEventListener('click', function () {
  let Nothecked = document.getElementById('not').checked;
  if (Nothecked === true) {
    innerParaSeven.innerText = `Hmmm, No`
  }
})

let quesEight = document.getElementById('quesEight');
let innerParaEight = quesEight.childNodes[1]
let getMiss = document.getElementById('miss');
getMiss.addEventListener('click', function () {
  let MissChecked = document.getElementById('miss').checked;
  if (MissChecked === true) {
    innerParaEight.innerText = `I Miss you too Zindagi`
  }
})
let getNomiss = document.getElementById('nomiss');
getNomiss.addEventListener('click', function () {
  let nomisshecked = document.getElementById('nomiss').checked;
  if (nomisshecked === true) {
    innerParaEight.innerText = `But I miss you`
  }
})

let quesNine = document.getElementById('quesNine');
let innerParaNine = quesNine.childNodes[1]
let getForever = document.getElementById('forever');
getForever.addEventListener('click', function () {
  let ForeverChecked = document.getElementById('forever').checked;
  if (ForeverChecked === true) {
    innerParaNine.innerText = `Inshallah`
  }
})
let getTime = document.getElementById('time');
getTime.addEventListener('click', function () {
  let timehecked = document.getElementById('time').checked;
  if (timehecked === true) {
    innerParaNine.innerText = `Inshallah Jaan`
  }
})
