// a. object literal

// var my_videogame = {
// 	brand: "Playstation"
// 	controllers: 2
// 	color: "black"
// }

// b. constructor function

// function videogame(brand, controllers, color){
// 	this.brand = brand;
// 	this.controllers = controllers;
// 	this.color = color;
// }
// instantiating a new instance of VG(videogame)
// var my_videogame = new VG("Playstation", 2, black);

// c. accessing object attributes and methods

// var my_videogame = {
// 	brand: "Playstation",
// 	"has-specialedition": false
// }
//dot notation to return attribute
// my_videogame.brand

//input function into object
// var my_car = {   
// 	brand: "Prius",   
// 	friendly_brand: function(){     
// 		return "Your car's brand is " + this.brand;   
// 	} 
// }

// d. prototypical objects

// my_videogame = new VG("playstation", 2);
//Add a method or attribute to the parent object //by using the object's prototype

// VG.prototype.friendly_brand = function(){   return "This game's brand is " + this.brand; }
//Now you can use that method in all instances of the object 

// my_videogame.friendly_brand() > "This game's brand is Toyota"

// 2.

var result = "";
var my_Car = {brand: "Prius", wheels: 3, color: "black" }
var i
for (var i in my_Car) {
  result += my_Car[i] + " ";

// 3.

function Multiplier(num) {
    this.lastValue = 1;
    this.num = num;
    

    this.getCurrentValue = function() {
        console.log (this.lastValue)
    };

    this.multiply = function() {
    	this.lastValue = this.lastValue * this.num;
    	console.log (this.lastValue)
    }
}

var myMultiplier = new Multiplier(4);
myMultiplier.multiply();
myMultiplier.multiply();
myMultiplier.getCurrentValue();
myMultiplier.getCurrentValue();

// 4.

function Photo(filename, location) {
    this.filename = filename;
    this.location = location; 
}

function Album() {
	this.photos = [];
	
	this.newPhoto = function(picname) {
		this.photos.push(picname)
	}
	this.listPhoto = function() {
		console.log (this.photos) 
	}
	this.accessPhoto = function(num) {
		this.photos[num -1]
	}
}

var Chris = new Photo("green", "location")

// this was what was written in console to get the photoalbum to work -
//   Chris
// => { filename: 'green', location: 'location' }
//    christmas = new Album
// => { photos: [], newPhoto: [Function], listPhoto: [Function], accessPhoto: [Function] }
//    christmas = new Album()
// => { photos: [], newPhoto: [Function], listPhoto: [Function], accessPhoto: [Function] }
//    christmas.newPhoto(Chris)
//    christmas.listPhoto
// => [Function]
//    christmas.listPhoto()
// [ { filename: 'green', location: 'location' } ]

// 5.

var Person = function(fname, lname, email) {
	this.fname = fname;
	this.lname = lname;
	this.email = email;
}

function Student() {
	this.backpack = true
	this.books = true
	Person.apply(this, arguments);
}

Student.prototype = new Person();

function Teacher() {
	this.redpen = true
	this.chalk = true
	Person.apply(this, arguments);
}

Student.prototype = new Person();
Teacher.prototype = new Person();

var teacher = new Teacher("Annie", "Smith", "1@1.com")
var student = new Student("Annie", "Smith", "1@1.com")

function School() {
	this.save = [];
	this.addpeople = function(input){
	this.save.push(input)
	}
}

var newSchool = new School()
var Teacher = new Teacher()

// this was what was written in console to get the school to work -
// => { fname: undefined, lname: undefined, email: undefined }
//    newSchool
// => { save: [], addpeople: [Function] }
//    newSchool.addpeople(teacher)
//    newSchool
// => { save: [ { redpen: true, chalk: true, fname: 'Annie', lname: 'Smith', email: '1@1.com' } ],
//   addpeople: [Function] }
