app.controller('CalcController', function($scope) {
  //$scope.test = "test!";
  $scope.mealCount = 0;
  $scope.totalTips = 0;
  $scope.averageTip = 0;
    // console.log($scope.totalTips, "totalTips out funct");


  $scope.calculate = function () {
    var mealPrice = $scope.mealPrice;
    var taxRate = $scope.taxRate;
    var tipRate = $scope.tipRate;

    // console.log(mealPrice, "mealPrice", taxRate, "taxRate", tipRate, "tipRate");

    $scope.subTotal = mealPrice + (mealPrice*taxRate)/100;
    $scope.tip = mealPrice*tipRate/100;
    $scope.grandTotal = $scope.subTotal + $scope.tip/100;

    console.log($scope.tip, "scope.tip");


    $scope.mealCount += 1;
    // console.log($scope.mealCount, "mealCount");
    $scope.totalTips += $scope.tip;
    // console.log($scope.totalTips, "totalTipsin funct");
    $scope.averageTip = $scope.totalTips/$scope.mealCount;
    console.log($scope.averageTip, "av tip");


    $scope.mealPrice = "";
    $scope.taxRate = "";
    $scope.tipRate = "";
  };


});


