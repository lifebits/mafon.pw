'use strict';

import playerTemplate from './views/music-player-nav.html';

const player = function(){
    return {
        restrict: 'E',
        scope: {},
        template: playerTemplate,
        controllerAs: 'PlayerNavigation',
        controller: function() {

            this.openCustomPlaylist = false;
            this.editCustomPlaylistState = false;

            this.checkOpenCustomPlaylist = () => {
                this.openCustomPlaylist = ( this.openCustomPlaylist == false ) ? true : false;
            };

            this.checkEditCustomPlaylistState = () => {
                this.editCustomPlaylistState = ( this.editCustomPlaylistState == false ) ? true : false;
            };

            this.aaa = () => {
                //console.log(soundManager.currentPlaying.title);2222
                //console.log("111");
            }

        }
    }
};

export default player;