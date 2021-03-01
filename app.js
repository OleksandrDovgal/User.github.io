// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add_to_cart");
console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click",function() {
		// let prevProductsCount = +productsCountEl.textContent;
		// productsCountEl.textContent = prevProductsCount+1;
		//скорочений запис верхніх 2х рядків коду
		productsCountEl.textContent = +productsCountEl.textContent + 1;
	})
}

// change like button state

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

for( let i=0; i<likeBtns.length; i++) {
	likeBtns[i].addEventListener("click",function() {
	this.classList.toggle("liked")
}) 
}

// modal 

let moreDetailsBtns = document.querySelectorAll(".one");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn")

moreDetailsBtns.forEach(btn => (
	btn.addEventListener("click", openModal)
))

closeBtn.addEventListener("click", closeModal)

function openModal() {
	modal.classList.add("show");
	modal.classList.remove("hide");
}

function closeModal() {
	modal.classList.add("hide");
	modal.classList.remove("show");
}

modal.addEventListener("click", function(e) {
	if(e.target===modal) {
		closeModal();
	}
})

function showModalByScroll() {
	if(window.pageYOffset > document.body.scrollHeight/2) {
		openModal()
		window.removeEventListener("scroll",showModalByScroll)
	}
}

window.addEventListener("scroll",showModalByScroll)




// change product quantity
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let productsQuantity = document.querySelectorAll(".product-quantity input");

for( let i = 0; i<productsQuantity.length; i++) {
	let currentCount = +productsQuantity[i].value;

	toggleButtonState(currentCount, decrementBtns[i],incrementBtns[i])
}

function toggleButtonState(count, decrementBtns, incrementBtns) {
	decrementBtns.disabled = count <= 1;
	incrementBtns.disabled = count >= 10;
}

for(let i =0; i < incrementBtns.length; i++) {
	incrementBtns[i].addEventListener("click",function() {
		let currentCount = +productsQuantity[i].value;
		let nextCount = currentCount + 1;
		productsQuantity[i].value = nextCount;
	
		toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);
	})
}


for( let i =0; i < decrementBtns.length; i++) {
	decrementBtns[i].addEventListener("click",function() {
		let currentCount = +productsQuantity[i].value;
		let nextCount = currentCount - 1;
		productsQuantity[i].value = nextCount;
	
		toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);
	})
}





/// add slider slick

$(".slider-block").slick({

});