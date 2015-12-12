'use strict';

import './main-nav.scss';

import angular from 'angular';

export default angular.module('app.main-nav', [])

    .directive('mainNavigator', require('./mainNavigatorDirective.js'))
    .service('MainNavigatorService', require('./mainNavigatorService.js'))
    .name

;