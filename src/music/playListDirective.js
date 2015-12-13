'use strict';

import playListTemplate from './views/play-list.html';

const playList = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playListTemplate,
        controllerAs: 'PlayList',
        controller: function(MusicAppService) {
            this.playList;

            MusicAppService.getPlayList()
                .then(
                    result => {
                        this.playList = result;
                        console.dir(this.playList);
                    }
                );

            /*var elem = document.querySelector('.grid');
            console.log(elem);
            var iso = new Isotope( elem, {
                // options
                itemSelector: '.item',
                layoutMode: 'fitRows'
            });*/
        }
    }
};

export default playList;