angular
    .module('app')
    .component('wblock', {
        templateUrl:'app/components/layout/wblock.component.html',
        bindings: {
            wparams: '<'
        }
    })