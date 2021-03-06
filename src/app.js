'use strict';

import './css/main.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import analytics from './app.analytics';

//import mainNav from './ui/main-navigator'; //надо переделать
import currentSectionNameViewer from './ui/currentSectionNameViewer';

import musicApp from './music';

angular.module('app', [uiRouter, musicApp, currentSectionNameViewer])
    .config(routing)
    .run(analytics)

    .filter('secondsToDateTime', [function() {
        return function(seconds) {
            return new Date(1970, 0, 1).setSeconds(seconds);
        };
    }])

    .service('MobileDetectService', require('./mobileDetectService'))
    .service('DownloadFileService', require('./downloadFileService'))
;