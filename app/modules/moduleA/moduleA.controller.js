'use strict';
class moduleAControllerFn {
    constructor() {
        console.log("Module Constructor Loaded");
        this.name = "[Module A Loaded]";
    }
}

moduleAControllerFn.$inject = [];

let oModRef = angular.module('ngApp');
oModRef.controller('ModuleAController', moduleAControllerFn);
module.exports = oModRef;
