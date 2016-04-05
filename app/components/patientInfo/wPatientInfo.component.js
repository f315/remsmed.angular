angular
    .module('app')
    .component('wPatientInfo', {
        templateUrl:'app/components/patientInfo/wPatientInfo.component.html',
        controller: function(WblockService){
            this.wparams = WblockService.boxPatientInfo;
        }
    })
    .component('wcontentPatientInfo', {
        templateUrl:'app/components/patientInfo/wcontentPatientInfo.component.html',
        controller: function(){
            $('.datepicker').datepicker({
                dateFormat: 'dd.mm.yy'
            });
        }
    })