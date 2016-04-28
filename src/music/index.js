'use strict';

import './css/index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';

import routing from './app.music.config';

import isotopeAngular from '../vendor/angular-isotope';
import soundManagerAngular from '../vendor/angular-soundmanager2';

const APP = angular.module('app.music', [uiRouter, angularAnimate, 'iso.directives', 'angularSoundManager'])

    .config(routing)

    .directive('musicApp', require('./musicAppDirective'))

    .component('musicBoard', require('./musicBoardComponent'))
    .component('musicBoardCards', require('./musicBoardCardsComponent'))
    .component('musicPlayerNav', require('./musicPlayerNavComponent'))

    .service('MusicBoardService', require('./musicBoardService'))

    .name;

export default APP;