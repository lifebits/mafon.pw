'use strict';

const musicAppService = function($http) {

    this.getPlayList = () => {
        return $http.jsonp('https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=indie_music&count=20&offset=0&callback=JSON_CALLBACK')
            .then(
                response => {
                    console.dir(response)
                }
            )
    }

};

export default musicAppService;