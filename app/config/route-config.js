angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('/index', {
            url:'/index',
            template: '<main></main>'
        });
    $urlRouterProvider.otherwise('/index');
}