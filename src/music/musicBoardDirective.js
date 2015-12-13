'use strict';

import playListTemplate from './views/play-list.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playListTemplate,
        controllerAs: 'MusicBoard',
        controller: function(MusicAppService) {
            this.musicCard, this.musicList;


            MusicAppService.getPlayList()
                .then(
                    result => {
                        let playList = result;
                        this.musicCard = playList;
                        this.musicList = playList

                        console.dir(this.musicList);
                    }
                );


        }
    }
};

export default playList;