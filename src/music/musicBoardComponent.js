'use strict';

import boardTemplate from './views/music-board.html';

export default {
    restrict: 'E',
    bindings: {},
    template: boardTemplate,
    controller: ['MusicBoardService', function (MusicBoardService) {

        this.sectionList = MusicBoardService.getSectionList();

    }]
}