'use strict';

import './css/index.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';

//import mainNav from './ui/main-navigator'; надо переделать

import musicApp from './music';

angular.module('app', [uiRouter, musicApp])
    .config(routing)
;

