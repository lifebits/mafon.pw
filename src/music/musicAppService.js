'use strict';

const musicAppService = function($http) {

    this.getCardList = () => {
        let data = getJSONFromVK()
            .then(
                response => {
                    let itemsReceived = response.data.response.items;

                    let cardList = [];
                    let playlist = [];//????

                    itemsReceived.forEach(function(item) {
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
                                        playlist.push(incAttachmentsElem.audio);
                                    }
                                }

                            }

                        }

                        if (checkMusic == true) {
                            cardList.push(newItem);
                        }

                    });

                    /*let result = {
                        cardList: cardList,
                        playList: playlist
                    }

                    console.dir(result);*/

                    return cardList;
                }
            );
        return data;
    };

    let getJSONFromVK = () => {
        return $http.jsonp('https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=rock_music_on&count=2&offset=0&callback=JSON_CALLBACK')
            .then(
                response => response
            )
    };

};

export default musicAppService;