
function add(event) {
   let getValue = document.getElementById('input').value; 
   event.preventDefault();
   if(getValue === "951235"){
     window.location.href = "home.html"
   }
   else{
    document.getElementById('alert').style.display = "block"
   document.getElementById('input').value = ""
   }  
}

function one(){
  let getOne = document.getElementById('card-one');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-one.jpg" alt="">`
}
function two(){
  let getOne = document.getElementById('card-two');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-two.jpg" alt="">`
}
function three(){
  let getOne = document.getElementById('card-three');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-three.jpg" alt="">`
}
function four(){
  let getOne = document.getElementById('card-four');
  getOne.innerHTML = ` <img data-aos="zoom-in"  src="assets/gift-four.jpg" alt="">`
}
