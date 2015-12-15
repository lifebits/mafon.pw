'use strict';

const musicAppService = function($http) {

    this.getPlayList = () => {
        let playList = getJSONFromVK()
            .then(
                result => {
                    let items = result.data.response.items;
                    //console.dir(items);

                    let newItems = [];
                    //Отфильтровываем записи без attachments!
                    /*items = items.filter(function(el) {
                        return el['attachments'];
                    })*/

                    items.forEach(function(item) {
                        let checkMusic = false;
                        let newItem = {
                            photo: [],
                            audio: []
                        };

                        for (let prop in item) {

                            newItem.id = item.id;
                            newItem.date = item.date;

                            if (prop == "attachments") {

                                let attachmentsElem = item[prop];

                                for (let prop in attachmentsElem) {
                                    let incAttachmentsElem = attachmentsElem[prop];
                                    if (incAttachmentsElem.type == "photo") {
                                        newItem.photo.push(incAttachmentsElem.photo);
                                    }
                                    if (incAttachmentsElem.type == "audio") {
                                        checkMusic = true;
                                        newItem.audio.push(incAttachmentsElem.audio);
                                    }
                                }

                            }

                        }

                        if (checkMusic == true) {
                            newItems.push(newItem);
                        }

                    });

                    console.dir(newItems);

                    return newItems;
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