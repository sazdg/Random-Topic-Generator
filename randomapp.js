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

			
			//local storage - session/cookies
			var a = localStorage.setItem("sub1", "Subject 1");
			var b = localStorage.setItem("sub2", "Subject 2");
			var c = localStorage.setItem("sub3", "Subject 3");
			var d = localStorage.setItem("sub4", "Subject 4");
			var e = localStorage.setItem("sub5", "Subject 5");
			//TO DO: fare apparire i risultati registrati nella sessione quando si chiude e si riapre la finestra

			$scope.sub = ["Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"];
			//subjects locked, saved
			$scope.save = ["", "", "", "", ""];


			$scope.random = function () {
				for (let i = 0; i < ($scope.selected); i++) {
					if ($scope.lock[i]) {
						//if true, display a new subject
						$scope.sub[i] = response.data[Math.floor(Math.random() * ($scope.len))]; 
						localStorage.setItem("sub" + (i + 1), $scope.sub[i]);
						//controllo
						console.log("session: " + (i + 1) + " " + localStorage.getItem("sub" + (i + 1)));

					} else {
						//save result and skip
						$scope.save[i] = $scope.sub[i];
						localStorage.setItem("sub" + (i + 1), $scope.sub[i]);
					}
				}
			};

		})
		.catch(function () {
			console.log("error");
		});


	$scope.reset = function () {
		window.location.reload();
		window.localStorage.clear();
	};

});