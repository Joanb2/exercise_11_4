function Item(brand, model) {
	this.brand = brand;
	this.model = model;

	this.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", model " + this.model);
	} 
}

function Phone(brand, model, price, color){

	this.prototype = Object.create(Item.prototype);

	Item.call(this, brand, model);

	this.price = price;
	this.color = color;

	this.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", model " + this.model + ". Color is " + this.color +" and the price is " + this.price + ".");
	}
}

var samsungGalaxys6 = new Phone("Samsung", "Galaxy S6", "$181.99" , "Black Sapphire");
var iphone6s = new Phone("Apple", "iPhone 6S", "$199.99", "Space Gray");
var oneplusOne = new Phone("OnePlus", "One", "$224.99", "Sandstone Black");

samsungGalaxys6.printInfo();
iphone6s.printInfo();
oneplusOne.printInfo();