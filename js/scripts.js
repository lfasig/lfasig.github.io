

function add(x,y){
	console.log(x+y);
}

console.log("Hello World");


//Array
var classmates = ["Matt", "Tara", "Danielle", "Evan"];

var typesOfSoda = new Array();
typesOfSoda[0] = "Red Cream Soda";
typesOfSoda[1] = "IBC Rootbeer";
typesOfSoda[2] = "Ginger Ale";

console.log(classmates);
console.log(typesOfSoda);


var arrayLength = classmates.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(classmates[i]);
}

var mixedTypeArray = ["Elephant", 100, (5>2)];
var sameType = ["Elephant", "Giraffe", "Duck"];


//BRONZE: See if you can turn any of those loops above into functions that can be called. Call them in the console.
function sodas(){
	for (var i = 0; i < typesOfSoda.length; i++){
		console.log(typesOfSoda[i]);
	}
}
sodas();

//SILVER:

//*var randomNumArray[1, 2, 6, 2, 7, 3, 1];
//var arrayMax = 10;
//var limit = arrayMax + 1;
//*function numCheck(num){
	//for (var i = 0; i < arrayMax; i++) {
  	//console.log(randomNumArray[]);
	//}
//*}
//*numCheck(3);
//*for (var i = 0; i < randomNumArray.length; i++){
//*var unique = randomNumArray.unique();
//*console.log(unique);
//*}



/***********************Do not go above this line right now*********************************************/

//Object Liberal
var friend = {
	//Properties
	fullname		: "",
	age				: 0,
	married			: true,
	hasJob			: true,
	closeLikeABro	: true,
	yearsKnown		: 0,
	siblings		: true,
	pets			: "",

	//Method
	printVocation 	: function(){
		return this.vocation;
	}, 

	introduceToBroInLaw : function(){
		if (this.yearsKnown >= 5 && this.closeLikeABro == true && this.married == false){
			return "I want you to meet him.";
		} else{
			return "Have you tried Tinder."
		}
	},

	bestFriend		: function(){
		if (this.yearsKnown >= 5 && this.closeLikeABro == true){
			return "Bestfriend";
		} else{
			return "Not bestfriend"
		}
	}
}

var kristenGorski = Object.create(friend);
kristenGorski.fullname = "Kristen Gorski";
kristenGorski.age = 20;
kristenGorski.married = false;
kristenGorski.hasJob = true;
kristenGorski.yearsKnown = 11;
kristenGorski.siblings = true;
kristenGorski.pets = "2 cats & 3 dogs";
kristenGorski.closeLikeABro = true;

var allisonBennett = Object.create(friend);
allisonBennett.fullname = "Allison Bennett";
allisonBennett.age = 19;
allisonBennett.married = false;
allisonBennett.hasJob = true;
allisonBennett.yearsKnown = 5;
allisonBennett.siblings = true;
allisonBennett.pets = "Dog";
allisonBennett.closeLikeABro = true;

var ashleyOrmsby = Object.create(friend);
ashleyOrmsby.fullname = "Ashley Ormsby";
ashleyOrmsby.age = 19;
ashleyOrmsby.married = false;
ashleyOrmsby.hasJob = false;
ashleyOrmsby.yearsKnown = 1;
ashleyOrmsby.siblings = false;
ashleyOrmsby.pets = "cat & dog";
ashleyOrmsby.closeLikeABro = true;

var natalieWeber = Object.create(friend);
natalieWeber.fullname = "Natalie Weber";
natalieWeber.age = 20;
natalieWeber.married = false;
natalieWeber.hasJob = true;
natalieWeber.yearsKnown = 16;
natalieWeber.siblings = false;
natalieWeber.pets = "Cat";
natalieWeber.closeLikeABro = false;














