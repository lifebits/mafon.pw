'use strict';

const musicAppService = function($http) {

    this.getCardsGroup = () => {
        let cardsGroup = [
            {name: "Rock | Рок", id: "rock_music_on"},
            {name: "Exclusive"},
            {name: "Indie"},
            {name: "UKG Music"},
            {name: "Soundtrack"},
            {name: "Love"}
        ];
        return cardsGroup;
    };

    this.getCardList = () => {
        return getJSONFromVK()
            .then(
                response => {
                    let itemsReceived = response.data.response.items;
                    console.dir(itemsReceived);

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
    };

    let getJSONFromVK = () => {
        return $http.jsonp('https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=rock_music_on&count=4&offset=0&callback=JSON_CALLBACK')
            .then(
                response => response
            )
    };

};

export default musicAppService;