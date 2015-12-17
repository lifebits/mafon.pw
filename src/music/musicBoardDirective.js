'use strict';

import playListTemplate from './views/music-board.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playListTemplate,
        controllerAs: 'MusicBoard',
        controller: function($scope, MusicAppService) {
            this.musicCard;

            MusicAppService.getCardList()
                .then(
                    result => {
                        this.musicCard = result;
                        //$scope.songs = result.playList;

                        console.dir($scope);
                        console.log(result);
                    }
                );


        }
    }
};

export default playList;