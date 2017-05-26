'use strict';
class userAccessControllerFn {
    constructor() {
        console.log("User Access Constructor Loaded");
        this.name = "[User-Access Loaded]";
    }
}

userAccessControllerFn.$inject = [];

let oModRef = angular.module('ngApp');
oModRef.controller('UserAccessController', userAccessControllerFn);
module.exports = oModRef;
