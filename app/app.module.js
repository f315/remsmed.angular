angular
    .module('app', ['ui.router'])

    .component('header', {
        templateUrl:'app/components/header/header.html'
    })
    .component('topnav', {
        templateUrl:'app/components/topnav/topnav.html'
    })
    .component('wblock', {
        templateUrl:'app/components/wblock/wblock.html',
        bindings: {
            wparams: '<'
        }
    })
    .component('wblockPatientInfo', {
        templateUrl:'app/components/wblockPatientInfo/wblockPatientInfo.html',
        controller: function(WblockService){
            this.wparams = WblockService.boxPatientInfo;
        }
    })
    .component('wcontentPatientInfo', {
        templateUrl:'app/components/wblockPatientInfo/wcontentPatientInfo.html',
        controller: function(){
            $('.datepicker').datepicker({
                dateFormat: 'dd.mm.yy'
            });
        }
    })
    .component('wblockPatientLastMeasurements', {
        templateUrl:'app/components/wblockPatientLastMeasurements/wblockPatientLastMeasurements.html',
        controller: function(WblockService){
            this.wparams = WblockService.boxPatientLastMeasurements;
        }
    })
    .component('wcontentPatientLastMeasurements', {
        templateUrl:'app/components/wblockPatientLastMeasurements/wcontentPatientLastMeasurements.html',
        controller: function(WblockService){
            WblockService.getData().then((response) => {
                this.data = response.data;
            //debugger
        });
}
})
.service('WblockService', function($http){
    this.boxPatientInfo = {
        wid: 'Box_PatientInfo',
        wclass: 'Box_PatientInfo wblock500',
        wtitle: 'Мой профиль'
    };
    this.boxPatientLastMeasurements = {
        wid: 'Box_PatientLastMeasurements',
        wclass: 'Box_PatientLastMeasurements wblock500',
        wtitle: 'Текущие показатели состояния'
    };
    this.getData = function() {
        return $http.get('https://shining-heat-2805.firebaseio.com/dataRemsmed.json');
    };
})
