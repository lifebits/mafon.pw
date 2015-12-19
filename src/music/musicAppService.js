'use strict';

const musicAppService = function($http, $stateParams) {

    this.getCardsGroup = () => {
        let domain = [
            {name: "Rock | Рок", domainName: "rock_music_on"},
            {name: "Exclusive"},
            {name: "Indie", domainName: "indie_music"},
            {name: "UKG Music"},
            {name: "Soundtrack"},
            {name: "Love"}
        ];
        return domain;
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
        return $http.jsonp(constructedURL())
            .then(
                response => response
            )
    };

    let constructedURL = () => {
        let opts = {
            domainName: $stateParams.playlistId
        };

        return 'https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain='+opts.domainName+'&count=4&offset=0&callback=JSON_CALLBACK'
    }

};

export default musicAppService;