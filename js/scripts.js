function Phone(brand, model, price, color){
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", model " + this.model + ". Color is " + this.color +" and the price is " + this.price + ".");
}

var samsung_galaxys6 = new Phone("Samsung", "Galaxy S6", "$181.99" , "Black Sapphire");
var iphone6s = new Phone("Apple", "iPhone 6S", "$199.99", "Space Gray");
var oneplus_one = new Phone("OnePlus", "One", "$224.99", "Sandstone Black");

samsung_galaxys6.printInfo();
iphone6s.printInfo();
oneplus_one.printInfo();