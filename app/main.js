angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('/index', {
                url:'/index',
                template: '<main></main>'
            });
        $urlRouterProvider.otherwise('/index');
    })
    .component('main', {
        templateUrl: 'app/components/main/main.html'
    })
    .component('header', {
        templateUrl:'app/components/header/header.html'
    })
    .component('topnav', {
        templateUrl:'app/components/topnav/topnav.html'
    })
    .component('wblockTop', {
        templateUrl:'app/components/wblocktop/wblocktop.html',
        bindings:{
            wbclass: '@',
            wbid: '@'
        },
        controller: function(WblockService){
            this.wid = WblockService.WblockService
        }
    })
    .component('wblockBottom', {
        templateUrl:'app/components/wblockbottom/wblockbottom.html',
        bindings:{
            wbclass: '@',
            wbid: '@'
        }
    })
    .component('wcontentPatientInfo', {
        templateUrl:'app/components/wcontentPatientInfo/wcontentPatientInfo.html'
    })
    .component('wblockPatientInfo', {
        templateUrl:'app/components/wblockPatientInfo/wblockPatientInfo.html'
    })
    .service('WblockService', function(){
        this.boxPatientInfo = {
            id: 0,
            class: 'Box_PatientInfo wblock500'
        };
        this.boxPatientLastMeasurements = {
            id: 1,
            class: 'Box_PatientLastMeasurements wblock500'
        }
    })