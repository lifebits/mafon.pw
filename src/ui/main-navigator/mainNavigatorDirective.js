'use strict';

import mainNavigatorTemplate from './main-navigator.html';

const mainNavigator = function() {
    return {
        restrict: 'E',
        scope: {},
        template: mainNavigatorTemplate,
        controllerAs: 'MainNavigator',
        controller: function(MainNavigatorService) {
            this.navMainList = MainNavigatorService.getNavMainList();

            console.log("MainNavigatorDir Init");
        }
    }
};

export default mainNavigator;