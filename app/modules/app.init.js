import angular from "angular";
import uirouter from "angular-ui-router";
import ocLazyLoad from "oclazyload";
import moduleARoute from "./moduleA/moduleA.route";
import moduleBRoute from "./moduleB/moduleB.route";
import "../styles/app.css";


/*
let app = () => {
    return {
        template: require('./module/module.tpl.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor($state) {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}
AppCtrl.$inject = ['$state'];
*/


angular.module("ngApp", [uirouter, ocLazyLoad])
    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider",
        function($stateProvider, $locationProvider, $urlRouterProvider) {
            // Removing '!' from the URL
            $locationProvider.hashPrefix('');
            $urlRouterProvider.otherwise('/moduleA');
        }
    ])
    .config(moduleARoute)
    .config(moduleBRoute);


//.directive('app', app)
//.controller('AppCtrl', AppCtrl);

export default "ngApp";
