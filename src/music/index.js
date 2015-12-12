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
            })
            .state('music.section', {
                url: '/:sectionId',
                template: '<play-list/>'
            });
    })

    .directive('musicApp', require('./musicAppDirective'))
    .directive('leftSide', require('./leftSideDirective'))
    .directive('playList', require('./playListDirective'))

    .service('MusicAppService', require('./musicAppService'))
    .service('LeftSideService', require('./leftSideService'))

    .name;

export default APP;