home.addEventListener("mouseover", function(){
  home.style.backgroundColor="white";
},true);

about.addEventListener("mouseover", function(){
  about.style.backgroundColor="white";
},true);

cows.addEventListener("mouseover", function(){
  cows.style.backgroundColor="white";
},true);

coffee.addEventListener("mouseover", function(){
  coffee.style.backgroundColor="white";
},true);

contact.addEventListener("mouseover", function(){
  contact.style.backgroundColor="white";
},true);

//

home.addEventListener("mouseleave",function(){
  home.style.backgroundColor="#f5bcf5";
}, true);

about.addEventListener("mouseleave",function(){
  about.style.backgroundColor="#f5bcf5";
}, true);

cows.addEventListener("mouseleave",function(){
  cows.style.backgroundColor="#f5bcf5";
}, true);

coffee.addEventListener("mouseleave",function(){coffee.style.backgroundColor="#f5bcf5";
}, true);

contact.addEventListener("mouseleave",function(){
  contact.style.backgroundColor="#f5bcf5";
}, true);

//

let openCowPoll = function () {
  cowPoll.classList.toggle("hidden");
}

home.addEventListener("click", openCowPoll);

let openCowsModal = function () {
  cowsModal.classList.toggle("hidden");
};

cows.addEventListener("click", openCowsModal);

let openCoffeeModal = function () {
  coffeeModal.classList.toggle("hidden");
}

coffee.addEventListener("click",openCoffeeModal);

let openAboutModal = function () {
  console.log('in Function')
  aboutModal.classList.toggle("hidden");
};

about.addEventListener("click", openAboutModal);

let openContactUs = function () {
  contactForm.classList.toggle("hidden");
}

contact.addEventListener("click",openContactUs);

//

//if yes is submitted, return "why don't you love them more?"


//if super ues is submitted, return "We do too!"

aLittle.addEventListener("click",function(){
cowPoll.style.backgroundColor="#FD1005";
}, true);

abs.addEventListener("click",function(){
 cowPoll.style.backgroundColor="#10FD05"
});

submit.addEventListener("click",function(){
  cowPoll.style.backgroundColor="#A1F7BD"
});

//

/*let closeModal = function () {
  x.classList.toggle("hidden");
}*/

("click",function(){
  
})