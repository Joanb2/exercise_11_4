function Phone(brand, model, price, color){
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model " + this.model + ". Color is " + this.color +" and the price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", "$181.99" , "Black Sapphire");
var iPhone6S = new Phone("Apple", "iPhone 6S", "$199.99", "Space Gray");
var OnePlusOne = new Phone("OnePlus", "One", "$224.99", "Sandstone Black");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();