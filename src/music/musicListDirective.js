'use strict';

import musicListTemplate from './views/music-list.html';

const musicList = function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {},
        template: musicListTemplate
    }
};

export default musicList;