'use strict';

import './index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from  'angular-animate';

import isotopeAngular from '../vendor/angular-isotope';
import soundManagerAngular from '../vendor/angular-soundmanager2';

const APP = angular.module('app.music', [uiRouter, angularAnimate, 'iso.directives', 'angularSoundManager'])

    .config(function($stateProvider) {
        $stateProvider
            .state('music', {
                url: '/music',
                template: '<music-app/>'
            })
            /*.state('music.section', {
                url: '/:sectionId',
                template: '<music-board/>'
            })*/
            .state('music.playlist', {
                url: '/:playlistId',
                template: '<music-board-cards/>'
            });
    })

    .directive('musicApp', require('./musicAppDirective'))
    .directive('leftSide', require('./leftSideDirective'))
    .directive('musicBoard', require('./musicBoardDirective'))
    .directive('musicBoardCards', require('./musicBoardCardsDirective'))
    .directive('musicPlayerNav', require('./musicPlayerNavDirective'))


    .service('MusicAppService', require('./musicAppService'))
    .service('LeftSideService', require('./leftSideService'))

    .name;

export default APP;