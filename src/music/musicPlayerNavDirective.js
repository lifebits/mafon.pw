'use strict';

import playerTemplate from './views/music-player-nav.html';

const player = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playerTemplate
    }
};

export default player;