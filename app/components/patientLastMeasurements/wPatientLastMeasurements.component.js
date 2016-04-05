angular
    .module('app')
    .component('wPatientLastMeasurements', {
        templateUrl:'app/components/patientLastMeasurements/wPatientLastMeasurements.component.html',
        controller: function(WblockService){
            this.wparams = WblockService.boxPatientLastMeasurements;
        }
    })
    .component('wcontentPatientLastMeasurements', {
        templateUrl:'app/components/patientLastMeasurements/wcontentPatientLastMeasurements.component.html',
        controller: function(WblockService){
            WblockService.getData().then((response) => {
                this.data = response.data;
                //debugger
            });
        }
    })