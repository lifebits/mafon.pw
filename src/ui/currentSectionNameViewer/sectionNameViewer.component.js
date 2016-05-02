'use strict';

import stateViewTemplate from './sectionNameViewer.html';

export default {
    restrict: 'E',
    bindings: {},
    template: stateViewTemplate,
    controller: ['$stateParams', 'MainNavService', function ($stateParams, MainNavService) {

        this.currentSection = $stateParams.playlistId;

        this.mainNavOpenCloseStateToggle = function() {
            MainNavService.mainNavOpenCloseState =  MainNavService.mainNavOpenCloseState ? false : true;
        }

    }]
}