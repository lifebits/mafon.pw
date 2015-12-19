'use strict';

import playlistTemplate from './views/music-playlist.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playlistTemplate,
        controllerAs: 'Playlist',
        controller: function(MusicAppService) {

            MusicAppService.getCardList()
                .then(
                    result => {
                        this.musicCard = result;

                        //console.dir($scope);
                        //console.log(result);

                    }
                );

        }
    }
};

export default playList;