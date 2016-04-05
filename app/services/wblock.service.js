angular
    .module('app')
    .service('WblockService',WblockService);

function WblockService($http){
    this.boxPatientInfo = {
        wid: 'Box_PatientInfo',
        wclass:'Box_PatientInfo wblock500',
        wtitle:'Мой профиль'
    };
    this.boxPatientLastMeasurements = {
        wid:'Box_PatientLastMeasurements',
        wclass:'Box_PatientLastMeasurements wblock500',
        wtitle:'Текущие показатели состояния'
    };
    this.getData = function () {
        return $http.get('https://shining-heat-2805.firebaseio.com/dataRemsmed.json');
    };
}