'use strict';

import playlistTemplate from './views/music-board-card.html';

export default {
    restrict: 'E',
    bindings: {},
    template: playlistTemplate,
    controller: MusicBoardCardsController
}

function MusicBoardCardsController(MobileDetectService, MusicBoardService, DownloadFileService, $scope) {
    MusicBoardService.getCardList()
        .then(
            result => {
                this.cardsList = result;
            }
        );

    this.isMobile = MobileDetectService.any();

    if ( !this.isMobile ) {
        setTimeout(refreshItemsPosition, 2500);
    }

    this.downloadFile = function(url) {
        DownloadFileService.downloadFile(url);
    };

    this.test = () => {
        console.log($scope);
    };

    function refreshItemsPosition() {
        $scope.refresh();
    }
}

MusicBoardCardsController.$inject = ['MobileDetectService', 'MusicBoardService', 'DownloadFileService', '$scope'];