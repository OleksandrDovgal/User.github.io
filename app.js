// add to cart
let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".add_to_cart");

console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click",function() {
		// let prevProductsCount = +productsCountEl.textContent;
		// productsCountEl.textContent = prevProductsCount+1;
		productsCountEl.textContent = +productsCountEl.textContent + 1;
		//скорочений запис верхніх 2х рядків коду
	})
}

// let addToCartButtons = document.querySelectorAll(".btn two");
// console.log(addToCartButtons);