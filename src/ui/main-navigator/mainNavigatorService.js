'use strict';

const mainNavigatorService = function() {

    let listNavElement = [
        {name: "home page", href: "index"},
        {name: "music box", href: "music"},
        {name: "humor", href: "humor"}
    ];

    this.getNavMainList = () => listNavElement;

    this.test = () => {
        console.log("Test Service");
    }
};

export default mainNavigatorService;