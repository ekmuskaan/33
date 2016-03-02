app.config(function ($routeProvider) {

    $routeProvider
        .when('/Add', {
            templateUrl: 'AddItem.html',
            controller: 'ItemCtrl'

        })

    $routeProvider
        .when('/List', {
            templateUrl: 'ShopStore.html',
            controller: 'ShopStoreCtrl'

        });

        $routeProvider
        .when('/cart', {
            templateUrl: 'MyCart.html',
            controller: 'CartCtrl'

        });
});