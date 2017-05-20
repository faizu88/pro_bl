routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
    $stateProvider
        .state({
            name: 'moduleB',
            url: '/moduleB',
            template: require('./moduleB.tpl.html'),
            controller: 'ModuleBController as modBCtrlAs',
            resolve: {
                shims: ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./moduleB.controller');
                            $ocLazyLoad.load({ name: module.name });
                            resolve(module.controller);
                        });
                    });
                }]
            }
        });
}
