'use strict';

import musicAppTemplate from './views/music-app.html';

const musicApp = function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {},
        template: musicAppTemplate,
        controllerAs: 'MusicApp',
        controller: function() {

        }
    }
};

export default musicApp;