'use strict';

import './index.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import musicListTemplate from './views/music-list.html';

const CMP = angular.module('cmp', ['ui.router']);


CMP.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '',
            template: ''
        })
        .state('music', {
            url: '/music',
            template: musicListTemplate
        });

    $urlRouterProvider.otherwise('music');
});


CMP.directive('musicList', require('./musicListDirective'));

console.log(CMP);

export default CMP;