'use strict';

import boardTemplate from './views/music-board.html';

const board = function(){
    return {
        restrict: 'E',
        scope: {},
        template: boardTemplate,
        controllerAs: 'MusicBoard',
        controller: function($scope, MusicAppService) {

            this.listPlaylists = MusicAppService.getCardsGroup();


        }
    }
};

export default board;