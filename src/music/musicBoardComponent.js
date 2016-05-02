'use strict';

import boardTemplate from './views/music-board.html';


class MyController {
    constructor(MusicBoardService, MainNavService) {

        this.sectionList = MusicBoardService.getSectionList();
        this.mainNavIsOpen = MainNavService.mainNavOpenCloseState;

        this.refreshMainNavOpenCloseState = () => {
            this.mainNavIsOpen = MainNavService.mainNavOpenCloseState;
        };

    }

    get mainNavOpenCloseState() {
        this.refreshMainNavOpenCloseState();
        return this.mainNavIsOpen
    }
}

MyController.$inject = ['MusicBoardService', 'MainNavService'];


export default {
    restrict: 'E',
    bindings: {},
    template: boardTemplate,
    controller: MyController
    /*controller: ['MusicBoardService', 'MainNavService', '$state', function (MusicBoardService, MainNavService, $state) {

        this.sectionList = MusicBoardService.getSectionList();

        this.openMainNav = MainNavService.getName();
        //console.log(this.openMainNav);
        //this.boardValue = "Board Value";

        //this.sref = function() {
        //    $state.go('music.playlist', {playlistId: 'pop'})
        //}

    }]*/
}