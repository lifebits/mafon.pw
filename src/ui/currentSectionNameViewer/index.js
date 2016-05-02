'use strict';

import './sectionNameViewer.scss';

import angular from 'angular';

export default angular.module('app.currentSectionNameViewer', [])

    .component('currentSectionNameViewer', require('./sectionNameViewer.component.js'))
    .name

;