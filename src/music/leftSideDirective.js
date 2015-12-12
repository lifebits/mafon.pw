'use strict';

import leftSideTemplate from './views/left-side.html';

const leftSide = function() {
    return {
        restrict: 'E',
        scope: {},
        template: leftSideTemplate,
        controllerAs: 'LeftSide',
        controller: function(LeftSideService) {
            this.navMainList = LeftSideService.getNavMainList();
            //console.log("LeftSide Init");
        }
    }
};

export default leftSide;