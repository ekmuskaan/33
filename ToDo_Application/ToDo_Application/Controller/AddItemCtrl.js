app.controller('ItemCtrl', function ($scope, AddItemFactory, $routeParams, $rootScope) {


    $scope.saveItem = function () {
        debugger;

        AddItemFactory.saveItem($scope.Item).success(function (data) {
            if (data.d == true) {
                $rootScope.showMessage = true;
                $rootScope.message = "Item saved successfully";
            }
            else {
                $rootScope.showMessage = true;
                $rootScope.message = "Item not saved,Please contact admin";
            }
            //            $scope.success = true;
            //            localStorage.setItem('Itemsinls', $scope.ItemsinDb);
            //            window.location = "http://localhost:19391/Views/StudentRegistrationDetails.aspx#/List";
        });
    };

});