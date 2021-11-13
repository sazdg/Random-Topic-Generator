var app = angular.module("randomApp", ["ngAnimate"]);

app.controller("ctrl", function($scope){


	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";

	$scope.selected = "1";
	$scope.uno = true;
	$scope.due = false;
	$scope.tre = false;
	$scope.quattro = false;
	$scope.cinque = false;

	$scope.choose = function(){
		switch ($scope.selected){
			case "2": 
	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";
			$scope.uno = true;
			$scope.due = true;
			$scope.tre = false;
			$scope.quattro = false;
			$scope.cinque = false;
			break;
			case "3": 
	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";
			$scope.uno = true;
			$scope.due = true;
			$scope.tre = true;
			$scope.quattro = false;
			$scope.cinque = false;
			break;
			case "4": 
	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";
			$scope.uno = true;
			$scope.due = true;
			$scope.tre = true;
			$scope.quattro = true;
			$scope.cinque = false;
			break;
			case "5": 
	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";
			$scope.uno = true;
			$scope.due = true;
			$scope.tre = true;
			$scope.quattro = true;
			$scope.cinque = true;
			break;
			default:
	$scope.top1 = "Topic 1";
	$scope.top2 = "Topic 2";
	$scope.top3 = "Topic 3";
	$scope.top4 = "Topic 4";
	$scope.top5 = "Topic 5";
			$scope.uno = true;
			$scope.due = false;
			$scope.tre = false;
			$scope.quattro = false;
			$scope.cinque =false;
		};
	};

	$scope.subject = [ "Cat", "Dog", "Fish", "Snake", "Rabbit", "Shark", "Squirrel", "Dragon", "Dinosaur",
	"Zebra", "Whale", "Tiger", "Lion", "Frog", "Spider", "Tarantula", "Scorpion", "Albatross", "Pigeon", "Duck", "Flamingo", "Butterflies",
	"Goldfish", "Jellyfish", "Koi Fish", "Bee", "Dragonfly", "Camel", "Dolphin", "Giraffe", "Llama", "Panda", "Turtle",
	"Deer", "Monkey", "Owl", 
	"House", "Urban", "City", "Castle", "Cathedrall", "Village", "Car", "Tower", "Bridge", 
	"Paris", "London", "Rome", "Berlin", "New York", "Los Angeles", "Budapest", "Shangai", "Singapore", "Tokyo", "Moscow", "Japan",
	"Forest", "Landscape", "Lake", "Mountain", "Trees", "Flowers", "Mushrooms", "Pond", "Rain", "Sun", "Moon", "Sea", "Clouds", "Snow", "Rainbow", "Lightning", "Tornado",
	"Boat", "Bus", "Train", "Bar", "Reception", "Swimming Pool", "Breakfast", "Dinner", "Lunch", "Wine", "Dessert", 
	"Bathroom", "Kitchen", "Door", "Fireplace", "Roofs", "Stair", "Staircase", "Window", "Bed", "Greenhouse", "Plants",
	"Lamppost", "Sidewalk", "Street", "Thelephone box", "Square", "Bakery", "Bookshop", "Supermarket", "Cinema", "Train Station", 
	"Climbing", "Canoeing", "Fishing", "Golf", "Hunting", "Ice skating", "Sailing", "Skateboarding", "Skiing", "Football", "Chess", "Dama", "Backgammon", "Poker", 
	"King", "Queen", "Jolly", "Cheesboard", "Bishop", "Rook", 
	"Pen", "Cactus", "Daisy", "Orchid", "Primrose", "Sunflower", "Waterlily", "Evergreen", 
	"Circle", "Triangle", "Rectangle", "Pentagon", "Hexagon", "Octagon", "Oval", "Star", "Pyramid", "Cube", 
	"Laptop", "Mobile", "Phone", "PC", "Narrow", "Thin", "Wide", "Light", "Dark", "Open", "Close", "Full", "Empty", "Dead", 
	"Cigarette", "Smoking", "Ramen", "Pizza", "Pasta", "Coffee", "Fire", "People", "Chairs", "Planets", "Space", "Solar system", "Pattern", "Cup of tea", "Room",
	"Eyes", "Lips", "Hands", "Houseplant", "Winter", "Summer", "Spring", "Autumn", "Skull", "Lamp", "Face", "Mix Tape", "Gun", "Books", "Dance", "Hotel", "Palm Leaf", 
	"Jungle", "Sunbathing", "Dudes", "Mermaid", "Fairy", "Teapot", "Labyrinth", "Traffic", "Girl", "Boy", "Cherries", "Waffles", "Apple", "Kiwis","Crowd"];


	$scope.len = $scope.subject.length;
	$scope.numero = Math.floor(Math.random() * ($scope.len + 1));

	$scope.sub = ["subject 1", "subject 2", "subject 3", "subject 4", "subject 5"];

	
	$scope.random = function(){
		for(let i = 0; i < ($scope.selected); i++){
			$scope.sub[i] = $scope.subject[Math.floor(Math.random() * ($scope.len))];
		}

	}

});
