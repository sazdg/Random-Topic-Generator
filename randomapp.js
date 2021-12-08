var app = angular.module("randomApp", ["ngAnimate"]);

app.controller("ctrl", function ($scope, $http) {

	$scope.selected = "1";
	$scope.topics = [true, false, false, false, false];

	$scope.choose = function () {
		// toggle display topics
		for (let i = 0; i < ($scope.selected); i++) {
			if (!$scope.topics[i])
				$scope.topics[i] = true
		}
		//toggle hide topics
		for (let i = ($scope.selected); i < $scope.topics.length; i++) {
			if ($scope.topics[i])
				$scope.topics[i] = false
		}
	};

	//lock icon toggle
	$scope.open = ["747315.png", "747315.png", "747315.png", "747315.png", "747315.png"];
	$scope.lock = [true, true, true, true, true];

	//toggle 
	$scope.locker = function (number) {
		if ($scope.lock[number]) {//if click, lock the result
			$scope.lock[number] = false;
			$scope.open[number] = "747305.png";
			//console.log($scope.lock[number]);
		} else {
			$scope.lock[number] = true;
			$scope.open[number] = "747315.png";
		}
	};

	//http call to subjects json file
	$http.get("subject.json")
		.then(function (response) {

			$scope.len = response.data.length;
			//console.log($scope.len);

			//random results FUNCTION
			//$scope.numero = Math.floor(Math.random() * ($scope.len + 1));

			$scope.sub = ["subject 1", "subject 2", "subject 3", "subject 4", "subject 5"];
			$scope.save = ["", "", "", "", ""];

			$scope.random = function () {
				for (let i = 0; i < ($scope.selected); i++) {
					if ($scope.lock[i]) {
						//if true, display a new subject
						$scope.sub[i] = response.data[Math.floor(Math.random() * ($scope.len))];
					} else {
						//save result and skip
						$scope.save[i] = $scope.sub[i];
					}
				}
			};

		})
		.catch(function () {
			console.log("error");
		});


	$scope.reset = function () {
		window.location.reload();
	};
});