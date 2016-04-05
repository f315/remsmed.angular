angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('index', {
            url:'/index',
            template: '<main></main>'
        })
            .state('profile', {
                parent:'index',
                url: '/:params',
                template: '<profile></profile>'
});
    $urlRouterProvider.otherwise('/index');
}