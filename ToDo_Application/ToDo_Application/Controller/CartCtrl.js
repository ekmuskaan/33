app.controller('CartCtrl', function ($scope, AddItemFactory, $routeParams, $rootScope) {

    //    $scope.getFromLocal = function () {
    //        debugger;
    //        if (typeof (localStorage) != 'undefined') {

    //            $scope.Item = JSON.parse(localStorage.getItem("myCart"));
    //            $scope.Item.length;
    //            $scope.CartCount = $scope.Item.length;
    //            if ($scope.CartCount < 1) {
    //                $scope.ShowMe = false;
    //            }
    //            else {
    //                $scope.ShowMe = true;
    //            }

    //        }
    //    };

    $scope.getFromLocal = function () {

        if (typeof (localStorage) != 'undefined') {

            $scope.Item = JSON.parse(localStorage.getItem("myCart"));
            $scope.Item.length;
            console.log($scope.Item.length);

            $scope.Order = {};
            $scope.Order.orderId = 1;
        }
    };

    $scope.ItemQuantity = function (Item, ItemId, Quan) {
        debugger;
        //        $scope.cost = Item.Iprice * Quan

        //        for (var ItemId in Item) {
        //            if (Item.ItemId = ItemId) {
        var val = Item.Iprice;
        $scope.Cost = val * Quan;

        //            }
        //        }


        //        for (var i = 0, len = Item.length; i < len; i++) {
        //            var key = Item.key(i);
        //            var value = Item[key];
        //            if (key.equals(Iprice))
        //                console.log(key + " => " + value);
        //        }


    };

    $scope.getTotal = function () {
        //debugger;
        for (var i = 0, len = Item.length; i < len; i++) {
            $scope.Order.PayAmt += TotalAmt * (quan); 
        }

    };


   //    $scope.getTotal();

    $scope.quan = 1;

    $scope.getFromLocal();


});