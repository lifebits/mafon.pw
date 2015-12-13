'use strict';

const musicAppService = function($http) {

    this.getPlayList = () => {
        let playList = getJSONFromVK()
            .then(
                result => {
                    //console.log(result.data.response.items);
                    return result.data.response.items;
                }
            );
        return playList;
    };

    let getJSONFromVK = () => {
        return $http.jsonp('https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=rock_music_on&count=20&offset=0&callback=JSON_CALLBACK')
            .then(
                response => response
            )
    };

};

export default musicAppService;