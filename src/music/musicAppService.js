'use strict';

const musicAppService = function($http, $stateParams) {

    this.getCardsGroup = () => {
        let domain = [
            {name: "Exclusive", domainName: "exclusive_muzic"},
            {name: "Club", domainName: "public_of_music"},
            {name: "Indie", domainName: "indie_music"},
            {name: "Instrumental", domainName: "artmelody"},
            {name: "Life", domainName: "gooddaday"},
            {name: "Pop|rus ", domainName: "plmusic"},
            {name: "Rap", domainName: "rap.lyric"},
            {name: "Rock", domainName: "rock_music_on"},
            {name: "Soundtrack", domainName: "ostmelody"},
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

                    /*let result = {1112222
                        cardList: cardList,
                        playList: playlist
                    }

                    console.dir(result);*/

                    return cardList;
                }
            );
    };

    let getJSONFromVK = () => {
        //https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain=rock_music_on&count=4&offset=0&callback=JSON_CALLBACK
        return $http.jsonp(constructedURL())
            .then(
                response => response
            )
    };

    let constructedURL = () => {
        let opts = {
            domainName: $stateParams.playlistId
        };

        return 'https://api.vk.com/method/wall.get?v=5.25&filter=owner&domain='+opts.domainName+'&count=30&offset=0&callback=JSON_CALLBACK'
    }

};

export default musicAppService;