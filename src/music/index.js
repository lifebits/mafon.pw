'use strict';

import './index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

const APP = angular.module('app.music', [uiRouter])

    .config(function($stateProvider) {
        $stateProvider
            .state('music', {
                url: '/music',
                template: '<music-app/>'
            });
    })

    .directive('musicApp', require('./musicAppDirective'))

    .name;

export default APP;