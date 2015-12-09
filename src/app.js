'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './app.config';
import musicApp from './music';

angular.module('app', [uiRouter, musicApp])
    .config(routing);