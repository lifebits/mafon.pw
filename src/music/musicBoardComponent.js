'use strict';

import boardTemplate from './views/music-board.html';

export default {
    restrict: 'E',
    bindings: {},
    template: boardTemplate,
    controller: ['MusicAppService', function (MusicAppService) {

        this.listPlaylists = MusicAppService.getCardsGroup();

    }]
}
