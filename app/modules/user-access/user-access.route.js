import "../../styles/login.css";

routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/',
            template: require('./user-access.tpl.html'),
            controller: 'UserAccessController as userAccessCtrlAs',
            resolve: {
                shims: ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    return $q((resolve) => {
                        require.ensure([], (require) => {
                            // load whole module
                            let module = require('./user-access.controller');
                            $ocLazyLoad.load({ name: module.name });
                            resolve(module.controller);
                        },"user-access");
                    });
                }]
            }
        });
}
