'use strict';

import playerTemplate from './views/music-player-nav.html';

export default {
    restrict: 'E',
    bindings: {},
    template: playerTemplate,
    controller: ['MobileDetectService', '$scope', function(MobileDetectService, $scope) {
        this.openCustomPlaylist = false;
        this.editCustomPlaylistState = false;

        this.checkOpenCustomPlaylist = () => {
            this.openCustomPlaylist = ( this.openCustomPlaylist == false ) ? true : false;
        };

        this.checkEditCustomPlaylistState = () => {
            this.editCustomPlaylistState = ( this.editCustomPlaylistState == false ) ? true : false;
        };

        this.isMobile = MobileDetectService.any();

        this.aaa = () => {
            console.log($scope);
        }
    }]
}