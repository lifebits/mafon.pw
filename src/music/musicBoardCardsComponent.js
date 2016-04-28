'use strict';

import playlistTemplate from './views/music-board-card.html';

export default {
    restrict: 'E',
    bindings: {},
    template: playlistTemplate,
    controller: MusicBoardCardsController
}

function MusicBoardCardsController(MobileDetectService, MusicBoardService, DownloadFileService, $scope, $timeout) {
    MusicBoardService.getCardList()
        .then(
            result => {
                this.cardsList = result;
            }
        );

    this.isMobile = isMobile();

    if ( !isMobile() ) {
        $timeout(refreshItemsPosition, 2500);
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

    function isMobile() {
        return MobileDetectService.any();
    }
}

MusicBoardCardsController.$inject = ['MobileDetectService', 'MusicBoardService', 'DownloadFileService', '$scope', '$timeout'];