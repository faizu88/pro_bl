routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
    $stateProvider
        .state({
            name: 'moduleA',
            url: '/moduleA',
            template: require('./moduleA.tpl.html'),
            controller: 'ModuleAController as modACtrlAs',
            resolve: {
                shims: ["$q", "$ocLazyLoad", function($q, $ocLazyLoad) {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./moduleA.controller');
                            $ocLazyLoad.load({ name: module.name });
                            resolve(module.controller);
                        });
                    });
                }]
            }
        });
}
