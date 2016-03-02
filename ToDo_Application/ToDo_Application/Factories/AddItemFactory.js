app.factory('AddItemFactory', function ($http) {

    var service = {}

    service.saveItem = function (Item) {

        return $http({
            url: "Index.aspx/saveItem",
            method: "POST",
            data: { ItemObj: angular.toJson(Item) }
        })
    };


    service.getAllProducts = function () {
        return $http({
            url: "Index.aspx/getAllProducts",
            method: "GET",
            data: {},
            headers: { "Content-Type": "application/json" }
        })
    };

//    service.getTotalCount = function () {
//        return $http({
//            url: "Index.aspx/getCartProducts",
//            method: "GET",
//            data: {},
//            headers: { "Content-Type": "application/json" }
//        })
//    };


    service.addToCart = function (Item) {
        return $http({
            url: "Index.aspx/addToCart",
            method: "POST",
            data: { CartItemObj: angular.toJson(Item) }
        })
    };


    return service;

});