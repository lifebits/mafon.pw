'use strict';

import playlistTemplate from './views/music-board-card.html';

export default {
    restrict: 'E',
    bindings: {},
    template: playlistTemplate,
    controller: MusicBoardCardsController
}

function MusicBoardCardsController(MobileDetectService, MusicAppService, DownloadFileService) {
    MusicAppService.getCardList()
        .then(
            result => {
                this.cardsList = result;
            }
        );

    this.isMobile = MobileDetectService.any();

    this.downloadFile = function(url) {
        DownloadFileService.downloadFile(url);
    };
}

MusicBoardCardsController.$inject = ['MobileDetectService', 'MusicAppService', 'DownloadFileService'];