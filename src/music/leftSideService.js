'use strict';

const leftSideService = function() {

    let listNavMain = [
        {name: "songs of the day"},
        {name: "popular"},
        {name: "genre"},
        {name: "random"}
    ];

    this.getNavMainList = () => listNavMain;

};

export default leftSideService;