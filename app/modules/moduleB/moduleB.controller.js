'use strict';
class moduleBControllerFn {
    constructor() {
        console.log("Module1 Constructor Loaded")
        this.name = "[Module B Loaded]";
    }
}

moduleBControllerFn.$inject = [];

let oModRef = angular.module('ngApp');
oModRef.controller('ModuleBController', moduleBControllerFn);
module.exports = oModRef;
