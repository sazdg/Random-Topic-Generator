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
	//from pinterest
	"Cigarette", "Smoking", "Ramen", "Pizza", "Pasta", "Coffee", "Fire", "People", "Chairs", "Planets", "Space", "Solar system", "Pattern", "Cup of tea", "Room",
	"Eyes", "Lips", "Hands", "House Plant", "Winter", "Summer", "Spring", "Autumn", "Skull", "Lamp", "Face", "Mix Tape", "Gun", "Books", "Dance", "Hotel", "Palm Leaf", 
	"Jungle", "Sunbathing", "Dudes", "Mermaid", "Fairy", "Teapot", "Labyrinth", "Traffic", "Girl", "Boy", "Cherries", "Waffles", "Apple", "Kiwis","Crowd"];



	$scope.random = function(){

	var number = Math.floor(Math.random() * (204 - 0) + 1);
	if($scope.uno == true){
		$scope.top1 = $scope.subject[number];
	} if($scope.uno == true && $scope.due == true){
		$scope.top1 = $scope.subject[number];
		$scope.top2 = $scope.subject[number];
	} if($scope.uno == true && $scope.due == true && $scope.tre == true){
		$scope.top1 = $scope.subject[number];
		$scope.top2 = $scope.subject[number];
		$scope.top3 = $scope.subject[number];
	} if($scope.uno == true && $scope.due == true && $scope.tre == true && $scope.quattro == true){
		$scope.top1 = $scope.subject[number];
		$scope.top2 = $scope.subject[number];
		$scope.top3 = $scope.subject[number];
		$scope.top4 = $scope.subject[number];
	} if($scope.uno == true && $scope.due == true && $scope.tre == true && $scope.quattro == true && $scope.cinque == true){
		$scope.top1 = $scope.subject[number];
		$scope.top2 = $scope.subject[number];
		$scope.top3 = $scope.subject[number];
		$scope.top4 = $scope.subject[number];
		$scope.top5 = $scope.subject[number];
	};
	};

	$scope.color = ['#15202B'];
	$scope.style = function(value) {
		return { "background-color": value};

	};

});