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
                template: '<music-board/>'
            });
    })

    .directive('musicApp', require('./musicAppDirective'))
    .directive('leftSide', require('./leftSideDirective'))
    .directive('musicBoard', require('./musicBoardDirective'))

    .service('MusicAppService', require('./musicAppService'))
    .service('LeftSideService', require('./leftSideService'))

    .name;

export default APP;