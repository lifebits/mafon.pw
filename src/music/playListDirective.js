'use strict';

import playListTemplate from './views/play-list.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playListTemplate,
        controllerAs: 'PlayList',
        controller: function(MusicAppService) {
            MusicAppService.getPlayList();
        }
    }
};

export default playList;