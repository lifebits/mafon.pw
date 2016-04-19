'use strict';

import playlistTemplate from './views/music-board-card.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playlistTemplate,
        controllerAs: 'MusicBoardCards',
        controller: function(MobileDetectService, MusicAppService, DownloadFileService) {

            MusicAppService.getCardList()
                .then(
                    result => {
                        this.cardsList = result;

                        //console.log(this.cardsList);
                    }
                );

            this.isMobile = MobileDetectService.any();

            this.downloadFile = function(url) {
                DownloadFileService.downloadFile(url);
            };

        }
    }
};

export default playList;