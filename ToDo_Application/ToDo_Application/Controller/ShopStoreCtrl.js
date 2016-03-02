app.controller('ShopStoreCtrl', function ($scope, AddItemFactory, $routeParams, $rootScope) {


    $scope.getProductData = function () {
        debugger;
        AddItemFactory.getAllProducts().success(function (data) {
            $scope.IteminDb = JSON.parse(data.d);
            //$scope.sortOrder = false;
            $scope.success = true;
        })
    };

    //    $scope.getTotalCount = function () {
    //        debugger;
    //        AddItemFactory.getTotalCount().success(function (data) {
    //            $scope.IteminCartDb = JSON.parse(data.d);
    //            //$scope.IteminCartDb.
    //            //$scope.sortOrder = false;
    //            $scope.success = true;
    //        })
    //    };


    $scope.addToCart = function (Item) {

        AddItemFactory.addToCart(Item).success(function (data) {

            if (data.d == true) {
                $scope.showMessage = true;
                //                $scope.message = "Student data Deleted Successfully";
                //                $scope.getStudentData();
            }
            else {
                $scope.showMessage = true;
                $scope.message = "Student data not deleted Successfully";
            }
        })
    };


    $scope.saveToCartLocal = function (Item) {

        var myCartList = []; //load existing array at init        
        var key = 'myCart';

        if (localStorage.getItem("myCart") != null) {
            myCartList = JSON.parse(localStorage.getItem("myCart"));
        }
        myCartList.push(Item);
        localStorage.setItem(key, JSON.stringify(myCartList));
        $scope.getCountFromLocal();
        //        a.push(JSON.parse(localStorage.getItem("Item")));
        //        localStorage.setItem(key, JSON.stringify(a));
    };


    $scope.getFromLocal = function () {
        if (typeof (localStorage) != 'undefined') {

            $scope.Item = JSON.parse(localStorage.getItem("myCart"));
            $scope.Item.length;
            console.log($scope.Item.length);
        }
    };

    $scope.getCountFromLocal = function () {
        if (typeof (localStorage) != 'undefined') {


            $scope.Item = JSON.parse(localStorage.getItem("myCart"));
            if ($scope.Item != null) {
                $scope.CartCount = $scope.Item.length;
            }
            else {
                $scope.CartCount = 0;
            }
            //            console.log($scope.Item.length);
        }
    };




    $scope.getProductData();
    $scope.getCountFromLocal();

});